import {  MapPin, Search, Calendar, User} from 'lucide-react';
import React from 'react';

export const BookingForm = () => {
    // ... (Keep the BookingForm component code as before)
    return (
      <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-xl max-w-4xl mx-auto relative z-10"> {/* Removed negative margin */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Louer une voiture à Hammamet</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-end">
          {/* Pick-up Location */}
          <div className="lg:col-span-1">
            <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-1">Lieu de prise en charge</label>
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select id="pickup-location" name="pickup-location" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>Djerba Airport</option>
                <option>Carthage de Tunis Airport</option>
                <option>Enfidha Airport</option>
                <option>Monastir Airport</option>
              </select>
            </div>
          </div>
  
          {/* Pick-up Date/Time */}
          <div className="lg:col-span-1">
            <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">Date et heure de prise en charge</label>
            <div className="relative">
               <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input type="datetime-local" id="pickup-date" name="pickup-date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" />
            </div>
          </div>
  
          {/* Return Date/Time */}
           <div className="lg:col-span-1">
            <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">Date et heure de restitution</label>
            <div className="relative">
               <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input type="datetime-local" id="return-date" name="return-date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" />
            </div>
          </div>
  
          {/* Driver Age */}
          <div className="lg:col-span-1">
             <label htmlFor="driver-age" className="block text-sm font-medium text-gray-700 mb-1">Âge du conducteur</label>
             <div className="relative">
               <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <select id="driver-age" name="driver-age" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                 <option>25-70</option>
                 <option>21-24</option>
                 <option>71+</option>
               </select>
             </div>
           </div>
  
          {/* Search Button */}
          <div className="lg:col-span-1">
            <button type="submit" className="w-full bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center text-sm transition duration-150 ease-in-out cursor-pointer">
              <Search size={18} className="mr-2" /> Rechercher
            </button>
          </div>
        </form>
         {/* Optional: Add checkbox for different return location */}
         <div className="mt-4 text-center">
           <label className="inline-flex items-center text-sm text-gray-600">
             <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"/>
             Restituer la voiture à un endroit différent
           </label>
         </div>
      </div>
    );
  };