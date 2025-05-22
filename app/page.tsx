"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useAnimation,
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
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { WeddingPackages } from "./services/components/WeddingPackages";
import { VenueCard } from "./services/components/VenueCard";
import { PortfolioSection } from "@/components/portfolio";
import {
  generatePortfolioItems,
  selectFeaturedItems,
} from "@/components/portfolio";
import { testimonials, marketingPhrases, contactInfo } from "./lib/data";

const SlidingLogos = ({ direction = "left" }) => {
  const duration = 20;
  // Menggunakan data logo dari data.ts
  const { vendorLogos } = require("./lib/data");

  // Duplicate the logos array to ensure smooth infinite loop
  const duplicatedLogos = [...vendorLogos, ...vendorLogos];

  return (
    <div className="flex py-8">
      <motion.div
        className="flex items-center"
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{
          x: direction === "left" ? "-100%" : "0%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((filename, idx) => {
          const name = filename
            .replace("LOGO_VENDOR_BALPRO_SEMUABISAMENIKAH_", "")
            .replace(".png", "")
            .replace(/_/g, " ");

          return (
            <motion.div
              key={`${filename}-${idx}`}
              className="mx-6 w-[280px] h-[180px] bg-slate-900 rounded-2xl overflow-hidden p-6 flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/vendor/${filename}`}
                  alt={`Partner ${name}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {name}
                </h3>
                <p className="text-white/90 text-sm">Partner Resmi</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hasBlogPosts, setHasBlogPosts] = useState(false);

  // Function to handle blog posts availability
  const handleBlogPostsLoaded = (hasPosts: boolean) => {
    setHasBlogPosts(hasPosts);
  };

  // Menggunakan data galleryFiles dari data.ts
  const { galleryFiles } = require("./lib/data");

  // Generate portfolio items from the gallery files
  const galleryPortfolioItems = generatePortfolioItems(galleryFiles);

  // Select featured items for the homepage
  const [activePortfolioItems, setActivePortfolioItems] = useState(
    selectFeaturedItems(galleryPortfolioItems)
  );
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Portfolio image rotation - every 5 seconds
    const portfolioInterval = setInterval(() => {
      setActivePortfolioItems((prevItems) => {
        // Create a new array with shuffled items from our limited set
        const allItems = [...galleryPortfolioItems];
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
      <Navbar />

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
                Balpro, #semuabisamenikah
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Berapapun budget Anda untuk menikah, kami siap untuk buat
                pernikahan impian Anda tetap spesial.
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
                  Jelajahi Layanan Kami
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-white/10 hover:translate-y-[-2px]"
                >
                  Hubungi Kami
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
                Gulir ke bawah untuk mengetahui lebih lanjut
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
                      Cerita Kami
                    </span>
                    <div className="h-px w-20 bg-primary mt-1"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Berawal Dari Sekedar Mencoba
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Kami mulai bergerak sekitar tahun 2021 (pasca COVID-19) di
                  Angkringan Balakosa dengan kepercayaan diri untuk mengerjakan
                  sebuah acara pernikahan intimate berisikan 100 tamu, kini kami
                  telah dipercaya hingga +50 klien yang berasal dari wilayah
                  Temanggung bahkan hingga Semarang.
                </p>
                <p className="text-lg text-muted-foreground">
                  Sebagai bentuk komitmen di dunia pernikahan, Balpro Wedding
                  Enterprise akan terus memberikan pelayanan terbaik untuk
                  pernikahan Impian Anda.
                </p>
                {/* <div className="pt-4">
                  <Link
                    href="#services"
                    className="group inline-flex items-center text-primary font-medium"
                  >
                    <span>Discover Our Approach</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div> */}
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
                    src="/balpro_photo_1.jpg"
                    alt="Wedding couple"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">
                        2021
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">Kami Berdiri.</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Terus berkomitmen memberi pelayanan dan pengalaman terbaik
                    pada pernikahan Anda
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
                    PAKET SPESIAL
                  </span>
                  <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  #semuabisamenikah
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pilih dari venue pernikahan premium kami untuk hari spesial
                  Anda
                </p>
                <a
                  href="https://wa.me/62895323351511?text=Halo%20saya%20dari%20web%2C%20mau%20konsultasi%20wedding%20Impian%20mulai%2030%20juta.%20Mohon%20info%20lebih%20lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.6 4.2c-2.1-2.1-5-3.3-8.1-3.3-6.6 0-12 5.4-12 12 0 2.1.6 4.2 1.7 6l-1.8 6.6 6.8-1.7c1.8 1 3.8 1.5 5.9 1.5 6.6 0 12-5.4 12-12 0-3.1-1.2-6-3.3-8.1zM12 21.4c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.5.9.9-3.4v-.2c-.9-1.6-1.4-3.3-1.4-5.2 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7 0 5.2-4.2 9.4-9.4 9.4zm5.1-7.1c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1.1-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2-1.1-1.6-1.4-2.7-3.2-3-3.7-.2-.5 0-.7.2-1 .2-.2.4-.5.6-.5.2 0 .3 0 .4.1.2 0 .3 0 .5.6.1.4.5 1.4.5 1.5.1.1.1.2 0 .3 0 0-.1.1-.2.2-.1.1-.2.1-.3.2-.1 0-.2 0-.3-.1l-.5-.2c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.6.3-.5.3-.9.6-1.2 1-.2.2 0 .5.1.6.9 1.4 2 2.6 3.3 3.5.4.4.9.7 1.4 1 .5.3 1 .5 1.6.7.5.2 1 .2 1.5.1.5-.1 1-.4 1.4-.7.4-.3.7-.7.9-1.1.1-.4.1-.8 0-1.2-.1-.4-.4-.6-.8-.8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Konsultasi Wedding Impian Mulai 30 Juta (100 pax)
                </a>
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
                    whatsappTemplate="Saya dari web, berencana ambil paket #semuabisamenikah yang Venue Balakosa. Mohon info detail."
                    additionalFees={[
                      { label: "Venue Capacity", value: "300 pax" },
                      { label: "Additional Decoration", value: "Pergola Akad" },
                    ]}
                    imageSrc="/balakosa_venue.jpg"
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
                    whatsappTemplate="Saya dari web, berencana ambil paket #semuabisamenikah yang Venue Gd Juang. Mohon info detail."
                    additionalFees={[
                      { label: "Venue Capacity", value: "300 pax" },
                      { label: "Special Feature", value: "100 Visitor Seats" },
                    ]}
                    imageSrc="/gd_juang.jpg"
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
                    <span>Jelajahi Semua Layanan Kami</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio/Gallery Section */}
        <PortfolioSection items={activePortfolioItems} />

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
                  {marketingPhrases.testimonialsTitle}
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {marketingPhrases.testimonialsSubtitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                Lihat apa yang dikatakan pasangan yang telah mempercayakan
                pernikahan mereka kepada kami
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative h-[500px] md:h-[450px] rounded-2xl overflow-hidden bg-white shadow-lg">
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
                      className="text-center max-w-3xl h-full flex flex-col justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        className="w-10 h-10 text-primary/20 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                      <div className="max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent mb-4 px-4">
                        <p className="text-lg md:text-xl font-light italic leading-relaxed">
                          "{testimonials[activeTestimonial].quote}"
                        </p>
                      </div>
                      <div className="mt-auto">
                        <p className="font-medium text-lg">
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
                  {marketingPhrases.partnersTitle}
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Partner Terpercaya Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                {marketingPhrases.partnersSubtitle}
              </p>
            </motion.div>

            <div className="relative overflow-hidden py-8">
              <div className="relative">
                {/* First row */}
                <div className="flex mb-8">
                  <SlidingLogos direction="left" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Loader - Hidden component to initialize blog posts */}
        <div className="hidden">
          <HomeBlogPosts onPostsLoaded={handleBlogPostsLoaded} />
        </div>

        {/* Blog Section - Only shown if blog posts exist */}
        {hasBlogPosts && (
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
                  Discover wedding tips, inspiration, and real wedding stories
                  on our blog.
                </p>
              </motion.div>

              <HomeBlogPosts onPostsLoaded={handleBlogPostsLoaded} />

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
                  Lihat Semua Artikel
                </Link>
              </motion.div>
            </div>
          </section>
        )}

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
                  {marketingPhrases.contactTitle}
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Wujudkan Pernikahan Impian Anda
              </h2>
              <p className="text-lg text-muted-foreground">
                {marketingPhrases.contactSubtitle}
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
                <h3 className="text-2xl font-bold mb-6">
                  Kirim Pesan kepada Kami
                </h3>
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
                        Nama Anda <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
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
                        Nomor Telepon <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="phone"
                        placeholder="Masukkan nomor telepon Anda"
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
                      Alamat Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan alamat email Anda"
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
                      Tanggal Pernikahan (jika sudah ditentukan)
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
                      Ceritakan Tentang Pernikahan Anda{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Bagikan visi, pertanyaan, atau kebutuhan Anda"
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
                      Kirim Pesan
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      Kami akan menghubungi Anda dalam waktu 24 jam
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
                    {marketingPhrases.contactTitle}
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
                        <h4 className="font-medium text-lg">Telepon</h4>
                        <p className="text-muted-foreground">
                          {contactInfo.phone}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {contactInfo.officeHours[0].days},{" "}
                          {contactInfo.officeHours[0].hours}
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
                        <p className="text-muted-foreground">
                          {contactInfo.email}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Kami akan merespon dalam 24 jam
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
                        <h4 className="font-medium text-lg">Kantor</h4>
                        <p className="text-muted-foreground">
                          {contactInfo.address}
                        </p>
                        <Link
                          href="https://maps.app.goo.gl/tKXZYuu28g6NgiSJ7"
                          target="_blank"
                          className="text-primary text-sm inline-flex items-center mt-1 hover:underline"
                        >
                          <span>Lihat di peta</span>
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </motion.li>
                  </ul>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium text-lg mb-4">Hubungi Kami</h4>
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={contactInfo.social.instagram}
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
                        href={contactInfo.social.facebook}
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
                        href={contactInfo.whatsapp}
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
                      <h4 className="font-medium">Jam Operasional</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">
                          {contactInfo.officeHours[0].days}
                        </span>
                        <span>{contactInfo.officeHours[0].hours}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">
                          {contactInfo.officeHours[1].days}
                        </span>
                        <span>{contactInfo.officeHours[1].hours}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">
                          {contactInfo.officeHours[2].days}
                        </span>
                        <span>{contactInfo.officeHours[2].hours}</span>
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
                Butuh bantuan segera? Hubungi kami melalui WhatsApp untuk respon cepat.
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
                  <span className="font-medium">Chat via WhatsApp</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <motion.div
          className="fixed bottom-28 right-6 z-40"
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
            Chat dengan kami
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
