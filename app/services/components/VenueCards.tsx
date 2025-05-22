"use client";

import { motion } from "framer-motion";
import { VenueCard } from "./VenueCard";
import { venuePackages, marketingPhrases } from "@/app/lib/data";

export function VenueCards() {
  // Data untuk Balakosa Venue (menggunakan data dari venuePackages[0])
  const balakosaVenue = {
    name: venuePackages[0].name,
    location: "Temanggung",
    price: venuePackages[0].price,
    capacity: venuePackages[0].capacity,
    venueFee: "Venue Rental (Full Day)",
    decorationFee: "Dekorasi Venue Lengkap",
    cateringFee: "Katering (Buffet & 4 Stall)",
    cateringPerPax: "Makan 2x & Snack 1x",
    muaFee: "MUA Paket Lengkap (Modern Wedding)",
    photoVideoFee: "Dokumentasi Foto & Video",
    preWeddingFee: "Gratis Video Pre-Wedding (Senilai Rp 1,5 juta)",
    entertainmentFee: "Hiburan & MC",
    soundSystemFee: "Sound System & Pencahayaan",
    mcFee: "MC Profesional",
    plannerFee: "Wedding Planner",
    hasPreWeddingBonus: true,
    additionalFees: [
      { label: "Kapasitas Venue", value: venuePackages[0].capacity },
      { label: "Dekorasi Tambahan", value: "Pergola Akad" },
    ],
    imageSrc: venuePackages[0].image || "/balakosa_venue.jpg",
    whatsappTemplate: `Saya dari web, berencana ambil paket #semuabisamenikah yang Venue ${venuePackages[0].name}. Mohon info detail.`,
  };

  // Data untuk Gedung Juang Venue (menggunakan data dari venuePackages[1])
  const gedungJuangVenue = {
    name: venuePackages[1].name,
    location: "Temanggung",
    price: venuePackages[1].price,
    capacity: venuePackages[1].capacity,
    venueFee: "Venue Rental (Full Day)",
    decorationFee: "Dekorasi Venue Lengkap + Pergola Akad",
    cateringFee: "Katering (Buffet & 4 Stall)",
    cateringPerPax: "Makan 2x & Snack 1x",
    muaFee: "MUA Paket Lengkap (Modern Wedding)",
    photoVideoFee: "Dokumentasi Foto & Video HD",
    preWeddingFee: "Gratis Video Pre-Wedding (Senilai Rp 1,5 juta)",
    entertainmentFee: "Hiburan & MC",
    soundSystemFee: "Sound System Profesional & Pencahayaan",
    mcFee: "MC Profesional",
    plannerFee: "Wedding Planner Full Service",
    hasPreWeddingBonus: true,
    additionalFees: [
      { label: "Kapasitas Venue", value: venuePackages[1].capacity },
      { label: "Dekorasi Premium", value: "Pergola Akad" },
    ],
    imageSrc: venuePackages[1].image || "/gd-juang_venue.jpg",
    whatsappTemplate: `Saya dari web, berencana ambil paket #semuabisamenikah yang Venue ${venuePackages[1].name}. Mohon info detail.`,
  };

  return (
    <section className="py-16 md:py-24 bg-white">
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
              Venue Packages
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
            Paket Venue Lengkap
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Paket all-in-one dengan venue pilihan untuk pernikahan impian Anda
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Balakosa Venue Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VenueCard
              name={balakosaVenue.name}
              location={balakosaVenue.location}
              price={balakosaVenue.price}
              capacity={balakosaVenue.capacity.replace(/[^0-9]/g, '')}
              venueFee={balakosaVenue.venueFee}
              decorationFee={balakosaVenue.decorationFee}
              cateringFee={balakosaVenue.cateringFee}
              cateringPerPax={balakosaVenue.cateringPerPax}
              muaFee={balakosaVenue.muaFee}
              photoVideoFee={balakosaVenue.photoVideoFee}
              preWeddingFee={balakosaVenue.preWeddingFee}
              entertainmentFee={balakosaVenue.entertainmentFee}
              soundSystemFee={balakosaVenue.soundSystemFee}
              mcFee={balakosaVenue.mcFee}
              plannerFee={balakosaVenue.plannerFee}
              hasPreWeddingBonus={balakosaVenue.hasPreWeddingBonus}
              whatsappTemplate={balakosaVenue.whatsappTemplate}
              additionalFees={balakosaVenue.additionalFees}
              imageSrc={balakosaVenue.imageSrc}
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
              name={gedungJuangVenue.name}
              location={gedungJuangVenue.location}
              price={gedungJuangVenue.price}
              capacity={gedungJuangVenue.capacity.replace(/[^0-9]/g, '')}
              venueFee={gedungJuangVenue.venueFee}
              decorationFee={gedungJuangVenue.decorationFee}
              cateringFee={gedungJuangVenue.cateringFee}
              cateringPerPax={gedungJuangVenue.cateringPerPax}
              muaFee={gedungJuangVenue.muaFee}
              photoVideoFee={gedungJuangVenue.photoVideoFee}
              preWeddingFee={gedungJuangVenue.preWeddingFee}
              entertainmentFee={gedungJuangVenue.entertainmentFee}
              soundSystemFee={gedungJuangVenue.soundSystemFee}
              mcFee={gedungJuangVenue.mcFee}
              plannerFee={gedungJuangVenue.plannerFee}
              hasPreWeddingBonus={gedungJuangVenue.hasPreWeddingBonus}
              whatsappTemplate={gedungJuangVenue.whatsappTemplate}
              additionalFees={gedungJuangVenue.additionalFees}
              imageSrc={gedungJuangVenue.imageSrc}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
