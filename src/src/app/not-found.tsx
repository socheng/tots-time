import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
} 