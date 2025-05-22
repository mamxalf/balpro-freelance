import { Check } from "lucide-react";
import Link from "next/link";

export function TermsAndConditions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                Informasi Penting
              </span>
              <div className="h-px w-20 bg-primary mt-1 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Syarat & Ketentuan
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Syarat Pembayaran</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Uang Muka sebesar Rp 500.000 untuk Paket Konsultasi
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Full payment must be made within 7 days before the event
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Biaya transportasi tambahan Rp 500.000 jika acara
                    diluar wilayah Temanggung
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Additional Charges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    Pedang Pora or Cultural Ceremony will get a charge for Rp
                    750.000
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    7 Crew for Standard Package (S) & 8 Crew in Complete
                    Package (C)
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Hubungi Kami Untuk Informasi Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
