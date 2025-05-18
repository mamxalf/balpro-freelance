import { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { WeddingPackages } from "./components/WeddingPackages";
import { VenuePackages } from "./components/VenuePackages";
import { TermsAndConditions } from "./components/TermsAndConditions";

export const metadata: Metadata = {
  title: "Layanan & Paket Wedding Organizer | Balpro Temanggung",
  description: "Jasa Wedding Organizer dengan paket Wedding Consultation (Rp 2.000.000), Standard Package (Rp 4.500.000), dan Complete Package (Rp 6.500.000) di Temanggung.",
  keywords: "wedding organizer Temanggung, paket wedding, wedding consultation, wedding venue, Balakosa, Gedung Juang, #semuabisamenikah",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Layanan & Paket Wedding Organizer | Balpro Temanggung",
    description: "Jasa Wedding Organizer dengan paket Wedding Consultation (Rp 2.000.000), Standard Package (Rp 4.500.000), dan Complete Package (Rp 6.500.000) di Temanggung.",
    url: "/services",
    type: "website",
    images: [{
      url: "/services-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Balpro Wedding Enterprise Services"
    }]
  }
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WeddingPackages />
      <VenuePackages />
      <TermsAndConditions />
    </main>
  );
}
