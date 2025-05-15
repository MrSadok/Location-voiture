import { Phone, Mail, MapPin, ChevronDown, Search, Calendar, User, Menu, X, Facebook, Instagram } from 'lucide-react';
import React from 'react';

export const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white text-s py-4 px-4 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 " >
          {/* Language flags - Replace with actual flags or icons */}
          <div className="flex space-x-1 ">
            <span className="cursor-pointer">EN</span>
            <span className="cursor-pointer">FR</span>
            <span className="cursor-pointer">AR</span>
          </div>
          <span className="flex items-center">
          <MapPin size={14} className="mr-1 text-white" />
          Nabeul, Hammamet 8050, Tunisia
          </span>
          <a href="mailto:rent@euromotorcreta.com" className="flex items-center hover:text-blue-800">
            <Mail size={14} className="mr-1 text-blue-800" />
            rent@location.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
           {/* Social Icons */}
           <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-800">
             <Facebook size={16} />
           </a>
           <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-600">
             <Instagram size={16} />
           </a>
           {/* Phone Number */}
          <a href="tel:+306947120092" className="flex items-center font-semibold hover:text-blue-800">
            <Phone size={14} className="mr-1 text-blue-800" />
            Réservations de dernière minute (+216) 90111222
          </a>
        </div>
      </div>
    </div>
  );
};
