'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-800">
              Tots Time
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600">
              How It Works
            </Link>
            <Link href="/kol" className="text-gray-600 hover:text-purple-600">
              KOLs
            </Link>
            <Link href="/inspiration" className="text-gray-600 hover:text-purple-600">
              Inspiration
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600">
              Pricing
            </Link>
            <Link href="/login" className="text-purple-600 hover:text-purple-700">
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
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
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/kol"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              KOLs
            </Link>
            <Link
              href="/inspiration"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inspiration
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-purple-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 