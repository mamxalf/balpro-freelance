"use client";

import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import { weddingPackages, marketingPhrases } from "@/app/lib/data";

export function WeddingPackages() {
  // Menggunakan data dari data.ts untuk paket pernikahan
  const packages = [
    {
      title: weddingPackages[0].title,
      price: weddingPackages[0].price,
      description: weddingPackages[0].description,
      features: weddingPackages[0].features,
      paymentTerms: {
        downPayment: "Uang Muka: Rp 500.000",
        fullPayment: "Pelunasan 7 hari sebelum acara",
      },
      whatsappTemplate:
        `Halo saya dari web, berencana ambil service ${weddingPackages[0].title} Balpro. Mohon info lebih lanjut.`,
    },
    {
      title: weddingPackages[1].title,
      subtitle: weddingPackages[1].subtitle,
      price: weddingPackages[1].price,
      description: weddingPackages[1].description,
      features: weddingPackages[1].features,
      paymentTerms: {
        downPayment: "Uang Muka: Rp 1.500.000",
        fullPayment: "Pelunasan 7 hari sebelum acara",
      },
      isPopular: weddingPackages[1].popular,
      whatsappTemplate:
        `Halo saya dari web, berencana ambil service ${weddingPackages[1].title} ${weddingPackages[1].subtitle} Balpro. Mohon info lebih lanjut.`,
    },
    {
      title: weddingPackages[2].title,
      subtitle: weddingPackages[2].subtitle,
      price: weddingPackages[2].price,
      description: weddingPackages[2].description,
      features: weddingPackages[2].features,
      paymentTerms: {
        downPayment: "Uang Muka: Rp 2.500.000",
        fullPayment: "Pelunasan 100% 7 hari sebelum acara",
        additionalInfo: "Biaya transportasi tambahan mungkin berlaku",
      },
      whatsappTemplate:
        `Halo saya dari web, berencana ambil service ${weddingPackages[2].title} ${weddingPackages[2].subtitle} Balpro. Mohon info lebih lanjut.`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              {marketingPhrases.servicesTitle}
            </span>
            <motion.div
              className="h-px w-20 bg-primary mt-1 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pilih Paket Pernikahan Anda
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {marketingPhrases.servicesSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.2,
            when: "beforeChildren",
          }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
