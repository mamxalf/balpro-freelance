"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Wedding in Bali",
    description: "A beautiful celebration of love by the sea.",
    image: "/placeholder.svg?height=800&width=600&text=Bali",
  },
  {
    title: "Santorini Dream",
    description: "Elegant white and blue, overlooking the caldera.",
    image: "/placeholder.svg?height=800&width=600&text=Santorini",
  },
  {
    title: "Lake Como Romance",
    description: "Luxury and charm on the Italian lakeshore.",
    image: "/placeholder.svg?height=800&width=600&text=Como",
  },
  {
    title: "Garden Bliss",
    description: "A lush, floral outdoor ceremony.",
    image: "/placeholder.svg?height=800&width=600&text=Garden",
  },
  {
    title: "Classic Ballroom",
    description: "Timeless elegance in a grand ballroom.",
    image: "/placeholder.svg?height=800&width=600&text=Ballroom",
  },
  {
    title: "Rustic Chic",
    description: "Barn wedding with a modern twist.",
    image: "/placeholder.svg?height=800&width=600&text=Rustic",
  },
  {
    title: "Beachfront Vows",
    description: "Sunset ceremony on golden sands.",
    image: "/placeholder.svg?height=800&width=600&text=Beach",
  },
  {
    title: "City Lights",
    description: "Modern love in a metropolitan setting.",
    image: "/placeholder.svg?height=800&width=600&text=City",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-rose-50 via-white to-rose-50 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium inline-block mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Wedding Moments</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover a gallery of magical weddings and love stories we've had the honor to craft for our couples.
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-primary font-medium group"
            >
              <span>Back to Home</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={item.title}
                className={`relative rounded-xl overflow-hidden group shadow-sm`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="aspect-[4/5] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
