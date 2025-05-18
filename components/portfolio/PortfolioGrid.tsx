"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioItem } from "./types";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
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
  );
}
