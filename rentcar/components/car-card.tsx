"use client";

import Image from "next/image";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden">
      <div className="p-6 bg-white flex justify-center">
        <div className="relative h-48 w-full">
          <Image
            src={car.image}
            alt={`Voiture ${car.model}`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex">
          <div className="w-3/5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8"></circle>
                  <line x1="12" y1="12" x2="12" y2="8"></line>
                  <line x1="12" y1="12" x2="14.5" y2="14.5"></line>
                </svg>
              </span>
              <span className="text-sm text-gray-700">{car.engineSize} Taille du Moteur</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </span>
              <span className="text-sm text-gray-700">{car.gearbox} Boîte de Vitesse</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                  <path d="M2 20h20"></path>
                  <path d="M14 12v.01"></path>
                </svg>
              </span>
              <span className="text-sm text-gray-700">{car.doors} Portes</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span className="text-sm text-gray-700">{car.seats} Sièges</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 16-4 4-4-4"></path>
                  <path d="M16 6a4 4 0 0 0-8 0"></path>
                </svg>
              </span>
              <span className="text-sm text-gray-700">Climatisé</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              <span className="text-sm text-gray-700">{car.luggage} Bagages</span>
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-end">
            <h3 className="text-2xl font-medium text-slate-600 mb-1">{car.type}</h3>
            <p className="text-right text-sm font-medium text-gray-700">{car.model}</p>
            {car.description && (
              <p className="text-right text-xs text-gray-600 mt-1">{car.description}</p>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition-colors cursor-pointer">
            Réserver Maintenant
          </button>
        </div>
      </div>
    </div>
  );
}