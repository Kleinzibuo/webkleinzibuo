import { Bell, Calendar, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function FeatureShowcase({ onNavigate }: HomePageProps) {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run a Modern Preschool
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide an all-in-one platform designed to save you time and
            strengthen your school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1: Stunning Preschool Websites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stunning Preschool Websites
            </h3>
            <p className="text-gray-600 mb-6">
              Attract new families with a professional, mobile-friendly website
              that reflects the warmth of your school. Easy for you to update
              and manage.
            </p>
            {/* Phone Mockup */}
            <div className="relative h-64 mt-8">
              <img
                src="/1000527497.png"
                alt="KleinZibuo"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Feature 2: Powerful Management App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Bell size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powerful Management App
            </h3>
            <p className="text-gray-600 mb-6">
              Streamline daily tasks, attendance, billing, and
              communications—all from one simple app. Free up your time to focus
              on what matters most: the children.
            </p>
            {/* Phone Mockup */}
            <div className="relative h-64 mt-8">
              <img
                src="/1000527503.jpg"
                alt="KleinZibuo"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Feature 3: Instant Parent Communication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-2xl flex items-center justify-center mb-6 shadow-md border border-gray-200">
              <MessageSquare size={32} className="text-[#0083AD]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Instant Parent Communication
            </h3>
            <p className="text-gray-600 mb-6">
              Send announcements, photos, and daily updates directly to parents'
              phones. Keep them involved in their child's day, building a
              stronger school community.
            </p>
            {/* Phone Mockup */}
            <div className="relative h-64 mt-8">
              <img
                src="/1000527526.jpg"
                alt="KleinZibuo"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("features")}
            className="px-10 py-4 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
