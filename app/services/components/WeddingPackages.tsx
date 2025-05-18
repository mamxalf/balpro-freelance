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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Wedding Packages
            </span>
            <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a range of wedding planning packages to suit your needs
            and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
