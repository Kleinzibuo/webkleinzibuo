// app/features/page.tsx
import Link from 'next/link';
import React from 'react';

export default function FeaturesPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFBFC]">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Features (Placeholder)</h1>
        <p className="text-gray-600 mb-8">
          This is a placeholder page for Features. We'll replace this with the full Features layout soon.
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Centralized Billing</li>
          <li>Staff Management</li>
          <li>Advanced Reporting</li>
        </ul>

        <div>
          <Link href="/" className="inline-block px-5 py-3 bg-[#E82D86] text-white rounded-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
