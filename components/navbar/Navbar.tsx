import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, PhoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import { TopBar } from "./TopBar";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Elegant Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 text-white backdrop-blur-md border-b border-gray-700/30 transition-all duration-300 shadow-lg">
        {/* Top mini-bar with contact info */}
        <TopBar />

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
              { name: "Tentang", path: "#about" },
              { name: "Layanan", path: "#services" },
              { name: "Testimoni", path: "#testimonials" },
              { name: "Partner", path: "#partners" },
              { name: "Blog", path: "/blog" },
              { name: "Kontak", path: "#contact" },
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
                <span className="relative z-10">Hubungi Kami</span>
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

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
