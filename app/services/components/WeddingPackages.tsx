"use client";

import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";

export function WeddingPackages() {
  const packages = [
    {
      title: "Wedding Consultation",
      price: "Rp 2.000.000",
      description:
        "Initial consultation to understand your vision and provide expert guidance for your wedding planning journey.",
      features: [
        "Meeting & Consistency",
        "Professional guidance",
        "Wedding concept discussion",
        "Budget recommendations",
        "Vendor suggestions",
      ],
      paymentTerms: {
        downPayment: "Down Payment: Rp 500.000",
        fullPayment: "Full payment 7 days before event",
      },
      whatsappTemplate: "Halo saya dari web, berencana ambil service Wedding Consultation Balpro. Mohon info lebih lanjut."
    },
    {
      title: "Wedding Organizer (S) Standard",
      price: "Rp 4.500.000",
      description:
        "Comprehensive wedding planning services to ensure your special day is perfect from start to finish.",
      features: [
        "Everything in Consultation",
        "Timeline creation",
        "Vendor coordination",
        "Day-of coordination",
        "Troubleshooting",
      ],
      paymentTerms: {
        downPayment: "Down Payment: Rp 1.500.000",
        fullPayment: "Full payment 7 days before event",
      },
      isPopular: true,
      whatsappTemplate: "Halo saya dari web, berencana ambil service Wedding Organizer Standard Balpro. Mohon info lebih lanjut."
    },
    {
      title: "Wedding Organizer (C) Complete",
      price: "Rp 6.500.000",
      description:
        "All-inclusive wedding planning with premium services and dedicated support for a stress-free experience.",
      features: [
        "Everything in Standard",
        "Full design concept",
        "Unlimited revisions",
        "Full event management",
        "Post-event follow up",
      ],
      paymentTerms: {
        downPayment: "Down Payment: Rp 2.500.000",
        fullPayment: "Pay 100% within 7 days before event",
        additionalInfo: "Additional transport fee may apply",
      },
      whatsappTemplate: "Halo saya dari web, berencana ambil service Wedding Organizer Complete Balpro. Mohon info lebih lanjut."
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Wedding Packages
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
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose Your Perfect Package
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We offer a range of wedding planning packages to suit your needs
            and budget
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.2, when: "beforeChildren" }}
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
