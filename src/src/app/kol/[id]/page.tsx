import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database
const kols = [
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Child Development Expert',
    bio: 'PhD in Child Psychology with 15+ years of experience in early childhood development.',
    expertise: ['Child Psychology', 'Early Development', 'Social Skills'],
    image: '/images/kols/sarah-chen.jpg',
    content: [
      {
        type: 'article',
        title: 'The Importance of Early Social Development',
        excerpt: 'Learn how early social interactions shape your child\'s future relationships.',
        date: '2024-03-15',
      },
      {
        type: 'playdate',
        title: 'Science Exploration Playdate',
        excerpt: 'Fun and educational activities to spark your child\'s curiosity.',
        date: '2024-03-20',
      },
    ],
  },
  // Add more KOLs here...
];

export default function KOLProfile({ params }: { params: { id: string } }) {
  const kol = kols.find((k) => k.id === params.id);

  if (!kol) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-purple-100 p-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-purple-200 rounded-full flex items-center justify-center">
                <svg className="w-24 h-24 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{kol.name}</h1>
                <svg className="w-6 h-6 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">{kol.title}</p>
              <p className="text-gray-600 mb-6">{kol.bio}</p>
              <div className="flex flex-wrap gap-2">
                {kol.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="space-y-6">
              {kol.content
                .filter((item) => item.type === 'article')
                .map((article, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <Link
                        href={`/kol/${kol.id}/article/${index}`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Playdates</h2>
            <div className="space-y-6">
              {kol.content
                .filter((item) => item.type === 'playdate')
                .map((playdate, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{playdate.title}</h3>
                    <p className="text-gray-600 mb-4">{playdate.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{playdate.date}</span>
                      <Link
                        href={`/kol/${kol.id}/playdate/${index}`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-6">
            Join our community to access exclusive content and connect with other parents
          </p>
          <Link
            href="/signup"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 