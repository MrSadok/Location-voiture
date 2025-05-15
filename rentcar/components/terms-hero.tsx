import Image from "next/image"

export default function TermsHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <Image
        src="/Car-Rental-2.avif"
        alt="Car rental terms and conditions"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg">
          Car Rental Terms
        </h1>
      </div>
    </div>
  )
}
