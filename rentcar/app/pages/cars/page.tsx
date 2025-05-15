'use client'; // Still needed for useState, likely for Header's mobile menu
import React, { useState } from 'react';
import { Car } from "@/types/car"
import CarCard from "@/components/car-card";
import HeroBanner from '@/components/hero-banner';

const cars: Car[] = [
  {
    id: 1,
    image: "/Bugatti-Centodieci.avif",
    engineSize: "1000 cc",
    gearbox: "Manual Gearbox",
    doors: 5,
    seats: 4,
    airConditioned: true,
    luggage: 2,
    type: "Type A",
    model: "Kia Picando",
    description: "",
  },
  {
    id: 2,
    image: "/hyundai.avif",
    engineSize: "1250 cc",
    gearbox: "Manual Gearbox",
    doors: 5,
    seats: 4,
    airConditioned: true,
    luggage: 2,
    type: "Type B",
    model: "Fiat Panda 1250cc",
    description: "*or similar (Hyundai i10 1250cc)",
  },
  {
    id: 3,
    image: "/lexus.jpg",
    engineSize: "1000 cc",
    gearbox: "Manual Gearbox",
    doors: 5,
    seats: 4,
    airConditioned: true,
    luggage: 2,
    type: "Type B1",
    model: "VW Up",
    description: "*or similar (Skoda Citigo)",
  },
]
export default function Cars() {


  return (
              <><HeroBanner />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div></>
  );
}