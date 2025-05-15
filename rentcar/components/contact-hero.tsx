import Image from "next/image"

export default function ContactHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <Image
        src="/hero-car-rental_tcm7-322328.jpg"
        alt="Contact Euromotor Car Rental"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg">
        Prenez contact avec nous
                </h1>
      </div>
    </div>
  )
}
