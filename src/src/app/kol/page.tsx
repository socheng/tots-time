import React from 'react';
import Link from 'next/link';

const kols = [
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Child Development Expert',
    bio: 'PhD in Child Psychology with 15+ years of experience in early childhood development.',
    expertise: ['Child Psychology', 'Early Development', 'Social Skills'],
    image: '/images/kols/sarah-chen.jpg',
  },
  {
    id: 'emma-thompson',
    name: 'Emma Thompson',
    title: 'Creative Play Specialist',
    bio: 'Former preschool teacher turned playdate expert, specializing in creative and educational activities.',
    expertise: ['Creative Play', 'Arts & Crafts', 'Educational Activities'],
    image: '/images/kols/emma-thompson.jpg',
  },
  {
    id: 'michael-park',
    name: 'Dr. Michael Park',
    title: 'Early Childhood Educator',
    bio: 'Early childhood education specialist with a focus on social-emotional development.',
    expertise: ['Early Education', 'Social Development', 'Parenting Strategies'],
    image: '/images/kols/michael-park.jpg',
  },
  {
    id: 'lisa-wong',
    name: 'Lisa Wong',
    title: 'Parenting Coach',
    bio: 'Certified parenting coach helping families create meaningful connections through play.',
    expertise: ['Parent Coaching', 'Family Bonding', 'Play Therapy'],
    image: '/images/kols/lisa-wong.jpg',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    title: 'Child Behavior Specialist',
    bio: 'Behavioral therapist specializing in positive reinforcement and social skills development.',
    expertise: ['Behavior Management', 'Social Skills', 'Positive Parenting'],
    image: '/images/kols/james-wilson.jpg',
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    title: 'Multilingual Education Expert',
    bio: 'Bilingual education specialist focusing on language development through play.',
    expertise: ['Language Development', 'Bilingual Education', 'Cultural Activities'],
    image: '/images/kols/maria-garcia.jpg',
  },
];

export default function KOLsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Our Parenting Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our verified KOLs who share their expertise and create amazing playdate experiences
          </p>
        </div>

        {/* KOL Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kols.map((kol) => (
            <div key={kol.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="aspect-w-16 aspect-h-9 bg-purple-100">
                <div className="w-full h-48 bg-purple-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900">{kol.name}</h2>
                  <svg className="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-purple-600 font-medium mb-3">{kol.title}</p>
                <p className="text-gray-600 mb-4">{kol.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {kol.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/kol/${kol.id}`}
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Become a KOL?
          </h2>
          <p className="text-gray-600 mb-6">
            Share your expertise and help families create meaningful connections
          </p>
          <Link
            href="/kol/apply"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
} 