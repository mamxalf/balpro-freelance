import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MessageCircle, PhoneIcon, Mail, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when user navigates to a section
  const handleNavigation = () => {
    onClose();
  };

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
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
              onClick={handleNavigation}
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
              onClick={onClose}
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
                  onClick={handleNavigation}
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
                onClick={handleNavigation}
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
  );
}
