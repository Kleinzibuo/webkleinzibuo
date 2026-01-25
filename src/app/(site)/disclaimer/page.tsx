"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <AlertTriangle size={40} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Disclaimer
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
                1.1 Service Availability
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KleinZibuo strives to maintain 99.5% uptime but does not
                guarantee:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Uninterrupted service availability",
                  "Error-free operation",
                  "Compatibility with all devices/browsers",
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
                1.2 Educational Content
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Information provided is for educational purposes only",
                  "We do not guarantee academic outcomes",
                  "Schools remain responsible for educational quality",
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
                1.3 Third-Party Links
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our website may contain links to third-party sites. We:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Are not responsible for their content",
                  "Do not endorse external sites",
                  "Recommend reviewing their privacy policies",
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
                1.4 Limitation of Liability
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KleinZibuo (Pty) Ltd shall not be liable for:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Indirect, incidental, or consequential damages",
                  "Data loss or corruption",
                  "Service interruptions",
                  "Actions of third parties",
                  "User-generated content",
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
                1.5 Jurisdiction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These terms are governed by South African law. Disputes will be
                resolved in South African courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
            <p className="text-lg text-gray-600">
              Legal questions? Email{" "}
              <Link
                href="mailto:legal@kleinzibuo.co.za"
                className="text-[#E82D86] hover:underline"
              >
                legal@kleinzibuo.co.za
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
