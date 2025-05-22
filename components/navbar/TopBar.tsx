import { PhoneIcon } from "lucide-react";
import { Mail, Instagram, Facebook } from "lucide-react";
import { contactInfo } from "@/app/lib/data";

export function TopBar() {
  return (
    <div className="hidden lg:block py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 text-xs text-gray-300">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <PhoneIcon className="h-3 w-3 text-gray-400" />
            <span className="hover:text-white transition-colors">
              {contactInfo.phone}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-3 w-3 text-gray-400" />
            <span className="hover:text-white transition-colors">
              {contactInfo.email}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={contactInfo.social.instagram}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a
            href={contactInfo.social.facebook}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
