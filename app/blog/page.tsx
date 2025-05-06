"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PhoneIcon,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
import {
  fetchAllCategories,
  fetchFeaturedPosts,
  fetchRecentPosts
} from "@/lib/blog-client";
import { BlogPost } from "@/lib/blog-types";

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Reduced to 3 to ensure multiple pages with our sample content

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const [categoriesData, featuredData, recentData] = await Promise.all([
          fetchAllCategories(),
          fetchFeaturedPosts(),
          fetchRecentPosts()
        ]);

        setCategories(categoriesData);
        setFeaturedPosts(featuredData);
        setRecentPosts(recentData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        // Set empty arrays as fallback
        setCategories([]);
        setFeaturedPosts([]);
        setRecentPosts([]);
      }
    };

    fetchData();
  }, []);

  // Filter posts based on search query
  const filteredRecentPosts = searchQuery
    ? recentPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recentPosts;

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecentPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredRecentPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Log when current page changes
  useEffect(() => {
    console.log("Current page changed to:", currentPage);
    console.log("Showing posts:", indexOfFirstPost, "to", indexOfLastPost);
    console.log("Current posts:", currentPosts.length);
  }, [currentPage, indexOfFirstPost, indexOfLastPost, currentPosts.length]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-wider text-primary">
              Balpro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#partners"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Partners
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col p-6"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-center mb-10">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xl font-semibold tracking-wider text-primary">
                Balpro
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link
              href="/#about"
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/#services"
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/#testimonials"
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Testimonials</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/#partners"
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Partners</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="text-2xl font-medium text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/#contact"
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </nav>
          <div className="mt-auto pt-10">
            <Link
              href="/#contact"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}

      <main className="flex-1 pt-16">
        {/* Blog Header */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Our Blog
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Wedding Inspiration & Ideas
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover wedding tips, inspiration, and real wedding stories to
                help you plan your perfect day.
              </p>

              <div className="relative max-w-md mx-auto">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-12 pr-4 py-3 rounded-full border-primary/20 focus-visible:ring-primary/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-3 h-5 w-5 text-primary/60" />
                </div>
                {searchQuery && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    Showing results for: <span className="font-medium text-primary">{searchQuery}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Featured Posts</h2>
              <div className="h-1 w-20 bg-primary/20 mt-2"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-6">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
              <div className="h-1 w-20 bg-primary/20 mt-2"></div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-5 py-2 bg-white rounded-full border border-primary/20 text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow"
                    >
                      {category}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Recent Posts</h2>
              <div className="h-1 w-20 bg-primary/20 mt-2"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary text-sm font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >

              {filteredRecentPosts.length > 0 && (
                <nav className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => {
                      if (currentPage > 1) {
                        console.log("Moving to previous page:", currentPage - 1);
                        setCurrentPage(currentPage - 1);
                      }
                    }}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Previous page</span>
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant="outline"
                      size="sm"
                      className={`rounded-full ${
                        currentPage === page
                          ? "bg-primary text-white hover:bg-primary/90 border-primary"
                          : ""
                      }`}
                      onClick={() => {
                        console.log("Moving to page:", page);
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => {
                      if (currentPage < totalPages) {
                        console.log("Moving to next page:", currentPage + 1);
                        setCurrentPage(currentPage + 1);
                      }
                    }}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span className="sr-only">Next page</span>
                  </Button>
                </nav>
              )}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Stay Updated
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest wedding tips, trends, and inspiration delivered
                straight to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full"
                />
                <Button type="submit" className="rounded-full">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            {/* Brand and social */}
            <div className="md:max-w-xs">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold tracking-wider text-white">
                  Balpro
                </span>
                <span className="block text-sm text-primary/80 mt-1">
                  Wedding Organizer
                </span>
              </Link>
              <p className="text-slate-300 mb-6">
                Creating magical moments and unforgettable wedding experiences
                with creativity, elegance, and attention to detail.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick links and services in one column */}
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h3 className="font-medium text-lg mb-4 text-primary/80">
                  Explore
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#about"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4 text-primary/80">
                  Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Full Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Partial Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Day Coordination
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Destination
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact info */}
            <div className="md:max-w-xs">
              <h3 className="font-medium text-lg mb-4 text-primary/80">
                Say Hello
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <PhoneIcon className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">
                      Give us a call
                    </span>
                    <span className="text-white font-medium">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Mail className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">
                      Email us
                    </span>
                    <span className="text-white font-medium">
                      info@balpro.id
                    </span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">
                      Find us
                    </span>
                    <span className="text-white font-medium">
                      123 Wedding Lane
                      <br />
                      Celebration City, WD 12345
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Balpro. All rights reserved.
              </p>
              <span className="hidden md:inline text-slate-600">•</span>
              <p className="text-slate-400 text-sm text-center md:text-left">
                Crafting dream weddings since 2014
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
