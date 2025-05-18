import { VenueCard } from "./VenueCard";

export function VenuePackages() {
  return (
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
          <VenueCard
            name="Balakosa"
            location="Temanggung"
            price="Rp 57,6 juta"
            capacity="300"
            venueFee="Venue Rental (Full Day)"
            decorationFee="Full Venue Decoration"
            cateringFee="Food Catering (Buffet & 4 Stall)"
            cateringPerPax="Makan 2x & Snack 1x"
            muaFee="MUA Full Package (Modern Wedding)"
            photoVideoFee="Photo & Video Documentation"
            preWeddingFee="Free Pre-Wedding Video (Worth Rp 1,5 juta)"
            entertainmentFee="Entertainment & MC"
            soundSystemFee="Sound System & Lighting"
            mcFee="Professional MC"
            plannerFee="Wedding Planner"
            hasPreWeddingBonus={true}
            whatsappTemplate="Saya dari web, berencana ambil paket #semuabisamenikah yang Venue Balakosa. Mohon info detail."
            additionalFees={[
              { label: "Venue Capacity", value: "300 pax" },
              { label: "Additional Decoration", value: "Pergola Akad" },
            ]}
          />

          {/* Gedung Juang Venue Package */}
          <VenueCard
            name="Gedung Juang"
            location="Temanggung"
            price="Rp 62,1 juta"
            capacity="300"
            venueFee="Venue Rental (Full Day)"
            decorationFee="Full Venue Decoration + Pergola Akad"
            cateringFee="Food Catering (Buffet & 4 Stall)"
            cateringPerPax="Makan 2x & Snack 1x"
            muaFee="MUA Full Package (Modern Wedding)"
            photoVideoFee="Photo & Video Documentation"
            preWeddingFee="Free Pre-Wedding Video (Worth Rp 1,5 juta)"
            entertainmentFee="Entertainment & MC"
            soundSystemFee="Sound System & Lighting"
            mcFee="Professional MC"
            plannerFee="Wedding Planner"
            hasPreWeddingBonus={true}
            whatsappTemplate="Saya dari web, berencana ambil paket #semuabisamenikah yang Venue Gd Juang. Mohon info detail."
            additionalFees={[
              { label: "Venue Capacity", value: "300 pax" },
              { label: "Special Feature", value: "100 Visitor Seats" },
            ]}
            imageSrc="/gd_juang.jpg"
          />
        </div>
      </div>
    </section>
  );
}
