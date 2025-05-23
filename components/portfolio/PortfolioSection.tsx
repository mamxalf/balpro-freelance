"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioGrid } from "./PortfolioGrid";
import { PortfolioItem } from "./types";
import { marketingPhrases } from "@/app/lib/data";

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  return (
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
              {marketingPhrases.portfolioTitle}
            </span>
            <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {marketingPhrases.portfolioSubtitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {marketingPhrases.portfolioDescription}
          </p>
        </motion.div>

        <PortfolioGrid items={items} />

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
            <span>Lihat Portfolio Lengkap</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
