"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div
              className="w-20 h-20 bg-gradient-to-br from-[#E82D86] to-[#F047A0] 
              rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <Target size={40} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last updated: January 25, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.1 Acceptance of Terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing and using the KleinZibuo website (
                <Link href="/" className="text-[#E82D86] hover:underline">
                  https://www.kleinzibuo.co.za/
                </Link>
                ) and related services, you agree to be bound by these Terms of
                Use. If you do not agree with any part of these terms, you must
                discontinue use immediately.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.2 Service Description
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KleinZibuo provides school management software solutions
                including:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Student information management",
                  "Parent communication tools",
                  "Academic progress tracking",
                  "Fee management systems",
                  "Administrative support tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.3 User Accounts
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Accounts are for authorized school personnel, parents, and students only",
                  "You are responsible for maintaining account confidentiality",
                  "You must provide accurate and complete information",
                  "KleinZibuo reserves the right to suspend accounts violating these terms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.4 Acceptable Use
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                You agree not to:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Use the service for illegal purposes",
                  "Attempt to gain unauthorized access",
                  "Upload malicious software or viruses",
                  "Harass other users",
                  "Share login credentials",
                  "Reverse engineer our software",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.5 Intellectual Property
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                All content, logos, and software on this site are the property
                of KleinZibuo (Pty) Ltd and protected by South African and
                international copyright laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E82D86] to-[#F047A0]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Join Our Growing Community?
            </h2>

            <p className="text-xl text-white/90">
              See how Klein Zibuo can transform your preschool's communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="px-10 py-5 bg-white text-[#E82D86] rounded-full hover:bg-gray-100 
                transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Demo
              </Link>

              <Link
                href="mailto:info@kleinzibuo.co.za"
                className="px-10 py-5 bg-transparent text-white border-2 border-white 
                rounded-full hover:bg-white hover:text-[#E82D86] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
