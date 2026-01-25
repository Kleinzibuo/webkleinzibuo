"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
            <div
              className="w-20 h-20 bg-gradient-to-br from-[#E82D86] to-[#F047A0] 
              rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <ShieldCheck size={40} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
                1.1 Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-3">
                    Personal Information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Names, contact details, identification numbers",
                      "School information and academic records",
                      "Payment information (processed securely via third-party providers)",
                      "Communication preferences",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-3">
                    Technical Information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "IP addresses and device information",
                      "Usage statistics and analytics",
                      "Cookies and similar technologies",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1.2 How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "To provide and improve our services",
                  "To process payments and manage accounts",
                  "To communicate important updates",
                  "To ensure system security",
                  "To comply with legal obligations",
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
                1.3 Data Protection
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "We implement industry-standard security measures",
                  "Data is encrypted in transit and at rest",
                  "Regular security audits are conducted",
                  "Access controls limit internal data access",
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
                1.4 Third-Party Sharing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We may share data with:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Authorized school personnel",
                  "Payment processors (for billing)",
                  "Legal authorities (when required by law)",
                  "Service providers (under strict confidentiality agreements)",
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
                1.5 Your Rights
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Under the Protection of Personal Information Act (POPIA), you
                have the right to:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Access your personal information",
                  "Correct inaccurate information",
                  "Request deletion of your data",
                  "Object to data processing",
                  "Lodge complaints with the Information Regulator",
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
                1.6 Children&apos;s Privacy
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "We collect minimal data from students",
                  "Parental consent is required for students under 18",
                  "Schools are responsible for obtaining necessary consents",
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
                1.7 Data Retention
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We retain personal information only as long as necessary for:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Providing our services",
                  "Complying with legal requirements",
                  "Resolving disputes",
                  "School administrative needs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E82D86]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
            <p className="text-lg text-gray-600">
              Questions about privacy? Email{" "}
              <Link href="mailto:info@kleinzibuo.co.za" className="text-[#E82D86] hover:underline">
                info@kleinzibuo.co.za
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
