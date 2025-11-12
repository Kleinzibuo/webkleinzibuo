import { motion } from 'motion/react';
import { Play, BarChart3, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mobileAppCalendar from 'figma:asset/f9d7e8e3bce52c5e8330df57ab6fd6965eaae946.png';
import mobileAppOrders from 'figma:asset/81c4ba32c2afe8ba41eeb5a00260c36c49921b60.png';
import mobileAppReport from 'figma:asset/e049654303f08ccb0580fa9eb544db9f1efe7609.png';

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
              <div className="inline-block px-4 py-2 bg-[#FFF4F0] rounded-full border border-[#FF6B35]/20">
                <span className="text-[#FF6B35]">✨ Trusted by 500+ Preschools</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stop Managing,<br />
                <span className="text-[#FF6B35]">Start Inspiring</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                KleinZibuo is the all-in-one platform that simplifies administration, strengthens parent connections, and lets you focus on what matters most: the children.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-8 py-4 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF5520] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request a Demo
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center gap-2">
                  <Play size={20} />
                  Watch the Video (2 min)
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
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1525829528215-ffae12a76ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByZXNjaG9vbCUyMHRlYWNoZXIlMjB0YWJsZXR8ZW58MXx8fHwxNzYyNDU2NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Teacher with tablet"
                  className="w-full h-auto"
                />
                {/* Floating phone mockup overlay */}
                <div className="absolute bottom-8 right-8 w-48 transform rotate-6 hidden lg:block">
                  <img src={mobileAppReport} alt="KleinZibuo App" className="w-full h-auto rounded-3xl shadow-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF6B35]">500+</p>
              <p className="text-gray-600">Preschools</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#4A90E2]">50,000+</p>
              <p className="text-gray-600">Happy Parents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7DCE82]">1M+</p>
              <p className="text-gray-600">Children Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF6B35]">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit-Driven App Showcase */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, All in One Place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your preschool with tools designed specifically for early childhood education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1: Streamlined Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5F] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamlined Operations</h3>
              <p className="text-gray-600 mb-6">
                Automate billing, manage staff schedules, and gain insights with powerful analytics—all from one intuitive dashboard.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={mobileAppCalendar} alt="Attendance Dashboard" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Card 2: Delighted Parents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#6BA8E8] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Delighted Parents</h3>
              <p className="text-gray-600 mb-6">
                Keep families connected with real-time updates, photo sharing, and instant messaging. Build trust and transparency effortlessly.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={mobileAppOrders} alt="Parent Communication" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Card 3: Joyful Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#7DCE82] to-[#9DD9A1] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Joyful Learning</h3>
              <p className="text-gray-600 mb-6">
                Empower teachers with digital portfolios, lesson planning tools, and one-tap attendance. More time for what matters: the kids.
              </p>
              {/* Phone Mockup */}
              <div className="relative h-64 mt-8">
                <img src={mobileAppReport} alt="Teacher Dashboard" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Preschool Leaders Nationwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "KleinZibuo transformed how we operate. I've reclaimed 10+ hours a week!",
                author: "Sarah Johnson",
                role: "Principal, Sunshine Academy",
              },
              {
                quote: "Parents love the real-time updates. Our parent satisfaction has never been higher.",
                author: "Michael Chen",
                role: "Director, Little Learners",
              },
              {
                quote: "The onboarding was seamless. We were up and running in just three days!",
                author: "Emily Rodriguez",
                role: "Owner, Bright Beginnings",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FF6B35]">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5F]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Transform Your Preschool?
            </h2>
            <p className="text-xl text-white/90">
              Join the thousands of principals who have reclaimed their time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('demo')}
                className="px-10 py-5 bg-white text-[#FF6B35] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Request a Demo
              </button>
              <button className="px-10 py-5 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-[#FF6B35] transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 text-white/90 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>30-day free trial</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}