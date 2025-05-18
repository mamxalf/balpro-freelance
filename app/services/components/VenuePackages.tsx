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
            venueFee="Venue: Rp 3.500.000"
            decorationFee="Decoration: Rp 7.600.000"
            cateringFee="Buffet & 4 Stall: Rp 19.000.000"
            cateringPerPax="@Rp 65.000 per pax"
            muaFee="MUA Full Package: Rp 7.000.000"
            photoVideoFee="Photo & Video: Rp 6.500.000"
            preWeddingFee="Pre-wedding Session: Rp 1.800.000"
            entertainmentFee="Entertainment: Rp 3.500.000"
            soundSystemFee="Sound System: Rp 1.750.000"
            mcFee="MC: Rp 1.400.000"
            plannerFee="Wedding Planner: Rp 5.050.000"
          />

          {/* Gedung Juang Venue Package */}
          <VenueCard
            name="Gedung Juang"
            location="Temanggung"
            price="Rp 62,1 juta"
            capacity="300"
            venueFee="Venue: Rp 3.500.000"
            decorationFee="Decoration + Pergola: Rp 11.100.000"
            cateringFee="Buffet & 4 Stall: Rp 19.500.000"
            cateringPerPax="@Rp 65.000 per pax"
            muaFee="MUA Full Package: Rp 7.000.000"
            photoVideoFee="Photo & Video: Rp 6.500.000"
            preWeddingFee="Pre-wedding Session: Rp 1.800.000"
            entertainmentFee="Entertainment: Rp 3.500.000"
            soundSystemFee="Sound System: Rp 1.750.000"
            mcFee="MC: Rp 1.400.000"
            plannerFee="Wedding Planner: Rp 5.050.000"
            additionalFees={[
              { label: "100 Visitor Seats", value: "Rp 1.000.000" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
