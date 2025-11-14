// app/about/page.tsx
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">About KleinZibuo</h1>
        <p className="text-gray-600 mb-6">
          Placeholder about page — mission, values, and contact details live here.
        </p>

        <Link href="/" className="inline-block px-5 py-3 bg-[#E82D86] text-white rounded-full">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
