'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from "next/navigation";


interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['5 Roselle Road, Manors', 'Pinetown 3610', 'South Africa'],
      color: 'from-[#E82D86] to-[#F047A0]'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['071 791 6078', 'Mon - Fri: 8:00 AM - 5:00 PM'],
      color: 'from-[#0083AD] to-[#00A8D8]',
      action: () => window.open('tel:0717916078', '_self')
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@kleinzibuo.co.za', 'We respond within 24 hours'],
      color: 'from-[#E82D86] to-[#0083AD]',
      action: () => window.open('mailto:info@kleinzibuo.co.za', '_blank')
    }
  ];

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
              Let's Build Something<br />
              <span className="text-[#E82D86]">Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about how Klein Zibuo can transform your preschool? We're here to help. Reach out and let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={info.action}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className={`text-gray-600 ${i === 0 ? 'font-semibold text-gray-900' : ''}`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Takes up 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#0083AD] rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-800">Thank you! We've received your message and will respond within 24 hours.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent transition-all"
                        placeholder="john@preschool.co.za"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent transition-all"
                        placeholder="071 234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your preschool and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Office Hours & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Hours Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0083AD] to-[#00A8D8] rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Card */}
              <div className="bg-gradient-to-br from-[#E82D86] to-[#0083AD] rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Book a personalized demo and see how Klein Zibuo can transform your preschool management.
                </p>
                <button
                  onClick={() => router.push("demo-request")}
                  className="w-full px-6 py-3 bg-white text-[#E82D86] rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request a Demo
                </button>
              </div>

              {/* Location Image */}
              <div className="bg-white rounded-3xl p-2 shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMHNvdXRoJTIwYWZyaWNhfGVufDF8fHx8MTczODYwNDU4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Klein Zibuo office location in Pinetown"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Pinetown, we're easily accessible from all areas of Durban.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.234567890123!2d30.8539!3d-29.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ5JzAwLjEiUyAzMMKwNTEnMTQuMCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klein Zibuo Office Location"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <MapPin className="w-8 h-8 text-[#E82D86] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Easy Access</h4>
                <p className="text-sm text-gray-600">Convenient location with ample parking</p>
              </div>
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <Clock className="w-8 h-8 text-[#0083AD] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Flexible Meetings</h4>
                <p className="text-sm text-gray-600">Schedule visits at your convenience</p>
              </div>
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <Phone className="w-8 h-8 text-[#E82D86] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Always Available</h4>
                <p className="text-sm text-gray-600">Call or email us anytime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E82D86] to-[#0083AD]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Transform Your Preschool Together
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the growing community of South African preschools using Klein Zibuo to streamline operations and strengthen parent connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('demo-request')}
                className="px-8 py-4 bg-white text-[#E82D86] rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => router.push('features')}
                className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#E82D86] transition-all duration-300"
              >
                Explore Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
