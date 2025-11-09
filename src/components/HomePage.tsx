import { motion } from 'motion/react';
import { Calendar, MessageSquare, Bell, Users, FileText, BarChart3, Award, Shield, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import roselleImage from 'figma:asset/d5b5243738e731091ac6857b81464d8ecea96033.png';
import eduKidsImage from 'figma:asset/093371cb837dd92a8c3de9738e44cc771e04d382.png';
import appScreenshot1 from 'figma:asset/2c47df4f09e1cd0ba1dc20d82e8bdde4bbce6d08.png';
import appScreenshot2 from 'figma:asset/06b8dd46e9fd0e6bca6d70ccc4c1b8f45b8dbdd3.png';
import appScreenshot3 from 'figma:asset/f88878f84e026a7cb8d33c1a4f11d87ecbab326e.png';
import heroImage from 'figma:asset/7ff78fbdf4c173f12ccc2c575732d7eb4e58a353.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smarter Preschool Management,<br />
                <span className="text-[#E82D86]">Happier Parent Connections</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Klein Zibuo builds the beautiful, easy-to-use websites and powerful management apps that help South African preschools thrive. We bridge the gap between your classroom and parents, keeping everyone informed, engaged, and connected.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('features')}
                  className="px-8 py-4 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See Our Solutions
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-[#E82D86] hover:text-[#E82D86] transition-all duration-300">
                  View Our Client Schools
                </button>
              </div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Mother and child using KleinZibuo app together"
                  className="w-full h-auto"
                />
                {/* Floating phone mockup overlay */}
                <div className="absolute bottom-8 right-8 w-48 transform rotate-6 hidden lg:block">
                  <img src={appScreenshot3} alt="KleinZibuo App" className="w-full h-auto rounded-3xl shadow-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Trusted by Leading Durban Preschools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with forward-thinking institutions in Durban and Pinetown to create a seamless digital experience.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={roselleImage} alt="Roselle Pre-Primary School" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-700 font-semibold">Roselle Pre-Primary School</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={eduKidsImage} alt="Edu Kids Pre-Primary" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-700 font-semibold">Edu Kids Pre-Primary</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Solutions Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run a Modern Preschool
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide an all-in-one platform designed to save you time and strengthen your school community.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stunning Preschool Websites</h3>
              <p className="text-gray-600 mb-6">
                Attract new families with a professional, mobile-friendly website that reflects the warmth of your school. Easy for you to update and manage.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={appScreenshot1} alt="Website Preview" className="absolute inset-0 w-full h-full object-contain" />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Powerful Management App</h3>
              <p className="text-gray-600 mb-6">
                Streamline daily tasks, attendance, billing, and communications—all from one simple app. Free up your time to focus on what matters most: the children.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={appScreenshot3} alt="Management App" className="absolute inset-0 w-full h-full object-contain" />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Parent Communication</h3>
              <p className="text-gray-600 mb-6">
                Send announcements, photos, and daily updates directly to parents' phones. Keep them involved in their child's day, building a stronger school community.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={appScreenshot2} alt="Parent Communication" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('features')}
              className="px-10 py-4 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Partner Schools Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E82D86]">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Since partnering with Klein Zibuo, our parent engagement has skyrocketed. The app has drastically reduced the 'how was school today?' questions because parents already feel a part of it. It's been a game-changer for Roselle Pre-Primary."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Principal</p>
                <p className="text-gray-600 text-sm">Roselle Pre-Primary School</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E82D86]">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The management app has saved us countless hours on admin. But more importantly, it has strengthened the trust between our teachers and the parents at Edu Kids. Klein Zibuo truly delivers on their promise to keep everyone connected."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Director</p>
                <p className="text-gray-600 text-sm">Edu Kids Pre-Primary</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Transform Your Preschool's Communication?
            </h2>
            <p className="text-xl text-white/90">
              Schedule a free, no-obligation demo today and see how Klein Zibuo can help you build a stronger, more connected school community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('demo')}
                className="px-10 py-5 bg-white text-[#E82D86] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:info@kleinzibuo.co.za'}
                className="px-10 py-5 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-[#E82D86] transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}