"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Mail, ChevronRight } from "lucide-react"

// Define types for form data
type ReservationFormData = {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  dropoffDate: string
  dropoffTime: string
  carType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  flightNumber: string
  specialRequests: string
}

// Define steps for the booking process
type BookingStep = "details" | "vehicle" | "extras" | "confirmation"

export default function MakeReservation() {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState<BookingStep>("details")

  // State for form data
  const [formData, setFormData] = useState<ReservationFormData>({
    pickupLocation: "Aéroport international de Tunis-Carthage",
    dropoffLocation: "Aéroport international de Tunis-Carthage",
    pickupDate: "",
    pickupTime: "12:00",
    dropoffDate: "",
    dropoffTime: "12:00",
    carType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    flightNumber: "",
    specialRequests: "",
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Move to the next step or submit the form
    if (currentStep === "details") {
      setCurrentStep("vehicle")
    } else if (currentStep === "vehicle") {
      setCurrentStep("extras")
    } else if (currentStep === "extras") {
      setCurrentStep("confirmation")
    } else {
      // Final submission
      console.log("Form submitted:", formData)
      alert("Thank you for your reservation! We will contact you shortly to confirm your booking.")
    }
  }

  // Function to go back to previous step
  const goBack = () => {
    if (currentStep === "vehicle") {
      setCurrentStep("details")
    } else if (currentStep === "extras") {
      setCurrentStep("vehicle")
    } else if (currentStep === "confirmation") {
      setCurrentStep("extras")
    }
  }

  return (
    <>
      {/* Blue banner */}
      <div className="bg-[#0f2a5c] text-white py-4 text-center">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-medium">Tous nos tarifs incluent une assurance tous risques sans franchise (0 €).</h2>
        </div>
      </div>

      {/* Page title */}
      <div className="bg-gray-100 py-10 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2a5c] mb-2">Meilleure location de voiture à Hammamet"</h1>
          <p className="text-gray-600">Tarifs imbattables chez DRN</p>
        </div>
      </div>

      {/* Booking form section */}
      <section className="py-12">
        <div className="container-custom">
          {/* Progress steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              <div
                className={`flex flex-col items-center ${currentStep === "details" ? "text-[#0f2a5c]" : "text-gray-500"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === "details" ? "bg-[#0f2a5c] text-white" : "bg-gray-200"}`}
                >
                  1
                </div>
                <span className="text-sm">Détails de location</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div
                className={`flex flex-col items-center ${currentStep === "vehicle" ? "text-[#0f2a5c]" : "text-gray-500"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === "vehicle" ? "bg-[#0f2a5c] text-white" : "bg-gray-200"}`}
                >
                  2
                </div>
                <span className="text-sm">Sélectionner un véhicule</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div
                className={`flex flex-col items-center ${currentStep === "extras" ? "text-[#0f2a5c]" : "text-gray-500"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === "extras" ? "bg-[#0f2a5c] text-white" : "bg-gray-200"}`}
                >
                  3
                </div>
                <span className="text-sm">Extras</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div
                className={`flex flex-col items-center ${currentStep === "confirmation" ? "text-[#0f2a5c]" : "text-gray-500"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === "confirmation" ? "bg-[#0f2a5c] text-white" : "bg-gray-200"}`}
                >
                  4
                </div>
                <span className="text-sm">Confirmation</span>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Rental Details */}
              {currentStep === "details" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2a5c] mb-6">Détails de location</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Lieu de prise en charge</label>
                      <select
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      >
                        <option value="Heraklion Airport">Tunis-Carthage Airport</option>
                        <option value="Chania Airport">Djerba Airport</option>
                        <option value="Stalis Office">Enfidha-Hammamet Airport</option>
                        <option value="Heraklion Port">Monastir Airport</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Lieu de restitution</label>
                      <select
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      >
                        <option value="Heraklion Airport">Tunis-Carthage Airport</option>
                        <option value="Chania Airport">Djerba Airport</option>
                        <option value="Stalis Office">Enfidha-Hammamet Airport</option>
                        <option value="Heraklion Port">Monastir Airport</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Date de prise en charge</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                          required
                        />
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Heure de prise en charge</label>
                      <div className="relative">
                        <select
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                          required
                        >
                          <option value="08:00">08:00</option>
                          <option value="09:00">09:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                        </select>
                        <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 mb-2">Date de restitution</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="dropoffDate"
                          value={formData.dropoffDate}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                          required
                        />
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Heure de restitution</label>
                      <div className="relative">
                        <select
                          name="dropoffTime"
                          value={formData.dropoffTime}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                          required
                        >
                          <option value="08:00">08:00</option>
                          <option value="09:00">09:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                        </select>
                        <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Vehicle Selection */}
              {currentStep === "vehicle" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2a5c] mb-6">Sélectionnez votre véhicule</h2>

                  <div className="space-y-6">
                    {/* Vehicle Option 1 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0f2a5c] transition-colors cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                          <Image
                            src="/economique.jpg"
                            alt="Economy Car"
                            width={200}
                            height={120}
                            className="mx-auto"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">Fiat Panda </h3>
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Meilleur prix
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 5 Portes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 4 Personnes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> Manuelle
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> A/C
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-2xl font-bold text-[#0f2a5c]">80 TND</span>
                              <span className="text-gray-600 text-sm"> / jour</span>
                            </div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="carType"
                                value="Fiat Panda"
                                checked={formData.carType === "Fiat Panda"}
                                onChange={handleChange}
                                className="form-radio h-5 w-5 text-[#0f2a5c]"
                              />
                              <span className="ml-2 text-gray-700">Sélectionner</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Option 2 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0f2a5c] transition-colors cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                          <Image
                            src="/citroen c3.jpg"
                            alt="Compact Car"
                            width={200}
                            height={120}
                            className="mx-auto"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">Citroen C3 </h3>
                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            Populaire
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 5 Portes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 5 Personnes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> Manuelle
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> A/C
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-2xl font-bold text-[#0f2a5c]">90 TND</span>
                              <span className="text-gray-600 text-sm"> / jour</span>
                            </div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="carType"
                                value="Citroen C3"
                                checked={formData.carType === "Citroen C3"}
                                onChange={handleChange}
                                className="form-radio h-5 w-5 text-[#0f2a5c]"
                              />
                              <span className="ml-2 text-gray-700">Sélectionner</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Option 3 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-[#0f2a5c] transition-colors cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                          <Image src="/4x4-SUV.jpg" alt="SUV" width={200} height={120} className="mx-auto" />
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">Suzuki Jimny </h3>
                            <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                              Adventure
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 3 Portes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> 4 Personnes
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> Manuelle
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span> A/C
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-2xl font-bold text-[#0f2a5c]">90 TND</span>
                              <span className="text-gray-600 text-sm"> / jour</span>
                            </div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="carType"
                                value="Suzuki Jimny"
                                checked={formData.carType === "Suzuki Jimny"}
                                onChange={handleChange}
                                className="form-radio h-5 w-5 text-[#0f2a5c]"
                              />
                              <span className="ml-2 text-gray-700">Sélectionner</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Extras */}
              {currentStep === "extras" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2a5c] mb-6">Informations personnelles et options supplémentaires</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Numéro de vol (si applicable)</label>
                    <input
                      type="text"
                      name="flightNumber"
                      value={formData.flightNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Demandes spéciales</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                    ></textarea>
                  </div>

                  
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === "confirmation" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2a5c] mb-6">Résumé de la réservation</h2>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-[#0f2a5c] mb-3">Détails de la location</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium">Prise en charge:</span> {formData.pickupLocation} on{" "}
                            {formData.pickupDate} at {formData.pickupTime}
                          </li>
                          <li>
                            <span className="font-medium">Lieu de restitution:</span> {formData.dropoffLocation} on{" "}
                            {formData.dropoffDate} at {formData.dropoffTime}
                          </li>
                          <li>
                            <span className="font-medium">Véhicule:</span> {formData.carType || "Not selected"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#0f2a5c] mb-3">Informations personnelles</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium">Nom et Prénom:</span> {formData.firstName} {formData.lastName}
                          </li>
                          <li>
                            <span className="font-medium">Email:</span> {formData.email}
                          </li>
                          <li>
                            <span className="font-medium">Téléphone:</span> {formData.phone}
                          </li>
                          {formData.flightNumber && (
                            <li>
                              <span className="font-medium">vol:</span> {formData.flightNumber}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-semibold text-[#0f2a5c] mb-3">Détail des prix</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Location de voiture (3 jours)</span>
                          <span>€105.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Assurance</span>
                          <span>Inclus</span>
                        </div>
                        <div className="flex justify-between font-semibold text-[#0f2a5c]">
                          <span>Total</span>
                          <span>€105.00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md mb-6 text-blue-800">
                    <p>
                    En complétant cette réservation, vous acceptez nos{" "}
                      <Link href="/rental-terms" className="underline">
                      Conditions générales de location
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep !== "details" && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Retour
                  </button>
                )}

                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-[#0f2a5c] text-white rounded-md font-medium hover:bg-[#183b7a] transition-colors flex items-center"
                >
                  {currentStep === "confirmation" ? "Complete Reservation" : "Continue"}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
