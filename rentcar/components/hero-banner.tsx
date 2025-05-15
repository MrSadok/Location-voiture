"use client";

import Image from "next/image"

export default function HeroBanner() {
  return (
    <div className="relative w-full">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/car-bg.webp"
          alt="Car in Crete"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Our Car Fleet</h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Car hire all over Crete with a large fleet of new cars
        </h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">
          We are not car hire broker so you cut ot the middleman fees to get cheap car hire in Crete at the lowest rates
          with the best personal service. <span className="font-medium">Make reservation</span> for your car rental in
          Crete now.
        </p>
      </div>
    </div>
  )
}
