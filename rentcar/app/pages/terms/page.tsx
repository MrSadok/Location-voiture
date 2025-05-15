"use client"

import { useState } from "react"
import Link from "next/link"
import TermsHero from "@/components/terms-hero"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function RentalTerms() {
  const [openSections, setOpenSections] = useState({
    carRentalOffers: true,
    rentalRequirements: false,
    termsConditions: false,
    usefulInstructions: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <>
      <TermsHero />

      <section className="container-custom py-12 md:py-16">
        <div className="mb-8">
          <h3 className="text-lg md:text-xl text-gray-600 mb-2">Nos Conditions</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2a5c]">Conditions de location de voiture en Crète</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Section 1 : Offres */}
            <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer" onClick={() => toggleSection("carRentalOffers")}>
                <h3 className="font-medium text-[#0f2a5c]">Nos offres de location de voiture comprennent</h3>
                {openSections.carRentalOffers ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>

              {openSections.carRentalOffers && (
                <div className="p-4 border-t border-gray-200 space-y-6">
                  <div><h4 className="font-semibold mb-2">Assurance tous risques (CDW)</h4><p className="text-gray-700">Le locataire n’est pas responsable des dommages causés au véhicule. Toutes nos voitures sont couvertes par une assurance tous risques.</p></div>
                  <div><h4 className="font-semibold mb-2">Exonération complète des dommages (FDW+WUG), couverture spéciale</h4><p className="text-gray-700">Couvre les dommages sous le véhicule, aux vitres, incendie, pneus, et pannes mécaniques/moteur.</p></div>
                  <div><h4 className="font-semibold mb-2">Assurance responsabilité civile (PL)</h4><p className="text-gray-700">750 000 € en cas de blessure corporelle ou de dommages matériels.</p></div>
                  <div><h4 className="font-semibold mb-2">Protection contre le vol (TP)</h4><p className="text-gray-700">Le locataire n’est pas responsable en cas de vol du véhicule.</p></div>
                  <div><h4 className="font-semibold mb-2">Assurance accident personnel (PAI)</h4><p className="text-gray-700">Couvre les frais médicaux et bien plus encore en cas d’accident.</p></div>
                  <div><h4 className="font-semibold mb-2">Kilométrage illimité</h4><p className="text-gray-700">Pas de frais supplémentaires selon le kilométrage.</p></div>
                  <div><h4 className="font-semibold mb-2">Taxes</h4><p className="text-gray-700">Nos prix incluent la TVA (24%).</p></div>
                  <div><h4 className="font-semibold mb-2">Assistance routière 24h/24</h4><p className="text-gray-700">Disponible partout en Crète.</p></div>
                  <div><h4 className="font-semibold mb-2">Remplacement du véhicule</h4><p className="text-gray-700">En cas d’accident ou panne, un véhicule de même catégorie ou supérieur vous sera fourni.</p></div>
                  <div><h4 className="font-semibold mb-2">Sièges bébé et rehausseurs</h4><p className="text-gray-700">Disponibles gratuitement sur demande (merci de nous informer de l’âge de l’enfant).</p></div>
                  <div><h4 className="font-semibold mb-2">Voitures neuves et sûres</h4><p className="text-gray-700">Nos véhicules ont en moyenne 3-4 ans. Propres et bien entretenus.</p></div>
                  <div><h4 className="font-semibold mb-2">Aucun frais en cas de retard de vol</h4><p className="text-gray-700">Nous surveillons les vols et attendons à l’aéroport en cas de retard.</p></div>
                  <div><h4 className="font-semibold mb-2">Carte gratuite de la Crète</h4><p className="text-gray-700">Remise à votre arrivée avec routes à jour et conseils personnalisés.</p></div>
                </div>
              )}
            </div>

            {/* Section 2 : Conditions de location */}
            <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer" onClick={() => toggleSection("rentalRequirements")}>
                <h3 className="font-medium text-[#0f2a5c]">Conditions de location</h3>
                {openSections.rentalRequirements ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>

              {openSections.rentalRequirements && (
                <div className="p-4 border-t border-gray-200 space-y-6">
                  <div><h4 className="font-semibold mb-2">Âge du conducteur</h4><p className="text-gray-700">Le conducteur doit avoir au moins 23 ans et 12 mois de permis valide. Pour les modèles SUV, l’âge minimum est de 25 ans.</p></div>
                  <div><h4 className="font-semibold mb-2">Permis de conduire</h4><p className="text-gray-700">Permis de l’UE accepté. Pour les pays hors UE, un permis international peut être requis.</p></div>
                  <div><h4 className="font-semibold mb-2">Durée minimale de location</h4><p className="text-gray-700">Minimum 2 jours (48 heures). Pour 1 jour, contactez-nous directement.</p></div>
                  <div><h4 className="font-semibold mb-2">Essence</h4><p className="text-gray-700">Le carburant n’est pas inclus. Restituer le véhicule avec le même niveau de carburant.</p></div>
                  <div><h4 className="font-semibold mb-2">Amendes</h4><p className="text-gray-700">Les contraventions sont à la charge du locataire.</p></div>
                </div>
              )}
            </div>

            {/* Section 3 : Termes & Conditions */}
            <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer" onClick={() => toggleSection("termsConditions")}>
                <h3 className="font-medium text-[#0f2a5c]">Termes et conditions</h3>
                {openSections.termsConditions ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>

              {openSections.termsConditions && (
                <div className="p-4 border-t border-gray-200 space-y-6">
                  <div><h4 className="font-semibold mb-2">Réservations</h4><p className="text-gray-700">Valides uniquement après confirmation écrite. Un modèle similaire sera proposé si le véhicule sélectionné n’est pas disponible.</p></div>
                  <div><h4 className="font-semibold mb-2">Annulations</h4><p className="text-gray-700">Gratuites jusqu’à 48 heures avant la prise du véhicule. En cas de non-présentation, des frais peuvent s’appliquer.</p></div>
                  <div><h4 className="font-semibold mb-2">Mode de paiement</h4><p className="text-gray-700">Espèces ou carte bancaire acceptées à la livraison.</p></div>
                  <div><h4 className="font-semibold mb-2">Livraison/Retour</h4><p className="text-gray-700">Gratuits dans les zones principales (aéroports, ports). Pour autres lieux, contactez-nous.</p></div>
                </div>
              )}
            </div>

            {/* Section 4 : Instructions utiles */}
            <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer" onClick={() => toggleSection("usefulInstructions")}>
                <h3 className="font-medium text-[#0f2a5c]">Instructions utiles pour votre location</h3>
                {openSections.usefulInstructions ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>

              {openSections.usefulInstructions && (
                <div className="p-4 border-t border-gray-200 space-y-6">
                  <div><h4 className="font-semibold mb-2">Stationnement</h4><p className="text-gray-700">Évitez de vous garer sur des lignes jaunes ou aux intersections. Respectez les panneaux pour éviter les amendes.</p></div>
                  <div><h4 className="font-semibold mb-2">Carburant</h4><p className="text-gray-700">Les stations-service sont ouvertes de 07h à 21h. Certaines disposent de distributeurs automatiques 24h/24.</p></div>
                  <div><h4 className="font-semibold mb-2">Assistance</h4><p className="text-gray-700">En cas de problème, contactez immédiatement notre support 24h/24 au numéro fourni sur votre contrat.</p></div>
                </div>
              )}
            </div>
          </div>         
        </div>
      </section>
    </>
  )
}
