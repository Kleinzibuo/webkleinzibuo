"use client";

import { motion } from "framer-motion";
import DemoRequestForm from "@/features/demo-request/DemoRequestForm";

export default function DemoRequestPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#FFF0F7] rounded-full border border-[#E82D86]/20 mb-4">
            <span className="text-[#E82D86]">✨ Schedule Your Demo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            See KleinZibuo in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized, no-obligation demo with our team. We'll
            show you how KleinZibuo can solve your specific challenges and help
            your school thrive.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
}
