'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                Tots Time
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/about"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-purple-500"
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-purple-500"
              >
                How It Works
              </Link>
              <Link
                href="/kol"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-purple-500"
              >
                KOLs
              </Link>
              <Link
                href="/inspiration"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-purple-500"
              >
                Inspiration
              </Link>
              <Link
                href="/pricing"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-purple-500"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link
              href="/login"
              className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              How It Works
            </Link>
            <Link
              href="/kol"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              KOLs
            </Link>
            <Link
              href="/inspiration"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              Inspiration
            </Link>
            <Link
              href="/pricing"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-purple-500"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-purple-600 hover:text-purple-900 hover:bg-gray-50 hover:border-purple-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 