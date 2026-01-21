"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  FileText,
  Clock,
  Camera,
  Calendar,
} from "lucide-react";

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-[#E82D86] to-[#0083AD">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FEE5F2] rounded-full border border-[#E82D86]/20">
              <span className="text-[#E82D86]">
                ✨ Complete Platform Features
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything Your Preschool Needs
            </h1>
            <p className="text-xl text-gray-600">
              Discover how KleinZibuo streamlines operations, delights parents,
              and empowers teachers with powerful, easy-to-use tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For School Leaders */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-100 flex items-center justify-center">
                <img
                  src="/1000527526.jpg"
                  alt="KleinZibuo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-[#E82D86]/10 rounded-full mb-4">
                  <span className="text-[#E82D86]">For School Leaders</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Powerful Insights at Your Fingertips
                </h2>
                <p className="text-lg text-gray-600">
                  Make data-driven decisions with comprehensive analytics and
                  automated workflows that save you hours every week.
                </p>
              </div>

              <div className="space-y-6">
                {/* Feature Items */}
                <FeatureItem
                  icon={<BarChart3 size={24} className="text-white" />}
                  title="Centralized Billing"
                  description="Automate invoicing, track payments, and manage tuition with ease. Reduce late payments by 80%."
                  bgGradient="bg-gradient-to-br from-[#E82D86] to-[#F047A0]"
                />
                <FeatureItem
                  icon={<Users size={24} className="text-white" />}
                  title="Staff Management"
                  description="Schedule shifts, track certifications, and manage payroll all in one place. Keep your team organized."
                  bgGradient="bg-gradient-to-br from-[#0083AD] to-[#00A3D6]"
                />
                <FeatureItem
                  icon={<FileText size={24} className="text-white" />}
                  title="Advanced Reporting"
                  description="Generate compliance reports, enrollment analytics, and financial summaries with one click."
                  bgGradient="bg-gradient-to-br from-[#00CFFF] to-[#80E0FF]"
                />
              </div>

              <button className="text-[#E82D86] hover:text-[#D01F76] cursor-pointer transition-colors inline-flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 lg:order-1 order-2"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-[#0083AD]/10 rounded-full mb-4">
                  <span className="text-[#0083AD]">For Teachers</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Your Day, Simplified
                </h2>
                <p className="text-lg text-gray-600">
                  Spend less time on paperwork and more time with the children.
                  Our intuitive tools make daily tasks effortless.
                </p>
              </div>

              <FeatureItem
                icon={<Clock size={24} className="text-white" />}
                title="One-Tap Attendance"
                description="Mark attendance in seconds with our quick-tap interface. Parents get instant check-in notifications."
                bgGradient="bg-gradient-to-br from-[#E82D86] to-[#F047A0]"
              />
              <FeatureItem
                icon={<Camera size={24} className="text-white" />}
                title="Digital Portfolios"
                description="Document milestones with photos, videos, and notes. Create beautiful portfolios parents will treasure."
                bgGradient="bg-gradient-to-br from-[#0083AD] to-[#00A3D6]"
              />
              <FeatureItem
                icon={<Calendar size={24} className="text-white" />}
                title="Lesson Planning"
                description="Access curriculum templates, share plans with your team, and track learning outcomes seamlessly."
                bgGradient="bg-gradient-to-br from-[#00CFFF] to-[#80E0FF]"
              />

              <button className="text-[#0083AD] hover:text-[#007399] cursor-pointer transition-colors inline-flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative lg:order-2 order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-100 flex items-center justify-center">
                <img
                  src="/1000526444.jpg"
                  alt="KleinZibuo"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E82D86] to-[#0083AD]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              See KleinZibuo in Action
            </h2>
            <p className="text-xl text-white/90">
              Schedule a personalized demo and discover how we can transform
              your preschool
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-request"
                className="px-10 py-5 bg-white text-[#E82D86] cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Reusable Feature Item Component
function FeatureItem({ icon, title, description, bgGradient }: any) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex-shrink-0 w-12 h-12 ${bgGradient} rounded-xl flex items-center justify-center shadow-md`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
