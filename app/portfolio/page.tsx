"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useState } from "react";
// Import the utility function to generate portfolio items from filenames
import { generatePortfolioItems } from "@/components/portfolio";

// Actual gallery files from public/gallery directory
const galleryFiles = [
  "Alfon & Desy.webp",
  "Amy & Rizky.jpg",
  "Edwin & Rani.jpg",
  "Kintan & Dzikri.jpg",
  "Maghfira & Fajar.jpg",
  "Mega & Mirza.jpg",
  "Putri & Habib.webp",
  "Reza & Dian.webp",
  "Satria & Nisa.webp",
  "Tiara & Mufti.webp",
  "Vina & Wahyu.jpg",
  "Yoshua & Hana.jpg"
];

// Generate portfolio items from the gallery files
export const portfolioItems = generatePortfolioItems(galleryFiles);

export default function PortfolioPage() {
  const [selected, setSelected] = useState<null | (typeof portfolioItems)[0]>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item: (typeof portfolioItems)[0]) => {
    setSelected(item);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelected(null), 300);
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Wedding Moments
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover a gallery of magical weddings and love stories we've had
              the honor to craft for our couples.
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-primary font-medium group"
            >
              <span>Back to Home</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
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
                className={`relative rounded-xl overflow-hidden group shadow-sm cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => openModal(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <div className="aspect-[4/5] w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Modal Popup */}
            {modalOpen && selected && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <motion.div
                  className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-6 flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary focus:outline-none"
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selected.src}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {selected.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {selected.description}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
