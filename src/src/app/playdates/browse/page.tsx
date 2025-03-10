'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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

// Mock data - replace with actual data from your backend
const mockPlaydates = [
  {
    id: '1',
    title: 'Creative Arts Playdate',
    description: 'Join us for a fun-filled afternoon of arts and crafts activities',
    locationType: 'indoor',
    city: 'san-francisco',
    country: 'US',
    date: '2024-03-25',
    time: '14:00',
    minAge: 3,
    maxAge: 6,
    slots: 5,
    joined: 3,
    address: '123 Art Street, San Francisco',
    organizer: {
      name: 'Emma Thompson',
      avatar: '👩‍🎨',
    },
  },
  {
    id: '2',
    title: 'Nature Explorer Day',
    description: 'Discover local flora and fauna in this educational outdoor adventure',
    locationType: 'outdoor',
    city: 'singapore',
    country: 'SG',
    date: '2024-03-26',
    time: '10:00',
    minAge: 4,
    maxAge: 8,
    slots: 8,
    joined: 5,
    address: 'Singapore Botanic Gardens',
    organizer: {
      name: 'Dr. Sarah Chen',
      avatar: '👩‍🔬',
    },
  },
  {
    id: '3',
    title: 'Cultural Exchange Playdate',
    description: 'Learn about different cultures through games and activities',
    locationType: 'indoor',
    city: 'kuala-lumpur',
    country: 'MY',
    date: '2024-03-27',
    time: '15:00',
    minAge: 5,
    maxAge: 10,
    slots: 6,
    joined: 4,
    address: 'KLCC Mall, Kuala Lumpur',
    organizer: {
      name: 'Aisha Rahman',
      avatar: '👩‍🏫',
    },
  },
  {
    id: '4',
    title: 'Panda Playdate',
    description: 'Visit the pandas and learn about wildlife conservation',
    locationType: 'outdoor',
    city: 'chengdu',
    country: 'CN',
    date: '2024-03-28',
    time: '09:00',
    minAge: 3,
    maxAge: 8,
    slots: 10,
    joined: 7,
    address: 'Chengdu Research Base of Giant Panda Breeding',
    organizer: {
      name: 'Li Wei',
      avatar: '🐼',
    },
  },
];

export default function BrowsePlaydatesPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    country: searchParams.get('country') || '',
    city: searchParams.get('city') || '',
    locationType: searchParams.get('location') || '',
    minAge: '',
    maxAge: '',
    date: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = filters.country 
    ? cities.filter(city => city.country === filters.country)
    : cities;

  const filteredPlaydates = mockPlaydates.filter((playdate) => {
    const matchesCountry = !filters.country || playdate.country === filters.country;
    const matchesCity = !filters.city || playdate.city === filters.city;
    const matchesLocation = !filters.locationType || playdate.locationType === filters.locationType;
    const matchesMinAge = !filters.minAge || playdate.minAge >= parseInt(filters.minAge);
    const matchesMaxAge = !filters.maxAge || playdate.maxAge <= parseInt(filters.maxAge);
    const matchesDate = !filters.date || playdate.date === filters.date;
    const matchesSearch = !searchQuery || 
      playdate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      playdate.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCountry && matchesCity && matchesLocation && matchesMinAge && matchesMaxAge && matchesDate && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Browse Playdates
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect playdate for your child
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-6 gap-4">
            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={filters.country}
                onChange={(e) => setFilters((prev) => ({ ...prev, country: e.target.value, city: '' }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <div className="relative">
                <select
                  value={filters.city}
                  onChange={(e) => setFilters((prev) => ({ ...prev, city: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Cities</option>
                  {filteredCities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {filters.city && (
                  <div className="absolute inset-0 pointer-events-none flex items-center px-4">
                    <img
                      src={cities.find(c => c.id === filters.city)?.photo}
                      alt=""
                      className="w-6 h-6 rounded-full object-cover mr-2"
                    />
                    <span className="text-gray-700">
                      {cities.find(c => c.id === filters.city)?.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Location Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location Type
              </label>
              <select
                value={filters.locationType}
                onChange={(e) => setFilters((prev) => ({ ...prev, locationType: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {locationTypes.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.icon} {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Age
              </label>
              <input
                type="number"
                value={filters.minAge}
                onChange={(e) => setFilters((prev) => ({ ...prev, minAge: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Min Age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Age
              </label>
              <input
                type="number"
                value={filters.maxAge}
                onChange={(e) => setFilters((prev) => ({ ...prev, maxAge: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Max Age"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters((prev) => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search playdates..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Playdate List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaydates.map((playdate) => (
            <div key={playdate.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{playdate.organizer.avatar}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {playdate.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Organized by {playdate.organizer.name}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{playdate.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">🌍</span>
                    {countries.find(c => c.id === playdate.country)?.name}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {cities.find(c => c.id === playdate.city)?.name}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🏠</span>
                    {locationTypes.find((l) => l.id === playdate.locationType)?.name}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    {new Date(playdate.date).toLocaleDateString()} at {playdate.time}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👶</span>
                    Ages {playdate.minAge}-{playdate.maxAge}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    {playdate.joined}/{playdate.slots} slots filled
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {playdate.address}
                  </div>
                </div>
                <Link
                  href={`/playdates/${playdate.id}`}
                  className="inline-block w-full text-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPlaydates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No playdates found matching your criteria. Try adjusting your filters or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 