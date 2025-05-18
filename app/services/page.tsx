import { ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Balpro Wedding Enterprise",
  description: "Explore our comprehensive wedding planning services and venue packages.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
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
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive wedding planning services and venue packages
              tailored to make your special day perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
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
              We offer a range of wedding planning packages to suit your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Wedding Consultation Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="h-12 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-2">Wedding Consultation</h3>
              <p className="text-xl font-bold text-primary mb-4">Rp 2.000.000</p>
              <p className="text-muted-foreground mb-6">
                Initial consultation to understand your vision and provide expert guidance for your wedding planning journey.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Meeting & Assistency</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Professional guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Wedding concept discussion</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Budget recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Vendor suggestions</span>
                </li>
              </ul>
              <div className="bg-slate-50 p-4 rounded-lg text-sm mb-6">
                <p className="font-medium">Payment Terms</p>
                <p className="text-muted-foreground">Down Payment: Rp 500.000</p>
                <p className="text-muted-foreground">Full payment 7 days before event</p>
              </div>
            </div>

            {/* Wedding Organizer (S) Package */}
            <div className="bg-primary/5 rounded-2xl p-8 shadow-lg border border-primary/10 relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="h-12 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-2">Wedding Organizer (S)</h3>
              <p className="text-xl font-bold text-primary mb-4">Rp 4.500.000</p>
              <p className="text-muted-foreground mb-6">
                Standard wedding planning package with essential services to create a memorable wedding experience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Meeting & Assistency</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Plan Deck</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Budget Deck</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Wedding Organizing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>7 Crew for Standard Package</span>
                </li>
              </ul>
              <div className="bg-slate-50 p-4 rounded-lg text-sm mb-6">
                <p className="font-medium">Payment Terms</p>
                <p className="text-muted-foreground">Pay 100% within 7 days before event</p>
                <p className="text-muted-foreground">Additional transport fee may apply</p>
              </div>
            </div>

            {/* Wedding Organizer (C) Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="h-12 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-2">Wedding Organizer (C)</h3>
              <p className="text-xl font-bold text-primary mb-4">Rp 6.500.000</p>
              <p className="text-muted-foreground mb-6">
                Complete wedding planning package offering comprehensive services for a stress-free and perfectly executed wedding day.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Meeting & Assistency</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Surveyor</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Vendor Pitching</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Plan & Budget Deck</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Manual Book</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>One Call Away</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Wedding Organizing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>8 Crew for Complete Package</span>
                </li>
              </ul>
              <div className="bg-slate-50 p-4 rounded-lg text-sm mb-6">
                <p className="font-medium">Payment Terms</p>
                <p className="text-muted-foreground">Pay 100% within 7 days before event</p>
                <p className="text-muted-foreground">Additional transport fee may apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Packages Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                Venue Packages
              </span>
              <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              #semuabisamenikah
            </h2>
            <p className="text-lg text-muted-foreground">
              All-inclusive wedding packages at our premium venues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Balakosa Venue Package */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium z-20">
                  Balakosa
                </div>
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="text-3xl font-bold">Balakosa Venue</h3>
                  <p className="text-white/80">Temanggung</p>
                </div>
                <div className="absolute inset-0 bg-slate-900/20"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-2xl font-bold">Complete Package</h4>
                    <p className="text-primary font-bold text-3xl">Rp 57,6 juta</p>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <p className="text-primary font-medium">300 pax</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-medium text-lg mb-3">Venue & Decoration</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Venue: Rp 3.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Decoration: Rp 7.600.000</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-lg mb-3">Food & Catering</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Buffet & 4 Stall: Rp 19.000.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>@Rp 65.000 per pax</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-medium text-lg mb-3">Beauty & Photography</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>MUA Full Package: Rp 7.000.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Photo & Video: Rp 6.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Pre-wedding Session: Rp 1.800.000</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-lg mb-3">Entertainment & Services</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Entertainment: Rp 3.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Sound System: Rp 1.750.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>MC: Rp 1.400.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Wedding Planner: Rp 5.050.000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">Free Pre-Wedding Video</p>
                      <p className="text-muted-foreground">Worth Rp 1,5 juta</p>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                      <p className="text-primary font-bold">BONUS</p>
                    </div>
                  </div>
                </div>

                <Link href="#contact" className="block w-full bg-primary text-white text-center py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Book This Package
                </Link>
              </div>
            </div>

            {/* Gedung Juang Venue Package */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium z-20">
                  Gd. Juang
                </div>
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="text-3xl font-bold">Gedung Juang</h3>
                  <p className="text-white/80">Temanggung</p>
                </div>
                <div className="absolute inset-0 bg-slate-900/20"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-2xl font-bold">Complete Package</h4>
                    <p className="text-primary font-bold text-3xl">Rp 62,1 juta</p>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <p className="text-primary font-medium">300 pax</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-medium text-lg mb-3">Venue & Decoration</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Venue: Rp 3.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>100 Visitor Seats: Rp 1.000.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Decoration + Pergola: Rp 11.100.000</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-lg mb-3">Food & Catering</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Buffet & 4 Stall: Rp 19.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>@Rp 65.000 per pax</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-medium text-lg mb-3">Beauty & Photography</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>MUA Full Package: Rp 7.000.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Photo & Video: Rp 6.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Pre-wedding Session: Rp 1.800.000</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-lg mb-3">Entertainment & Services</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Entertainment: Rp 3.500.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Sound System: Rp 1.750.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>MC: Rp 1.400.000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Wedding Planner: Rp 5.050.000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">Free Pre-Wedding Video</p>
                      <p className="text-muted-foreground">Worth Rp 1,5 juta</p>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                      <p className="text-primary font-bold">BONUS</p>
                    </div>
                  </div>
                </div>

                <Link href="#contact" className="block w-full bg-primary text-white text-center py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Book This Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  Important Information
                </span>
                <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Terms & Conditions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Payment Terms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Down Payment is Rp 500.000 for Consultation Package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Full payment must be made within 7 days before the event</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Additional transport fee of Rp 500.000 if the event is outside of Temanggung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Additional Charges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Pedang Pora or Cultural Ceremony will get a charge for Rp 750.000</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>7 Crew for Standard Package (S) & 8 Crew in Complete Package (C)</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Contact Us For More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
