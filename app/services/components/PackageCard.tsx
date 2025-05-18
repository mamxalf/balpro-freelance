"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  paymentTerms: {
    downPayment?: string;
    fullPayment: string;
    additionalInfo?: string;
  };
  isPopular?: boolean;
  whatsappTemplate?: string;
}

export function PackageCard({
  title,
  price,
  description,
  features,
  paymentTerms,
  isPopular = false,
  whatsappTemplate = 'Halo, saya tertarik dengan paket ini. Bisa minta info lebih lanjut?',
}: PackageCardProps) {
  return (
    <motion.div 
      className={`relative rounded-2xl p-8 shadow-lg border ${
        isPopular 
          ? 'bg-primary/5 border-primary/10' 
          : 'bg-white border-slate-100'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      <div className="h-12 flex items-center">
        <div className={`w-12 h-12 rounded-full ${
          isPopular ? 'bg-primary/20' : 'bg-primary/10'
        } flex items-center justify-center`}>
          <span className="text-primary font-bold">
            {title.includes('(S)') ? '2' : title.includes('(C)') ? '3' : '1'}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-6 mb-2">{title}</h3>
      <p className="text-xl font-bold text-primary mb-4">{price}</p>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="bg-slate-50 p-4 rounded-lg text-sm mb-6">
        <p className="font-medium">Payment Terms</p>
        {paymentTerms.downPayment && (
          <p className="text-muted-foreground">
            {paymentTerms.downPayment}
          </p>
        )}
        <p className="text-muted-foreground">
          {paymentTerms.fullPayment}
        </p>
        {paymentTerms.additionalInfo && (
          <p className="text-muted-foreground">
            {paymentTerms.additionalInfo}
          </p>
        )}
      </div>
      <motion.a
        href={`https://wa.me/62895323351511?text=${encodeURIComponent(whatsappTemplate || 'Halo, saya tertarik dengan paket ini. Bisa minta info lebih lanjut?')}`}
        className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ scale: 0.98 }}
      >
        Konsultasi via WhatsApp
      </motion.a>
    </motion.div>
  );
}
