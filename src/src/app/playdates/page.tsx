'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const cities = [
  // United States
  { 
    id: 'san-francisco', 
    name: 'San Francisco', 
    photo: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
    description: 'The Golden Gate City',
    country: 'US'
  },
  { 
    id: 'los-angeles', 
    name: 'Los Angeles', 
    photo: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=800&auto=format&fit=crop&q=60',
    description: 'City of Angels',
    country: 'US'
  },
  { 
    id: 'new-york', 
    name: 'New York', 
    photo: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=60',
    description: 'The Big Apple',
    country: 'US'
  },
  { 
    id: 'chicago', 
    name: 'Chicago', 
    photo: 'https://images.unsplash.com/photo-1494522358652-fbce7e0c0c0a?w=800&auto=format&fit=crop&q=60',
    description: 'The Windy City',
    country: 'US'
  },
  { 
    id: 'seattle', 
    name: 'Seattle', 
    photo: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=800&auto=format&fit=crop&q=60',
    description: 'The Emerald City',
    country: 'US'
  },
  { 
    id: 'boston', 
    name: 'Boston', 
    photo: 'https://images.unsplash.com/photo-1561576302-5977738c7584?w=800&auto=format&fit=crop&q=60',
    description: 'Beantown',
    country: 'US'
  },
  { 
    id: 'austin', 
    name: 'Austin', 
    photo: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=60',
    description: 'The Live Music Capital',
    country: 'US'
  },
  { 
    id: 'denver', 
    name: 'Denver', 
    photo: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&auto=format&fit=crop&q=60',
    description: 'The Mile High City',
    country: 'US'
  },
  { 
    id: 'portland', 
    name: 'Portland', 
    photo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60',
    description: 'The City of Roses',
    country: 'US'
  },
  { 
    id: 'miami', 
    name: 'Miami', 
    photo: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&auto=format&fit=crop&q=60',
    description: 'The Magic City',
    country: 'US'
  },
  // Singapore
  { 
    id: 'singapore', 
    name: 'Singapore', 
    photo: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=60',
    description: 'The Lion City',
    country: 'SG'
  },
  { 
    id: 'jurong-east', 
    name: 'Jurong East', 
    photo: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60',
    description: 'Western Gateway',
    country: 'SG'
  },
  { 
    id: 'orchard', 
    name: 'Orchard', 
    photo: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=60',
    description: 'Shopping Paradise',
    country: 'SG'
  },
  // Malaysia
  { 
    id: 'kuala-lumpur', 
    name: 'Kuala Lumpur', 
    photo: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop&q=60',
    description: 'The Garden City',
    country: 'MY'
  },
  { 
    id: 'penang', 
    name: 'Penang', 
    photo: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop&q=60',
    description: 'Pearl of the Orient',
    country: 'MY'
  },
  { 
    id: 'johor-bahru', 
    name: 'Johor Bahru', 
    photo: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop&q=60',
    description: 'Southern Gateway',
    country: 'MY'
  },
  // China
  { 
    id: 'beijing', 
    name: 'Beijing', 
    photo: 'https://images.unsplash.com/photo-1508804185872-7f438034b1c0?w=800&auto=format&fit=crop&q=60',
    description: 'The Capital City',
    country: 'CN'
  },
  { 
    id: 'shanghai', 
    name: 'Shanghai', 
    photo: 'https://images.unsplash.com/photo-1508804185872-7f438034b1c0?w=800&auto=format&fit=crop&q=60',
    description: 'The Oriental Pearl',
    country: 'CN'
  },
  { 
    id: 'guangzhou', 
    name: 'Guangzhou', 
    photo: 'https://images.unsplash.com/photo-1508804185872-7f438034b1c0?w=800&auto=format&fit=crop&q=60',
    description: 'The Flower City',
    country: 'CN'
  },
  { 
    id: 'shenzhen', 
    name: 'Shenzhen', 
    photo: 'https://images.unsplash.com/photo-1508804185872-7f438034b1c0?w=800&auto=format&fit=crop&q=60',
    description: 'The Tech Hub',
    country: 'CN'
  },
  { 
    id: 'chengdu', 
    name: 'Chengdu', 
    photo: 'https://images.unsplash.com/photo-1508804185872-7f438034b1c0?w=800&auto=format&fit=crop&q=60',
    description: 'The Panda City',
    country: 'CN'
  }
];

