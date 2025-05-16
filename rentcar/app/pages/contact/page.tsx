"use client"

import React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactHero from "@/components/contact-hero"
import Swal from "sweetalert2"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    Swal.fire({
            title: "Message envoyé!",
            text: "Merci pour votre message ! Nous vous répondrons bientôt.",
            icon: "success",
            confirmButtonText: "OK"
          })
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <>
      <ContactHero />

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-full mb-4 border border-gray-100">
                <Mail className="w-8 h-8 text-[#e52222]" />
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Envoyez-nous un email</h3>
              <a href="mailto:rent@euromotorcreta.com" className="text-[#0f2a5c] hover:underline font-medium">
                rent@location.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-full mb-4 border border-gray-100">
                <MapPin className="w-8 h-8 text-[#e52222]" />
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Trouvez-nous à Hammamet</h3>
              <p className="text-[#0f2a5c] font-medium">
                DRN
                <br />
                Nabeul, Hammamet, Tunisia
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-full mb-4 border border-gray-100">
                <Phone className="w-8 h-8 text-[#e52222]" />
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Appelez-nous 24h/24 et 7j/7</h3>
              <a href="tel:+306947120092" className="text-[#0f2a5c] hover:underline font-medium">
                (+216) 90111222
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <h3 className="text-lg md:text-xl text-gray-600 mb-2">Envoyez-nous un message</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2a5c]">Contactez DRN Location de Voitures Hammamet</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f2a5c]"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#0f2a5c] text-white px-8 py-3 rounded-md font-medium hover:bg-[#183b7a] transition-colors cursor-pointer"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5775569367997!2d25.3889!3d35.2944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a7b8e7f9e3d7d%3A0x400bd2ce2b9b6c0!2sStalis%2C%20Greece!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Euromotor Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2a5c]">Heures Ouverture</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#0f2a5c] mb-3">Lundi - Vendredi</h3>
                <p className="text-gray-700">08h00 - 20h00</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#0f2a5c] mb-3">Samedi</h3>
                <p className="text-gray-700">08h00 - 18h00</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#0f2a5c] mb-3">Dimanche</h3>
                <p className="text-gray-700">09h00 - 14h00</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
              Pour les demandes urgentes en dehors des heures ouverture, veuillez appeler notre ligne assistance disponible 24h/24 et 7j/7.              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
