"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  PhoneIcon,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { portfolioItems } from "./portfolio/page";
import HomeBlogPosts from "@/components/home-blog-posts";
import { WeddingPackages } from "./services/components/WeddingPackages";
import { VenueCard } from "./services/components/VenueCard";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Select only 8 specific images for the slideshow
  const slideshowImages = portfolioItems.slice(0, 8);
  const [activePortfolioItems, setActivePortfolioItems] = useState(
    slideshowImages.slice(0, 4)
  );
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const testimonials = [
    {
      quote:
        "Balpro mengubah pernikahan kami menjadi pengalaman yang luar biasa. Setiap detailnya sempurna.",
      couple: "Rina & Budi",
      location: "Temanggung, Maret 2024",
    },
    {
      quote:
        "Bekerja dengan Balpro adalah keputusan terbaik yang kami buat. Mereka menciptakan suasana elegan dan penuh sukacita.",
      couple: "Dewi & Agus",
      location: "Temanggung, November 2023",
    },
    {
      quote:
        "Perhatian terhadap detailnya luar biasa. Tamu-tamu kami masih membicarakan betapa indahnya semuanya.",
      couple: "Siti & Joko",
      location: "Temanggung, Juli 2022",
    },
  ];

  useEffect(() => {
    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Portfolio image rotation - every 5 seconds
    const portfolioInterval = setInterval(() => {
      setActivePortfolioItems((prevItems) => {
        // Create a new array with shuffled items from our limited set
        const allItems = [...slideshowImages];
        // Fisher-Yates shuffle algorithm
        for (let i = allItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
        }
        return allItems.slice(0, 4);
      });
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(portfolioInterval);
    };
  }, [testimonials.length]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Elegant Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 text-white backdrop-blur-md border-b border-gray-700/30 transition-all duration-300 shadow-lg">
        {/* Top mini-bar with contact info */}
        <div className="hidden lg:block py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 text-xs text-gray-300">
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <PhoneIcon className="h-3 w-3 text-gray-400" />
                <span className="hover:text-white transition-colors">
                  +62 895 3233 51511
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3 text-gray-400" />
                <span className="hover:text-white transition-colors">
                  info@balpro.id
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/balpro__/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.facebook.com/balakosaproject/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="container mx-auto px-4 md:px-6 flex h-16 md:h-20 items-center justify-between relative">
          {/* Decorative elements */}
          <div className="absolute left-8 top-0 h-0.5 w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent hidden md:block"></div>
          <div className="absolute right-8 top-0 h-0.5 w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent hidden md:block"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-0.5 w-32 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent hidden md:block"></div>

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-40 w-auto">
                <Image
                  src="/BALPRO_NEWLOGO_NOBG.png"
                  alt="Balpro Wedding Organizer"
                  width={800}
                  height={256}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {[
              { name: "About", path: "#about" },
              { name: "Services", path: "#services" },
              { name: "Testimonials", path: "#testimonials" },
              { name: "Partners", path: "#partners" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "#contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 relative group py-2 px-3 rounded-md hover:bg-gray-800"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            {/* Contact button with elegant styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="#contact"
                className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-white px-6 py-2 text-sm font-medium text-gray-900 shadow-md shadow-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:scale-105 hover:brightness-110 relative overflow-hidden group border border-white/50"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              </Link>
            </motion.div>

            {/* Mobile menu button with elegant styling */}
            <Button
              variant="ghost"
              size="icon"
              className="relative md:hidden hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5 text-gray-300" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Enhanced with wedding-themed styling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Mobile nav header with decorative elements */}
            <div className="relative flex justify-between items-center mb-10 pb-4 border-b border-gray-700/30">
              <div className="absolute top-0 left-0 h-px w-20 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

              <Link
                href="/"
                className="flex items-center group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="h-32 w-auto">
                  <Image
                    src="/BALPRO_NEWLOGO_NOBG.png"
                    alt="Balpro Wedding Organizer"
                    width={640}
                    height={48}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-800 transition-colors duration-300 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5 text-gray-300" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Mobile nav links with animations */}
            <nav className="flex flex-col space-y-5">
              {[
                { name: "About", path: "#about", icon: "✨" },
                { name: "Services", path: "#services", icon: "💍" },
                { name: "Testimonials", path: "#testimonials", icon: "💬" },
                { name: "Partners", path: "#partners", icon: "🤝" },
                { name: "Blog", path: "/blog", icon: "📝" },
                { name: "Contact", path: "#contact", icon: "📞" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <Link
                    href={item.path}
                    className="text-xl font-medium text-gray-300 hover:text-white transition-colors flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <span className="mr-3 text-base opacity-70">
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Contact info section in mobile menu */}
            <div className="mt-auto pt-8">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-sm border border-gray-700/30">
                <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                  <MessageCircle className="h-3.5 w-3.5 mr-2 text-gray-400" />
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <PhoneIcon className="h-3.5 w-3.5 text-gray-400 mr-2" />
                    <span>+62 895 3233 51511</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-3.5 w-3.5 text-gray-400 mr-2" />
                    <span>info@balpro.id</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-white px-6 py-3.5 text-base font-medium text-gray-900 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:scale-105 hover:brightness-110 relative overflow-hidden group border border-white/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale, opacity }}>
            <video
              src="/wedding_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </motion.div>

          <motion.div
            className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center"
            style={{ y, opacity }}
          >
            <div className="max-w-xl space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Crafting Your Perfect Wedding Story
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Where dreams transform into unforgettable moments, designed with
                elegance and executed with precision.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-white/10 hover:translate-y-[-2px]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span className="text-white text-sm mb-2">
                Scroll to discover
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <motion.div className="w-1 h-1 bg-white rounded-full"></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      Our Story
                    </span>
                    <div className="h-px w-20 bg-primary mt-1"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Crafting Unforgettable Wedding Experiences
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  With over a decade of experience in wedding planning, Balpro
                  has established itself as a premier wedding organizer, known
                  for creating elegant, personalized celebrations that reflect
                  each couple's unique love story.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that your wedding day should be as unique as your
                  love story, which is why we work closely with you to create a
                  celebration that truly reflects your personality and vision.
                </p>
                <div className="pt-4">
                  <Link
                    href="#services"
                    className="group inline-flex items-center text-primary font-medium"
                  >
                    <span>Discover Our Approach</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/wedding_ring.jpg"
                    alt="Wedding couple"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary text-xl font-bold">
                        10+
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">Years of Excellence</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creating magical moments and unforgettable experiences for
                    hundreds of couples.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-slate-50 overflow-hidden">
          <WeddingPackages />

          {/* Venue Cards */}
          <div className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center max-w-3xl mx-auto mt-20 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">
                    Our Venues
                  </span>
                  <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  #semuabisamenikah
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose from our premium wedding venues for your special day
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Balakosa Venue Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <VenueCard
                    name="Balakosa"
                    location="Temanggung"
                    price="Rp 57,6 juta"
                    capacity="300"
                    venueFee="Venue Rental (Full Day)"
                    decorationFee="Full Venue Decoration"
                    cateringFee="Food Catering (Buffet & 4 Stall)"
                    cateringPerPax="Makan 2x & Snack 1x"
                    muaFee="MUA Full Package (Modern Wedding)"
                    photoVideoFee="Photo & Video Documentation"
                    preWeddingFee="Free Pre-Wedding Video (Worth Rp 1,5 juta)"
                    entertainmentFee="Entertainment & MC"
                    soundSystemFee="Sound System & Lighting"
                    mcFee="Professional MC"
                    plannerFee="Wedding Planner"
                    hasPreWeddingBonus={true}
                    additionalFees={[
                      { label: "Venue Capacity", value: "300 pax" },
                      { label: "Additional Decoration", value: "Pergola Akad" },
                    ]}
                  />
                </motion.div>

                {/* Gedung Juang Venue Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <VenueCard
                    name="Gedung Juang"
                    location="Temanggung"
                    price="Rp 62,1 juta"
                    capacity="300"
                    venueFee="Venue Rental (Full Day)"
                    decorationFee="Full Venue Decoration + Pergola Akad"
                    cateringFee="Food Catering (Buffet & 4 Stall)"
                    cateringPerPax="Makan 2x & Snack 1x"
                    muaFee="MUA Full Package (Modern Wedding)"
                    photoVideoFee="Photo & Video Documentation"
                    preWeddingFee="Free Pre-Wedding Video (Worth Rp 1,5 juta)"
                    entertainmentFee="Entertainment & MC"
                    soundSystemFee="Sound System & Lighting"
                    mcFee="Professional MC"
                    plannerFee="Wedding Planner"
                    hasPreWeddingBonus={true}
                    additionalFees={[
                      { label: "Venue Capacity", value: "300 pax" },
                      { label: "Special Feature", value: "100 Visitor Seats" },
                    ]}
                  />
                </motion.div>
              </div>

              {/* Services Page Navigation */}
              <div className="text-center mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-6 py-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <span>Explore All Our Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio/Gallery Section */}
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Our Portfolio
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Moments We've Crafted
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore some of our most memorable weddings and the beautiful
                stories behind them.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activePortfolioItems.map((item, index) => (
                <motion.div
                  key={`${item.src}-${index}`}
                  className={`relative ${
                    index === 0 || index === 3
                      ? "md:col-span-2 md:row-span-2"
                      : ""
                  } rounded-xl overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`${
                      index === 0 || index === 3
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    } w-full relative`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center text-primary font-medium"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-24 md:py-32 bg-slate-50 overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Testimonials
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Our Couples Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from couples who trusted us to bring their wedding dreams
                to life.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative h-[400px] md:h-[300px] rounded-2xl overflow-hidden bg-white shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Wedding testimonial background"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      className="text-center max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        className="w-12 h-12 text-primary/20 mx-auto mb-6"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                      <p className="text-xl md:text-2xl font-light mb-6 italic">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                      <div>
                        <p className="font-medium">
                          {testimonials[activeTestimonial].couple}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[activeTestimonial].location}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-primary w-6"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          id="partners"
          className="py-24 md:py-32 bg-white overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Our Partners
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Trusted Collaborators
              </h2>
              <p className="text-lg text-muted-foreground">
                We collaborate with the best vendors in the industry to ensure
                your special day is perfect.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                "LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_AILSA.png",
                "LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_FRISMA.png",
                "LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_MEREKAMKENANG.png",
                "LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_STARGROOVE.png",
                "LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_ULTRA.png",
              ].map((filename, idx) => {
                // Extract a readable partner name from the filename
                const name = filename
                  .replace("LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_", "")
                  .replace(".png", "")
                  .replace(/_/g, " ");
                return (
                  <motion.div
                    key={filename}
                    className="bg-slate-900 aspect-square relative rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 p-4 flex items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/vendor/${filename}`}
                        alt={`Partner ${name}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">{name}</h3>
                      <p className="text-white/80 text-sm">Partner</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Our Blog
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Wedding Inspiration
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover wedding tips, inspiration, and real wedding stories on
                our blog.
              </p>
            </motion.div>

            <HomeBlogPosts />

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-white px-8 text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1"
              >
                View All Posts
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 md:py-32 bg-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Get In Touch
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let's Create Your Dream Wedding
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to start planning your perfect day? We'd love to hear
                about your vision and help bring it to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                className="md:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary"
                        required
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="wedding-date"
                      className="text-sm font-medium"
                    >
                      Wedding Date (if known)
                    </label>
                    <Input
                      id="wedding-date"
                      type="date"
                      className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell Us About Your Wedding{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Share your vision, questions, or requirements"
                      className="min-h-[120px] rounded-lg border-slate-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-lg h-12 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Message
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      We'll get back to you within 24 hours
                    </p>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="md:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <ul className="space-y-6">
                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <PhoneIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Phone</h4>
                        <p className="text-muted-foreground">
                          +62 895 3233 51511
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available Mon-Fri, 9am-6pm
                        </p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <p className="text-muted-foreground">info@balpro.id</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Office</h4>
                        <p className="text-muted-foreground">
                          Jl. Gilingsari KM. 2 (Angkringan Balakosa Temanggung)
                        </p>
                        <Link
                          href="https://maps.app.goo.gl/tKXZYuu28g6NgiSJ7"
                          target="_blank"
                          className="text-primary text-sm inline-flex items-center mt-1 hover:underline"
                        >
                          <span>View on map</span>
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </motion.li>
                  </ul>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="#"
                        aria-label="Instagram"
                        className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-500 rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="#"
                        aria-label="Facebook"
                        className="bg-[#1877F2] rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="#"
                        aria-label="Twitter"
                        className="bg-[#1DA1F2] rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="https://wa.me/62895323351511"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="bg-[#25D366] rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <MessageCircle className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-medium">Office Hours</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">
                          Monday - Friday
                        </span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg">
                Prefer immediate assistance? Reach out via WhatsApp for a quick
                response.
              </p>
              <motion.div
                className="mt-6 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/62895323351511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="https://wa.me/62895323351511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Contact us on WhatsApp"
          >
            <div className="relative">
              <MessageCircle className="h-7 w-7 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></span>
            </div>
          </Link>
          <div className="absolute top-1/2 right-full -translate-y-1/2 mr-3 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            Chat with us
          </div>
        </motion.div>
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
                  <Instagram className="h-5 w-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </Link>
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
                      +62 895 3233 51511
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
                      Jl. Gilingsari KM. 2 (Angkringan Balakosa Temanggung)
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
