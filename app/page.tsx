"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const testimonials = [
    {
      quote:
        "Balpro transformed our wedding into a magical experience beyond our wildest dreams. Every detail was perfect.",
      couple: "Sarah & Michael",
      location: "Bali, June 2024",
    },
    {
      quote: "Working with Balpro was the best decision we made. They created an atmosphere of pure elegance and joy.",
      couple: "Emma & James",
      location: "Santorini, May 2024",
    },
    {
      quote:
        "The attention to detail was extraordinary. Our guests are still talking about how beautiful everything was.",
      couple: "Olivia & William",
      location: "Lake Como, April 2024",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-wider text-primary">Balpro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Partners
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <span className="text-xl font-semibold tracking-wider text-primary">Balpro</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6">
              {["About", "Services", "Testimonials", "Partners", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
                  className="text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Link
                href="#contact"
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale, opacity }}>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Elegant wedding scene"
              fill
              className="object-cover"
              priority
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
                Where dreams transform into unforgettable moments, designed with elegance and executed with precision.
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
              <span className="text-white text-sm mb-2">Scroll to discover</span>
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
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">Our Story</span>
                    <div className="h-px w-20 bg-primary mt-1"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Crafting Unforgettable Wedding Experiences
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  With over a decade of experience in wedding planning, Balpro has established itself as a premier
                  wedding organizer, known for creating elegant, personalized celebrations that reflect each couple's
                  unique love story.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that your wedding day should be as unique as your love story, which is why we work closely
                  with you to create a celebration that truly reflects your personality and vision.
                </p>
                <div className="pt-4">
                  <Link href="#services" className="group inline-flex items-center text-primary font-medium">
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
                    src="/placeholder.svg?height=1200&width=800"
                    alt="Wedding couple"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary text-xl font-bold">10+</span>
                    </div>
                    <h3 className="text-lg font-medium">Years of Excellence</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creating magical moments and unforgettable experiences for hundreds of couples.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Our Services</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Tailored Wedding Experiences</h2>
              <p className="text-lg text-muted-foreground">
                We offer comprehensive wedding planning services tailored to your unique vision and requirements,
                ensuring every detail is meticulously planned and flawlessly executed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Wedding Planning",
                  description:
                    "Comprehensive planning and coordination from concept to execution, ensuring a seamless and stress-free experience.",
                  features: [
                    "Venue selection and management",
                    "Budget planning and management",
                    "Vendor coordination",
                    "Timeline creation and management",
                    "Day-of coordination and supervision",
                  ],
                  color: "bg-white",
                },
                {
                  title: "Partial Planning",
                  description:
                    "Perfect for couples who have started planning but need expert guidance to bring their vision to life.",
                  features: [
                    "Personalized wedding concept design",
                    "Vendor recommendations and management",
                    "Timeline creation and management",
                    "Design and styling consultation",
                    "Month-of coordination",
                  ],
                  color: "bg-primary/5",
                },
                {
                  title: "Day-of Coordination",
                  description:
                    "Ensuring your wedding day runs smoothly while you focus on creating memories that last a lifetime.",
                  features: [
                    "Detailed timeline creation",
                    "Vendor coordination",
                    "Ceremony and reception setup",
                    "Guest management",
                    "Emergency kit and problem-solving",
                  ],
                  color: "bg-white",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.color} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="h-12 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Request Custom Package
              </Link>
            </motion.div>
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
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Our Portfolio</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Moments We've Crafted</h2>
              <p className="text-lg text-muted-foreground">
                Explore some of our most memorable weddings and the beautiful stories behind them.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""} rounded-xl overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="aspect-square md:aspect-auto md:h-full w-full">
                    <Image
                      src={`/placeholder.svg?height=600&width=600&text=Wedding+${index + 1}`}
                      alt={`Wedding portfolio ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-medium">Wedding in Bali</h3>
                      <p className="text-white/80 text-sm">A beautiful celebration of love</p>
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
              <Link href="/portfolio" className="inline-flex items-center text-primary font-medium">
                <span>View Full Portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Testimonials</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Our Couples Say</h2>
              <p className="text-lg text-muted-foreground">
                Hear from couples who trusted us to bring their wedding dreams to life.
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
                      <svg className="w-12 h-12 text-primary/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                      <p className="text-xl md:text-2xl font-light mb-6 italic">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                      <div>
                        <p className="font-medium">{testimonials[activeTestimonial].couple}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].location}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-primary w-6" : "bg-gray-300"}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Our Partners</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Trusted Collaborators</h2>
              <p className="text-lg text-muted-foreground">
                We collaborate with the best vendors in the industry to ensure your special day is perfect.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                <motion.div
                  key={partner}
                  className="bg-slate-50 aspect-square relative rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: partner * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Partner+${partner}`}
                    alt={`Partner ${partner}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium">Partner Name</h3>
                    <p className="text-white/80 text-sm">Photography</p>
                  </div>
                </motion.div>
              ))}
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
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Our Blog</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Wedding Inspiration</h2>
              <p className="text-lg text-muted-foreground">
                Discover wedding tips, inspiration, and real wedding stories on our blog.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((blog) => (
                <motion.div
                  key={blog}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: blog * 0.2 }}
                >
                  <div className="relative h-60">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Blog+${blog}`}
                      alt={`Blog post ${blog}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <span>May 4, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Wedding Tips</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">10 Tips for Choosing the Perfect Wedding Venue</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      Finding the right venue is one of the most important decisions you'll make when planning your
                      wedding. Here are our top tips to help you choose the perfect location.
                    </p>
                    <Link
                      href="/blog/wedding-venue-tips"
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
        <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
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
                <span className="text-xs uppercase tracking-widest text-primary font-medium">Get In Touch</span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's Create Your Dream Wedding</h2>
              <p className="text-lg text-muted-foreground">
                Ready to start planning your perfect day? We'd love to hear about your vision and help bring it to life.
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
                    <label htmlFor="wedding-date" className="text-sm font-medium">
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
                      Tell Us About Your Wedding <span className="text-primary">*</span>
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
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <ul className="space-y-6">
                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <PhoneIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri, 9am-6pm</p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <p className="text-muted-foreground">info@balpro.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Office</h4>
                        <p className="text-muted-foreground">
                          123 Wedding Lane, Suite 101
                          <br />
                          Celebration City, WD 12345
                        </p>
                        <Link
                          href="https://maps.google.com"
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
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="#"
                        aria-label="Instagram"
                        className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-500 rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="#"
                        aria-label="Facebook"
                        className="bg-[#1877F2] rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="#"
                        aria-label="Twitter"
                        className="bg-[#1DA1F2] rounded-full p-3 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="https://wa.me/15551234567"
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
                        <span className="text-muted-foreground">Monday - Friday</span>
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
              <p className="text-lg">Prefer immediate assistance? Reach out via WhatsApp for a quick response.</p>
              <motion.div className="mt-6 inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://wa.me/15551234567"
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
            href="https://wa.me/15551234567"
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
                <span className="text-2xl font-semibold tracking-wider text-white">Balpro</span>
                <span className="block text-sm text-primary/80 mt-1">Wedding Organizer</span>
              </Link>
              <p className="text-slate-300 mb-6">
                Creating magical moments and unforgettable wedding experiences with creativity, elegance, and attention
                to detail.
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

            {/* Quick links and services in one column */}
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h3 className="font-medium text-lg mb-4 text-primary/80">Explore</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#about"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
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
                      href="#contact"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4 text-primary/80">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Full Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Partial Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                      Day Coordination
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
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
              <h3 className="font-medium text-lg mb-4 text-primary/80">Say Hello</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <PhoneIcon className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">
                      Give us a call
                    </span>
                    <span className="text-white font-medium">+1 (555) 123-4567</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Mail className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">Email us</span>
                    <span className="text-white font-medium">info@balpro.com</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-slate-300 group-hover:text-white transition-colors">Find us</span>
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
              <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Balpro. All rights reserved.</p>
              <span className="hidden md:inline text-slate-600">•</span>
              <p className="text-slate-400 text-sm text-center md:text-left">Crafting dream weddings since 2014</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
