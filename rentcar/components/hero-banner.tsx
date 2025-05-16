"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/car-bg.webp"
          alt="Voiture en Crète"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Notre flotte de voitures</h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Location de voitures dans toute Hammamet avec une grande flotte de voitures neuves
        </h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">
          Nous ne sommes pas des courtiers en location de voitures, ce qui vous permet d'éviter les frais
          d'intermédiaires pour obtenir une location de voiture bon marché a Hammamet aux tarifs les plus bas avec
          le meilleur service personnalisé. <span className="font-medium">Réservez</span> votre location de
          voiture a Hammamet dès maintenant.
        </p>
      </div>
    </div>
  );
}