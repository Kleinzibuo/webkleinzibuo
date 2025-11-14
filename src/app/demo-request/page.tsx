// app/demo-request/page.tsx
import Link from 'next/link';
import React from 'react';

export default function DemoRequestPlaceholder() {
  return (
    <div className="pt-20 min-h-screen bg-[#F8F9FA]">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Request a Demo</h1>
        <p className="text-gray-600 mb-6">
          This is a placeholder for the Demo Request flow. The multi-step form will be added here soon.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-xl">
          <p className="mb-6">Quick demo info:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>30-minute one-on-one walkthrough</li>
            <li>Live demo tailored to your school</li>
            <li>No obligation</li>
          </ul>

          <Link href="/" className="inline-block px-5 py-3 bg-[#E82D86] text-white rounded-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
