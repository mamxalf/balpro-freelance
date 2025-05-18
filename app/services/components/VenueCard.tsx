import { Check } from "lucide-react";
import Link from "next/link";

interface VenueCardProps {
  name: string;
  location: string;
  price: string;
  capacity: string;
  venueFee: string;
  decorationFee: string;
  cateringFee: string;
  cateringPerPax: string;
  muaFee: string;
  photoVideoFee: string;
  preWeddingFee: string;
  entertainmentFee: string;
  soundSystemFee: string;
  mcFee: string;
  plannerFee: string;
  hasPreWeddingBonus?: boolean;
  additionalFees?: { label: string; value: string }[];
  imageSrc?: string;
  whatsappTemplate?: string;
}

export function VenueCard({
  name,
  location,
  price,
  capacity,
  venueFee,
  decorationFee,
  cateringFee,
  cateringPerPax,
  muaFee,
  photoVideoFee,
  preWeddingFee,
  entertainmentFee,
  soundSystemFee,
  mcFee,
  plannerFee,
  hasPreWeddingBonus = false,
  additionalFees = [],
  imageSrc = "/venue-placeholder.jpg",
  whatsappTemplate = 'Halo, saya tertarik dengan paket ini. Bisa minta info lebih lanjut?',
}: VenueCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-72">
        {imageSrc ? (
          <div className="absolute inset-0">
            <img
              src={imageSrc}
              alt={`${name} Venue`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium z-20">
          {name}
        </div>
        <div className="absolute bottom-4 left-4 text-white z-20">
          <h3 className="text-3xl font-bold">{name} Venue</h3>
          <p className="text-white/80">{location}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-2xl font-bold">Complete Package</h4>
            <p className="text-primary font-bold text-3xl">{price}</p>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-full">
            <p className="text-primary font-medium">{capacity} pax</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h5 className="font-medium text-lg mb-3">Venue & Decoration</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{venueFee}</span>
              </li>
              {additionalFees.map((fee, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{fee.label}: {fee.value}</span>
                </li>
              ))}
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{decorationFee}</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-lg mb-3">Food & Catering</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{cateringFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{cateringPerPax}</span>
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
                <span>{muaFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{photoVideoFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{preWeddingFee}</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-lg mb-3">Entertainment & Services</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{entertainmentFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{soundSystemFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{mcFee}</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{plannerFee}</span>
              </li>
            </ul>
          </div>
        </div>

        {hasPreWeddingBonus && (
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
        )}

        <Link
          href={`https://wa.me/62895323351511?text=${encodeURIComponent(whatsappTemplate || 'Halo, saya tertarik dengan paket ini. Bisa minta info lebih lanjut?')}`}
          className="block w-full bg-primary text-white text-center py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book This Package
        </Link>
      </div>
    </div>
  );
}
