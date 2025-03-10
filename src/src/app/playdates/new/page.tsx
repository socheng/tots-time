'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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

const countries = [
  { id: 'US', name: 'United States', flag: '🇺🇸' },
  { id: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { id: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { id: 'CN', name: 'China', flag: '🇨🇳' },
];

const locationTypes = [
  { id: 'indoor', name: 'Indoor', icon: '🏠', description: 'Indoor play spaces, museums, and activity centers' },
  { id: 'outdoor', name: 'Outdoor', icon: '🌳', description: 'Parks, playgrounds, and outdoor activities' },
  { id: 'home', name: 'Home', icon: '🏡', description: 'Playdates at someone\'s home' },
  { id: 'trip', name: 'Trip', icon: '✈️', description: 'Day trips and excursions' },
];

export default function NewPlaydatePage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    country: searchParams.get('country') || '',
    city: searchParams.get('city') || '',
    locationType: searchParams.get('location') || '',
    title: '',
    description: '',
    date: '',
    time: '',
    minAge: 2,
    maxAge: 10,
    slots: 5,
    address: '',
    additionalInfo: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredCities = formData.country 
    ? cities.filter(city => city.country === formData.country)
    : cities;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Create a New Playdate
          </h1>
          <p className="text-xl text-gray-600">
            Fill in the details to create an amazing playdate experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
          {/* Country Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Country
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {countries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, country: country.id, city: '' }))}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.country === country.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <div className="font-medium text-gray-900">{country.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* City Selection - Only show if country is selected */}
          {formData.country && (
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                City in {countries.find(c => c.id === formData.country)?.name}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, city: city.id }))}
                    className={`group relative overflow-hidden rounded-xl border-2 transition-all ${
                      formData.city === city.id
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="font-medium text-lg">{city.name}</div>
                        <div className="text-sm opacity-90">{city.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Location Type */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Location Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locationTypes.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, locationType: location.id }))}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.locationType === location.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className="text-3xl mb-2">{location.icon}</div>
                  <div className="font-medium text-gray-900">{location.name}</div>
                  <div className="text-sm text-gray-500 mt-2">{location.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Playdate Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Age Range */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="minAge" className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Age
              </label>
              <input
                type="number"
                id="minAge"
                name="minAge"
                value={formData.minAge}
                onChange={handleChange}
                min="0"
                max="18"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="maxAge" className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Age
              </label>
              <input
                type="number"
                id="maxAge"
                name="maxAge"
                value={formData.maxAge}
                onChange={handleChange}
                min="0"
                max="18"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Number of Slots */}
          <div className="mb-6">
            <label htmlFor="slots" className="block text-sm font-medium text-gray-700 mb-2">
              Number of Slots
            </label>
            <input
              type="number"
              id="slots"
              name="slots"
              value={formData.slots}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Any special instructions or requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/playdates"
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Create Playdate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 