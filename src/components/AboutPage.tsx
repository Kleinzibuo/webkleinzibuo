import { motion } from 'motion/react';
import { Shield, Clock, Users, CheckCircle, Heart, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Born in Durban,<br />
              <span className="text-[#E82D86]">Built for South African Preschools</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Based in Durban with strong roots in Pinetown, Klein Zibuo understands the unique challenges facing South African preschools. We've seen how administrative burdens can take time away from what matters most - the children.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are more than just a tech company; we are your partner in creating a connected, informed, and thriving preschool community. Our core focus is on ensuring our solutions keep parents informed at all times, turning everyday moments into shared experiences and building trust between your school and the families you serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758525864570-a78364675d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZGlnaXRhbCUyMHRhYmxldCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjI2MjgzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Teacher using digital technology in preschool"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
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
              <Target size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To create technology that simplifies preschool management while strengthening the connection between schools and families. We believe every parent deserves to feel connected to their child's learning journey.
            </p>
          </motion.div>

          {/* Our Name, Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <div className="flex items-start gap-4 mb-6">
              <Heart size={32} className="text-[#E82D86] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Name, Our Promise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  "Klein Zibuo" reflects our dedication to the "little ones" (Klein) and our comprehensive "toolkit" (Zibuo) of solutions designed to empower both educators and parents.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Understanding</h3>
              <p className="text-gray-600">Global standards tailored for South African preschools</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Purpose-Built</h3>
              <p className="text-gray-600">Designed specifically for South African preschools</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Trusted by Roselle Pre Primary and Edu Kids</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Improving</h3>
              <p className="text-gray-600">Continuous updates and improvements</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F8F9FA]">
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
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E82D86]">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">
                "Klein Zibuo has transformed how we communicate with parents. The daily updates and photo sharing have brought our school community closer together."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Roselle Pre Primary</p>
                <p className="text-gray-600 text-sm">Pinetown, Durban</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E82D86]">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">
                "The time saved on administrative tasks has been remarkable. Our teachers are happier and more focused on the children."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Edu Kids Pre Primary</p>
                <p className="text-gray-600 text-sm">Durban</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is my data secure?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely. We use enterprise-grade security and comply with South African data protection regulations. Your school's data and parent information are encrypted and stored securely.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How easy is it to get started?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Very easy! Most schools are up and running within a day. We provide full training and support for your staff, ensuring a smooth transition to the Klein Zibuo platform.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E0FFFF] to-[#C0F0FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do parents need to download an app?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parents can use our mobile app for the best experience, or access all features through their web browser. It's completely flexible based on their preference.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Join Our Growing Community?
            </h2>
            <p className="text-xl text-white/90">
              See how Klein Zibuo can transform your preschool's communication and management.
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