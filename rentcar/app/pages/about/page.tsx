import Image from "next/image"
import AboutHero from "@/components/about-hero"
import { Check } from "lucide-react"

export default function AboutUs() {
  return (
    <>
      <AboutHero />

      <section className="container-custom py-12 md:py-16">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl text-gray-600 mb-2">Qui nous sommes et ce que nous faisons</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2a5c] mb-6">DRN Location de Voiture Hammamet</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg font-medium">Bienvenue sur DRNHammamet.com / Location à Hammamet</p>

            <p className="text-gray-700">
              Hammamet est l’endroit idéal pour des vacances inoubliables, et nous pouvons vous aider à créer les meilleurs souvenirs en conduisant nos voitures.
            </p>

            <p className="text-gray-700">
              Nos 30 ans d’expérience sont la garantie que vous ne rencontrerez aucun problème et que vous profiterez pleinement de vos vacances à 100 % !
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-[#0f2a5c] mb-2">Manolis Kontakis</h3>
              <p className="text-gray-600">Propriétaire, Fondateur</p>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/volvo.avif" alt="Coffre de voiture avec bagages" fill className="object-cover" />
          </div>
        </div>
        </section>
        <section className="py-16 bg-white">
  <div className="container-custom">
    <div className="text-center mb-10">
      <h3 className="text-lg text-gray-600 mb-2">Service excellent</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a5c]">Sentez-vous en sécurité / Aucun coût caché</h2>
    </div>

    <div className="max-w-4xl mx-auto text-center mb-12">
      <p className="text-gray-700">
        EuroMotorCreta est expérimenté, professionnel et amical, et nous garantissons un service de haute qualité. Nos voitures neuves seront en excellent état de fonctionnement et impeccablement propres. Nous proposons les meilleurs prix de location de voiture en Crète. Vous ne trouverez pas de meilleurs tarifs !
      </p>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-[#0f2a5c] mb-8 text-center">
        Pourquoi louer une voiture chez EuroMotorCreta ?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Colonne gauche */}
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Nous parlons votre langue</h4>
              <p className="text-gray-600 text-sm">
                Ainsi, nous comprenons ce que vous dites, ce que vous voulez dire, ce dont vous avez besoin et ce que vous recherchez
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Nos clients profitent d'une conduite relaxante et sans souci</h4>
              <p className="text-gray-600 text-sm">
                C’est pourquoi nous accordons beaucoup d’importance à la qualité et au service de nos véhicules
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Choisissez votre véhicule</h4>
              <p className="text-gray-600 text-sm">
                Nos clients peuvent choisir un véhicule parmi plus de cent voitures de différentes catégories : économiques/petites, taille moyenne, familiales/grandes, mini bus, cabriolets, jeeps
              </p>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Assurance tous risques 100%</h4>
              <p className="text-gray-600 text-sm">
                Tous nos prix de location incluent une assurance tous risques à 100% et une assurance spéciale, ainsi qu'une assistance téléphonique et routière 24h/24
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Itinéraires magnifiques</h4>
              <p className="text-gray-600 text-sm">
                Nous sommes ravis de vous fournir des cartes, des conseils et des itinéraires magnifiques autour de l'île
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#0f2a5c] rounded-md p-1 mr-3 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-[#0f2a5c]">Location de voiture en Crète</h4>
              <p className="text-gray-600 text-sm">
                Chaque année, environ 2000 nouveaux clients choisissent EuroMotorCreta.com comme leur société de location de voitures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center text-gray-600 italic">
      <p>Notre nombre de clients fidèles (membres) augmente d’année en année</p>
    </div>
  </div>
</section>


    </>
  )
}
