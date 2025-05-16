'use client'; 
import React from 'react';
import { usePathname } from 'next/navigation';

import { BookingForm } from '@/components/BookingForm';
import { Acceuil } from '@/components/Acceuil'; 
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen"> {/* Optional: helps footer stick */}
        <main className="flex-grow">

            {/* *** RENDER ACCEUIL CONTENT HERE *** */}
            <Acceuil />

            {/* Booking Form Section */}
            <section id="booking-form" className="relative bg-gray-100 py-12 md:py-16">
              <div className="container mx-auto px-4">
                {/* You might want a title above the booking form */}
                {/* <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Book Your Car</h2> */}
                <BookingForm />
              </div>
            </section>

            {/* Why Choose Us Section (Keep or remove as desired for homepage) */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">Pourquoi nous choisir ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Icon blocks... */}
                    <div className="text-center p-4">
                        <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.536M19.5 12h-2.25a2.25 2.25 0 0 0-2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25H19.5m-15-4.5v.75c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125v-.75m0-3.75V9.75c0-.621-.504-1.125-1.125-1.125H4.875c-.621 0-1.125.504-1.125 1.125v.75m0-3.75h13.5m-13.5 0V6c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v1.5m-3 0h3m10.5 0h-3.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125Z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">Meilleurs prix</h3>
                        <p className="text-sm text-gray-600">Tarifs compétitifs sans frais cachés garantis.</p>
                    </div>
                     {/* ... Other 'Why Choose Us' items ... */}
                     <div className="text-center p-4">
                         <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">24/7 Support</h3>
                        <p className="text-sm text-gray-600">Nous sommes là pour vous aider à tout moment si vous avez besoin d’assistance.</p>
                    </div>
                     <div className="text-center p-4">
                         <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h14.25M12 6.75l.75-.75M12 6.75l-.75-.75m.75.75v4.5m-1.5-3.75h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">Flotte Neuve et Sécurisée</h3>
                        <p className="text-sm text-gray-600">Large choix de voitures modernes, bien entretenues et sécurisées.</p>
                    </div>
                </div>
              </div>
            </section>

            {/* Add more sections as needed for the homepage */}

        </main>
       
    </div>
  );
}