import Image from "next/image"

export default function AboutHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
      <Image
        src="/Avance-Website-About-us.jpg"
        alt="Family enjoying vacation in Crete"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg">
        Apprenez à mieux nous connaître
        </h1>
      </div>
    </div>
  )
}