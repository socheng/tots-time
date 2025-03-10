import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
            Welcome to Tots Time
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with local families and discover expert-led playdate ideas from top parenting influencers
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white text-purple-600 px-8 py-3 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Tots Time?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create meaningful connections and discover expert-led activities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert-Led Content</h3>
              <p className="text-gray-600">Access curated playdate ideas and parenting tips from verified KOLs and child development experts.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Sessions</h3>
              <p className="text-gray-600">Join interactive live sessions with parenting experts and get personalized advice for your family.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Verified</h3>
              <p className="text-gray-600">All KOLs are verified and content is curated to ensure safe, educational experiences for your children.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Making Connections?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our community of families and discover expert-led playdate experiences
          </p>
          <Link
            href="/signup"
            className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
} 