const locationTypes = [
  { id: 'indoor', name: 'Indoor', icon: '🏠', description: 'Indoor play spaces, museums, and activity centers' },
  { id: 'outdoor', name: 'Outdoor', icon: '🌳', description: 'Parks, playgrounds, and outdoor activities' },
  { id: 'home', name: 'Home', icon: '🏡', description: 'Playdates at someone\'s home' },
  { id: 'trip', name: 'Trip', icon: '✈️', description: 'Day trips and excursions' },
];

export default function PlaydatesPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const countries = [
    { id: 'US', name: 'United States', flag: '🇺🇸', color: 'from-blue-500 to-blue-600' },
    { id: 'SG', name: 'Singapore', flag: '🇸🇬', color: 'from-red-500 to-red-600' },
    { id: 'MY', name: 'Malaysia', flag: '🇲🇾', color: 'from-green-500 to-green-600' },
    { id: 'CN', name: 'China', flag: '🇨🇳', color: 'from-yellow-500 to-yellow-600' },
  ];

  const handleCountrySelect = (countryId: string) => {
    setSelectedCountry(countryId);
    setSelectedCity(null);
    setSelectedLocation(null);
  };

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    setSelectedLocation(null);
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const filteredCities = selectedCountry 
    ? cities.filter(city => city.country === selectedCountry)
    : cities;

  const filteredCitiesBySearch = searchQuery
    ? filteredCities.filter(city => 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredCities;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Plan Your Playdate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create meaningful connections for your children through fun and educational playdates
          </p>
        </div>

        {/* Country Selection */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Your Country
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountrySelect(country.id)}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  selectedCountry === country.id
                    ? 'border-purple-600 ring-2 ring-purple-600'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="p-6 relative">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <div className="font-medium text-gray-900">{country.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* City Selection - Only show if country is selected */}
        {selectedCountry && (
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Select Your City in {countries.find(c => c.id === selectedCountry)?.name}
              </h2>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cities..."
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {filteredCitiesBySearch.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city.id)}
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    selectedCity === city.id
                      ? 'border-purple-600 ring-2 ring-purple-600'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className="aspect-square relative">
                    <img
                      src={city.photo}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="font-medium text-lg">{city.name}</div>
                      <div className="text-sm opacity-90">{city.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {filteredCitiesBySearch.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No cities found matching your search.</p>
              </div>
            )}
          </div>
        )}

        {/* Location Type Selection - Only show if city is selected */}
        {selectedCity && (
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Location Type in {cities.find(c => c.id === selectedCity)?.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locationTypes.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.id)}
                  className={`group p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {location.icon}
                  </div>
                  <div className="font-medium text-gray-900">{location.name}</div>
                  <div className="text-sm text-gray-500 mt-2">{location.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Actions - Only show if both city and location are selected */}
        {selectedCity && selectedLocation && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* List a Playdate */}
            <div className="bg-white rounded-xl shadow-sm p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                List a Playdate
              </h2>
              <p className="text-gray-600 mb-6">
                Create a new playdate and invite other families to join
              </p>
              <Link
                href={`/playdates/new?country=${selectedCountry}&city=${selectedCity}&location=${selectedLocation}`}
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
              >
                Create New Playdate
              </Link>
            </div>

            {/* Join a Playdate */}
            <div className="bg-white rounded-xl shadow-sm p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Join a Playdate
              </h2>
              <p className="text-gray-600 mb-6">
                Browse and join existing playdates in your area
              </p>
              <Link
                href={`/playdates/browse?country=${selectedCountry}&city=${selectedCity}&location=${selectedLocation}`}
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition"
              >
                Browse Playdates
              </Link>
            </div>
          </div>
        )}

        {/* Featured Playdates */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Playdates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Example Featured Playdate */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🎨</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Creative Arts Playdate
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join us for a fun-filled afternoon of arts and crafts activities
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📍 Indoor</span>
                  <span>👥 3/5 slots</span>
                </div>
                <Link
                  href="/playdates/123"
                  className="inline-block w-full text-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Add more featured playdates here */}
          </div>
        </div>
      </div>
    </div>
  );
} 