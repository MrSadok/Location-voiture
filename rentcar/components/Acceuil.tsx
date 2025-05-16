import React from 'react';
import Link from 'next/link';

export function Acceuil() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/52/04/16/1000_F_552041614_jaVevsHaD01cyLbDvl79nVLozCDrdiho.jpg" // Prefer local asset (place in public/images/)
          alt="Crete Landscape"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://as1.ftcdn.net/v2/jpg/05/52/04/16/1000_F_552041614_jaVevsHaD01cyLbDvl79nVLozCDrdiho.jpg';
          }} // Fallback if image fails
        />
        {/* Overlay - Reduced opacity for better visibility */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-16">
          <p className="text-sm md:text-base uppercase tracking-widest mb-2">Les meilleurs souvenirs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          Location à Hammamet
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 drop-shadow-md max-w-xl">
          Hammamet est l endroit idéal pour des vacances inoubliables, et nous sommes là pour vous aider à créer les meilleurs souvenirs au volant de nos voitures.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/makereservation"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md text-sm uppercase transition duration-150 ease-in-out"
            >
              Obtenir un devis
            </Link>
            <Link
              href="/pages/terms"
              className="bg-black bg-opacity-60 hover:bg-opacity-80 border border-white text-white font-semibold py-3 px-6 rounded-md text-sm uppercase transition duration-150 ease-in-out"
            >
              Conditions de location
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Nos véhicules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src="/economique.jpg"
                alt="Economy Car"
                className="w-full h-40 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/300x200/e2e8f0/64748b?text=Economy+Car';
                }}
              />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Voitures économiques</h3>
              <p className="text-sm text-gray-600">Parfaites pour la conduite en ville et les couples.</p>
              <Link
                href="/pages/cars"
                className="mt-3 inline-block text-blue-700 hover:text-blue-900 text-sm font-semibold"
              >
                Voir les voitures →
              </Link>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src="/4x4-SUV.jpg"
                alt="SUV"
                className="w-full h-40 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/300x200/e2e8f0/64748b?text=SUV';
                }}
              />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">SUVs & 4x4</h3>
              <p className="text-sm text-gray-600">Explorez hors des sentiers battus.</p>
              <Link
                href="/pages/cars"
                className="mt-3 inline-block text-blue-700 hover:text-blue-900 text-sm font-semibold"
              >
                Voir les véhicules →
              </Link>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src="/mercedes-benz-cabriolet-roadster-landingpage-modeloverview-692x392-08-2024.avif"
                alt="Convertible"
                className="w-full h-40 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/300x200/e2e8f0/64748b?text=Convertible';
                }}
              />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Cabriolets</h3>
              <p className="text-sm text-gray-600">Profitez du soleil de Hammamet avec style.</p>
              <Link
                href="/pages/cars"
                className="mt-3 inline-block text-blue-700 hover:text-blue-900 text-sm font-semibold"
              >
                Voir les véhicules →
              </Link>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src="/quel-monospace-essence-choisir.png"
                alt="Minivan"
                className="w-full h-40 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/300x200/e2e8f0/64748b?text=Minivan';
                }}
              />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Monospaces</h3>
              <p className="text-sm text-gray-600">Idéales pour les familles et les groupes.</p>
              <Link
                href="/pages/cars"
                className="mt-3 inline-block text-blue-700 hover:text-blue-900 text-sm font-semibold"
              >
                Voir les véhicules →
              </Link>
            </div>
          </div>
          <Link
            href="/pages/cars"
            className="mt-10 inline-block bg-blue-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-md text-base uppercase transition duration-150 ease-in-out"
          >
            Voir tous les véhicules
          </Link>
        </div>
      </section>
    </>
  );
}