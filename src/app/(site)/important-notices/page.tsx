"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Link from "next/link";

export default function ImportantNoticesPage() {
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
              <Info size={40} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Important Notices
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
                1.1 POPIA Compliance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                KleinZibuo complies with the Protection of Personal Information
                Act 4 of 2013. Our Information Officer can be contacted at:{" "}
                <Link
                  href="mailto:info@kleinzibuo.co.za"
                  className="text-[#E82D86] hover:underline"
                >
                  info@kleinzibuo.co.za
                </Link>
                .
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.2 School Responsibilities
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Schools using KleinZibuo services are responsible for:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Obtaining necessary consents from parents/students",
                  "Ensuring accurate data entry",
                  "Maintaining their own data backups",
                  "Complying with educational regulations",
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
                1.3 Updates to Legal Terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We may update these terms periodically. Continued use after
                changes constitutes acceptance.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.4 Contact Information
              </h2>
              <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <p>For legal inquiries:</p>
                <p className="font-semibold text-gray-900">
                  KleinZibuo (Pty) Ltd
                </p>
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:legal@kleinzibuo.co.za"
                    className="text-[#E82D86] hover:underline"
                  >
                    legal@kleinzibuo.co.za
                  </Link>
                </p>
                <p>Address: 5 Roselle Road, Manors, Pinetown 3610</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
