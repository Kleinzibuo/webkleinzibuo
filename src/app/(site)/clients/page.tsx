// app/clients/page.tsx
import Link from 'next/link';
import React from 'react';

export default function ClientsPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Our Client Schools (Placeholder)</h1>
        <p className="text-gray-600 mb-8">A quick list of partner preschools — we'll show logos and case studies here.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">Roselle Pre-Primary</div>
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">Edu Kids Pre-Primary</div>
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">Sunny Skies Preschool</div>
        </div>

        <div className="mt-8">
          <Link href="/" className="inline-block px-5 py-3 bg-[#E82D86] text-white rounded-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
