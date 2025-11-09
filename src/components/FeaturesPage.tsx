import { motion } from 'motion/react';
import { BarChart3, Users, Calendar, FileText, MessageCircle, Camera, Clock, Shield, Bell } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mobileAppCalendar from 'figma:asset/f9d7e8e3bce52c5e8330df57ab6fd6965eaae946.png';
import mobileAppOrders from 'figma:asset/81c4ba32c2afe8ba41eeb5a00260c36c49921b60.png';
import mobileAppReport from 'figma:asset/e049654303f08ccb0580fa9eb544db9f1efe7609.png';
import parentTabletImage from 'figma:asset/c4deb67cd034405e4d507017061a684d04a65d7d.png';
import fatherChildTablet from 'figma:asset/3e2872346dc61bd4d1e41889c156ec9f28a52740.png';
import motherChildPhone from 'figma:asset/01339b09d4db81ce24da06d28e32e42e7f59864d.png';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FEE5F2] rounded-full border border-[#E82D86]/20">
              <span className="text-[#E82D86]">✨ Complete Platform Features</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything Your Preschool Needs
            </h1>
            <p className="text-xl text-gray-600">
              Discover how KleinZibuo streamlines operations, delights parents, and empowers teachers with powerful, easy-to-use tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For School Leaders */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689857538296-b6e1a392a91d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwdGFibGV0JTIwd29ya3xlbnwxfHx8fDE3NjI2MjgzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="School administrator using tablet"
                  className="w-full h-auto"
                />
                {/* Floating dashboard mockup */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-2 shadow-2xl w-48 hidden lg:block">
                  <img src={mobileAppCalendar} alt="Dashboard" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                  Make data-driven decisions with comprehensive analytics and automated workflows that save you hours every week.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center shadow-md">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Centralized Billing</h3>
                    <p className="text-gray-600">
                      Automate invoicing, track payments, and manage tuition with ease. Reduce late payments by 80%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-xl flex items-center justify-center shadow-md">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Management</h3>
                    <p className="text-gray-600">
                      Schedule shifts, track certifications, and manage payroll all in one place. Keep your team organized.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-xl flex items-center justify-center shadow-md">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Reporting</h3>
                    <p className="text-gray-600">
                      Generate compliance reports, enrollment analytics, and financial summaries with one click.
                    </p>
                  </div>
                </div>
              </div>

              <button className="text-[#E82D86] hover:text-[#D01F76] transition-colors inline-flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
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
                  Spend less time on paperwork and more time with the children. Our intuitive tools make daily tasks effortless.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center shadow-md">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">One-Tap Attendance</h3>
                    <p className="text-gray-600">
                      Mark attendance in seconds with our quick-tap interface. Parents get instant check-in notifications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-xl flex items-center justify-center shadow-md">
                    <Camera size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Portfolios</h3>
                    <p className="text-gray-600">
                      Document milestones with photos, videos, and notes. Create beautiful portfolios parents will treasure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-xl flex items-center justify-center shadow-md">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lesson Planning</h3>
                    <p className="text-gray-600">
                      Access curriculum templates, share plans with your team, and track learning outcomes seamlessly.
                    </p>
                  </div>
                </div>
              </div>

              <button className="text-[#0083AD] hover:text-[#007399] transition-colors inline-flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img src={parentTabletImage} alt="Parent and child using tablet with KleinZibuo app" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={motherChildPhone}
                  alt="Parent and child using phone with KleinZibuo app"
                  className="w-full h-auto"
                />
                {/* Floating notification */}
                <div className="absolute top-8 left-8 bg-white rounded-2xl p-2 shadow-2xl w-48 hidden lg:block">
                  <img src={mobileAppOrders} alt="Parent App" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-[#E0FFFF]/30 rounded-full mb-4">
                  <span className="text-[#0083AD]">For Parents</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Build a Thriving Community
                </h2>
                <p className="text-lg text-gray-600">
                  Keep parents engaged and informed with instant updates and transparent communication that builds lasting trust.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center shadow-md">
                    <Bell size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
                    <p className="text-gray-600">
                      Parents receive instant notifications about their child's day, from meals to naps to activities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-xl flex items-center justify-center shadow-md">
                    <Camera size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo & Video Sharing</h3>
                    <p className="text-gray-600">
                      Share precious moments securely. Parents can view, download, and cherish memories instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-xl flex items-center justify-center shadow-md">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Messaging</h3>
                    <p className="text-gray-600">
                      Secure two-way communication between parents and teachers. No more missed emails or phone tag.
                    </p>
                  </div>
                </div>
              </div>

              <button className="text-[#0083AD] hover:text-[#007399] transition-colors inline-flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your data is protected with bank-level encryption, regular backups, and full GDPR compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">256-bit SSL Encryption</h3>
                <p className="text-gray-600 text-sm">Bank-level security for all data</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Daily Backups</h3>
                <p className="text-gray-600 text-sm">Your data is always safe</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-600 text-sm">Full regulatory compliance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              See KleinZibuo in Action
            </h2>
            <p className="text-xl text-white/90">
              Schedule a personalized demo and discover how we can transform your preschool
            </p>
            <button
              onClick={() => onNavigate('demo')}
              className="px-10 py-5 bg-white text-[#E82D86] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request a Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}