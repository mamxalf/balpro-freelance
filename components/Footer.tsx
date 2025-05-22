import Link from "next/link";
import { PhoneIcon, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { contactInfo, marketingPhrases } from "@/app/lib/data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand and social */}
          <div className="md:max-w-xs">
            <Link href="/" className="inline-block">
              <img
                src="/BALPRO_NEWLOGO_NOBG.png"
                alt="Balpro Wedding Organizer"
                className="h-32 w-auto"
              />
            </Link>
            <p className="text-slate-300 mb-6">
              {marketingPhrases.aboutDescription}
            </p>
            <div className="flex space-x-4">
              <Link
                href={contactInfo.social.instagram}
                aria-label="Instagram"
                className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link
                href={contactInfo.social.facebook}
                aria-label="Facebook"
                className="bg-white/10 hover:bg-primary/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="md:max-w-xs">
            <h3 className="font-medium text-lg mb-4 text-primary/80">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <PhoneIcon className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                <div>
                  <span className="block text-slate-300 group-hover:text-white transition-colors">
                    Telepon
                  </span>
                  <span className="text-white font-medium">
                    {contactInfo.phone}
                  </span>
                </div>
              </li>
              <li className="flex items-start group">
                <Mail className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                <div>
                  <span className="block text-slate-300 group-hover:text-white transition-colors">
                    Email
                  </span>
                  <span className="text-white font-medium">
                    {contactInfo.email}
                  </span>
                </div>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary/80 mr-3 mt-0.5 group-hover:text-primary transition-colors" />
                <div>
                  <span className="block text-slate-300 group-hover:text-white transition-colors">
                    Alamat
                  </span>
                  <span className="text-white font-medium">
                    {contactInfo.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Balpro. Hak cipta dilindungi.
            </p>
            <span className="hidden md:inline text-slate-600">•</span>
            <p className="text-slate-400 text-sm">{marketingPhrases.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
