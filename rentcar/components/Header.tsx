"use client";
import { Phone, Mail, MapPin, ChevronDown, Search, Calendar, User, Menu, X, Facebook, Instagram } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main container using justify-between to push left/right groups apart */}
      <div className="container mx-auto px-4 py-7 flex justify-between items-center">
        {/* Left Group: Contains Logo and Desktop Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center mr-6 md:mr-10">
              <span className="text-2xl font-bold text-blue-800 leading-none">Location<span className="text-red-600">Voiture</span></span>
              <span className="text-[8px] font-semibold text-gray-600 tracking-wider">LOUER UNE VOITURE A HAMMAMET</span>
              <span className="text-[8px] font-semibold text-gray-600 tracking-wider">LE MEILLEUR VÉHICULE POUR VOUS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link href="/" className="text-black hover:text-blue-800 font-medium text-lg uppercase">ACCEUIL</Link>
            <Link href="/pages/about" className="text-black hover:text-blue-800 font-medium text-lg uppercase">À PROPOS DE NOUS</Link>
            <Link href="/pages/cars" className="text-black hover:text-blue-800 font-medium text-lg uppercase">VOITURES</Link>
            <Link href="/pages/terms" className="text-black hover:text-blue-800 font-medium text-lg uppercase">CONDITIONS DE LOCATION</Link>
            <Link href="/pages/contact" className="text-black hover:text-blue-800 font-medium text-lg uppercase">CONTACT</Link>
          </nav>
        </div>

        {/* Right Group: Book Now Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <Link href="/makereservation" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-md text-sm uppercase transition duration-150 ease-in-out hidden md:inline-block flex-shrink-0">
          réservez maintenant
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white px-4 pb-4 border-t absolute w-full shadow-md z-40">
          <div className="flex flex-col space-y-3 pt-3">
            <Link href="/" className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase py-1">ACCEUIL</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase py-1">À PROPOS DE NOUS</Link>
            <Link href="/cars" className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase py-1">VOITURES</Link>
            <Link href="/terms" className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase py-1">CONDITIONS DE LOCATION</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium text-sm uppercase py-1">CONTACT</Link>
            <Link href="/book" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-md text-sm uppercase text-center mt-2">
            réservez maintenant
            </Link>
            {/* Mobile Top Bar Info */}
            <div className="border-t pt-3 mt-3 text-xs text-gray-600 space-y-2">
              <span className="flex items-center">
                <MapPin size={14} className="mr-1 text-blue-800" />
                Nabeul, Hammamet
              </span>
              <a href="mailto:rent@euromotorcreta.com" className="flex items-center hover:text-blue-800">
                <Mail size={14} className="mr-1 text-blue-800" />
                rent@location.com
              </a>
              <a href="tel:+306947120092" className="flex items-center font-semibold hover:text-blue-800">
                <Phone size={14} className="mr-1 text-blue-800" />
                (+216) 90111222
              </a>
              <div className="flex space-x-3 pt-2">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-800"><Facebook size={16} /></a>
                <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-600"><Instagram size={16} /></a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};