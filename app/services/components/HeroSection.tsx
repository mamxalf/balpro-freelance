import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Layanan Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Temukan layanan perencanaan pernikahan dan paket venue komprehensif kami
            yang dirancang untuk menjadikan hari istimewa Anda sempurna.
          </p>
        </div>
      </div>
    </section>
  );
}
