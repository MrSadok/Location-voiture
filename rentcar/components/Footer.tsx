"use client"
import React from 'react';

import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronDown, Search, Calendar, User, Menu, X, Facebook, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Footer() { // Renamed slightly for clarity
  const pathname = usePathname();


  return (

<footer className="bg-gray-800 text-gray-300 py-12 mt-auto"> {/* mt-auto helps stick footer */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
    {/* Footer content columns... */}
    <div>
       <div className="flex flex-col items-start mb-4">
         <span className="text-xl font-bold text-white leading-none">LOCATION<span className="text-red-500">MOTOR</span></span>
         <span className="text-[7px] font-semibold text-gray-400 tracking-wider">Louer une voiture à Hammamet</span>
       </div>
      <p className="text-sm text-gray-400">Louer une voiture à Hammamet ...</p>
    </div>
    <div>
      <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">Liens rapides</h4>
      <ul className="space-y-2 text-sm">
<li>
  <Link
    href="/"
    className={`${
      pathname === '/' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    Acceuil
  </Link>
</li>
<li>
  <Link
    href="/about"
    className={`${
      pathname === '/about' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    À propos de nous
  </Link>
</li>
<li>
  <Link
    href="/fleet"
    className={`${
      pathname === '/fleet' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    Flotte de véhicules
  </Link>
</li>
<li>
  <Link
    href="/terms"
    className={`${
      pathname === '/terms' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    Conditions de location
  </Link>
</li>
<li>
  <Link
    href="/contact"
    className={`${
      pathname === '/contact' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    Contact
  </Link>
</li>
<li>
  <Link
    href="/privacy"
    className={`${
      pathname === '/privacy' ? 'text-white' : 'text-gray-400'
    } hover:text-white`}
  >
    Politique de confidentialité
  </Link>
</li>
</ul>
    </div>
    <div>
      <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">Contactez-nous</h4>
       <ul className="space-y-3 text-sm">
         <li className="flex items-start">
            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
            <span className="text-gray-400">Nabeul,<br/>Location, Hammamet, Tunisia</span>
         </li>
         {/* ... other contact items */}
         <li className="flex items-center">
            <Phone size={16} className="mr-2 flex-shrink-0 text-blue-400" />
            <a href="tel:+306947120092" className="text-gray-400 hover:text-white">(+216) 90111222</a>
         </li>
         <li className="flex items-center">
            <Mail size={16} className="mr-2 flex-shrink-0 text-blue-400" />
            <a href="mailto:rent@euromotorcreta.com" className="text-gray-400 hover:text-white">location@rent.com</a>
         </li>
       </ul>
    </div>
     <div>
      <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">Suivez-nous</h4>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
    <p>&copy; {new Date().getFullYear()} Location Voiture. All Rights Reserved. Website by DRN</p>
  </div>
</div>
</footer>
  )
}