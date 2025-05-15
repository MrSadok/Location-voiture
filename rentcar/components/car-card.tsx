"use client";

import Image from "next/image"
import { Car } from "@/types/car"
interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden">
      <div className="p-6 bg-white flex justify-center">
        <div className="relative h-48 w-full">
          <Image
            src={car.image || "/data:image/jpeg;base64,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"}
            alt={`${car.model} car`}
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
              <span className="text-sm text-gray-700">{car.engineSize}</span>
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
              <span className="text-sm text-gray-700">{car.gearbox}</span>
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
              <span className="text-sm text-gray-700">{car.doors} Doors</span>
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
              <span className="text-sm text-gray-700">{car.seats} Seats</span>
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
              <span className="text-sm text-gray-700">Air-Conditioned</span>
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
              <span className="text-sm text-gray-700">{car.luggage} Luggage</span>
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-end">
            <h3 className="text-2xl font-medium text-slate-600 mb-1">{car.type}</h3>
            <p className="text-right text-sm font-medium text-gray-700">{car.model}</p>
            {car.description && <p className="text-right text-xs text-gray-600 mt-1">{car.description}</p>}
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
