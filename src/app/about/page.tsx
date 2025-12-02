'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield, Clock, Users,
  CheckCircle, Heart, Target, Zap
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-[#E82D86] to-[#0083AD">
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

      {/* OUR STORY */}
{/* OUR STORY */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Based in Durban with strong roots in Pinetown, Klein Zibuo understands 
          the unique challenges facing South African preschools. We've seen how 
          administrative burdens can take time away from what matters most — the children.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          We are more than just a tech company; we are your partner in creating a 
          connected, informed, and thriving preschool community. Our focus is on 
          keeping parents informed at all times, turning everyday moments into 
          shared experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-100 flex items-center justify-center">
           <img
                src="/1000527542.jpg"
                alt="KleinZibuo"
                className="absolute inset-0 w-full h-full object-contain"
              />
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* MISSION */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#E82D86] to-[#F047A0] 
              rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Target size={40} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To create technology that simplifies preschool management while strengthening 
              the connection between schools and families.
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
                  "Klein Zibuo" reflects our dedication to the little ones (Klein) and 
                  our toolkit (Zibuo) of solutions designed for educators and parents.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {[
              { icon: Heart, title: "Local Understanding", text: "Built for SA preschools" },
              { icon: Target, title: "Purpose-Built", text: "Designed for your school" },
              { icon: CheckCircle, title: "Proven Results", text: "Trusted by top preschools" },
              { icon: Zap, title: "Always Improving", text: "Continuous updates" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#E82D86] to-[#F047A0] 
                  rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">

            {[
              {
                icon: Shield,
                question: "Is my data secure?",
                answer:
                  "Yes. We use enterprise-grade security and follow South African POPIA standards."
              },
              {
                icon: Clock,
                question: "How easy is it to get started?",
                answer:
                  "Very easy! Most schools are fully onboarded within a day with full training."
              },
              {
                icon: Users,
                question: "Do parents need to download an app?",
                answer:
                  "Parents can use the mobile app or browser — whichever they prefer."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] 
                    rounded-xl flex items-center justify-center">
                    <faq.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
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
              See how Klein Zibuo can transform your preschool's communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                href="/demo-request"
                className="px-10 py-5 bg-white text-[#E82D86] rounded-full hover:bg-gray-100 
                transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Demo
              </Link>

              

              <a
                href="mailto:info@kleinzibuo.co.za"
                className="px-10 py-5 bg-transparent text-white border-2 border-white 
                rounded-full hover:bg-white hover:text-[#E82D86] transition-all duration-300"
              >
                Contact Us
              </a>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
