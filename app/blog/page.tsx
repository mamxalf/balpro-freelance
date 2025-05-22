"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
} from "lucide-react";
import {
  fetchAllCategories,
  fetchFeaturedPosts,
  fetchRecentPosts,
} from "@/lib/blog-client";
import { BlogPost } from "@/lib/blog-types";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { marketingPhrases } from "@/app/lib/data";

export default function BlogPage() {
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
          fetchRecentPosts(),
        ]);

        setCategories(categoriesData);
        setFeaturedPosts(featuredData);
        setRecentPosts(recentData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
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
    ? recentPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recentPosts;

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecentPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredRecentPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

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

  if (!featuredPosts.length && !recentPosts.length) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-6">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">
                    Coming Soon
                  </span>
                  <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Blog Kami Sedang Dalam Proses Pembuatan
                </h1>
                
                <div className="relative w-full max-w-md mx-auto mb-12">
                  {/* Enhanced background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 via-gray-800/60 to-gray-700/50 rounded-full blur-3xl transform scale-110"></div>
                  
                  {/* Dark backdrop to make the white logo visible */}
                  <div className="relative z-10 bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-full shadow-lg border border-gray-600/50 w-64 h-64 mx-auto flex items-center justify-center">
                    <Image 
                      src="/BALPRO_NEWLOGO_NOBG.png" 
                      alt="Balpro Wedding Organizer" 
                      width={220} 
                      height={220} 
                      className="object-contain brightness-110"
                    />
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Kami sedang menyiapkan cerita pernikahan yang indah, tips perencanaan, dan inspirasi
                  untuk hari spesial Anda. Silakan kembali lagi nanti untuk pembaruan!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Kembali ke Beranda
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="https://www.instagram.com/balpro__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-white px-6 py-3 text-base font-medium text-gray-900 shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Ikuti Instagram Kami
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                  </Link>
                </div>
                
                <div className="mt-16 pt-8 border-t border-gray-200 max-w-2xl mx-auto">
                  <p className="text-sm text-gray-500">
                    Want to be notified when our blog launches? Contact us at <span className="text-primary">info@balpro.id</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

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
                    Showing results for:{" "}
                    <span className="font-medium text-primary">
                      {searchQuery}
                    </span>
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
                        console.log(
                          "Moving to previous page:",
                          currentPage - 1
                        );
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

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
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
                    )
                  )}

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

      <Footer />
    </div>
  );
}
