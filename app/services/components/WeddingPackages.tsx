import { PackageCard } from "./PackageCard";

export function WeddingPackages() {
  const packages = [
    {
      title: "Wedding Consultation",
      price: "Rp 2.000.000",
      description:
        "Initial consultation to understand your vision and provide expert guidance for your wedding planning journey.",
      features: [
        "Meeting & Assistency",
        "Professional guidance",
        "Wedding concept discussion",
        "Budget recommendations",
        "Vendor suggestions",
      ],
      paymentTerms: {
        downPayment: "Down Payment: Rp 500.000",
        fullPayment: "Full payment 7 days before event",
      },
    },
    {
      title: "Wedding Organizer (S)",
      price: "Rp 4.500.000",
      description:
        "Standard wedding planning package with essential services to create a memorable wedding experience.",
      features: [
        "Meeting & Assistency",
        "Plan Deck",
        "Budget Deck",
        "Wedding Organizing",
        "7 Crew for Standard Package",
      ],
      paymentTerms: {
        fullPayment: "Pay 100% within 7 days before event",
        additionalInfo: "Additional transport fee may apply",
      },
      isPopular: true,
    },
    {
      title: "Wedding Organizer (C)",
      price: "Rp 6.500.000",
      description:
        "Complete wedding planning package offering comprehensive services for a stress-free and perfectly executed wedding day.",
      features: [
        "Meeting & Assistency",
        "Surveyor",
        "Vendor Pitching",
        "Plan & Budget Deck",
        "Manual Book",
        "One Call Away",
        "Wedding Organizing",
        "8 Crew for Complete Package",
      ],
      paymentTerms: {
        fullPayment: "Pay 100% within 7 days before event",
        additionalInfo: "Additional transport fee may apply",
      },
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
