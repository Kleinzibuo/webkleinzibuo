//src/app/preschool-detail/[id]/page.tsx
'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Users, Star, Award, Check, Heart, Calendar, DollarSign, Shield, Utensils, Music, Palette, BookOpen, ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PreschoolDetailPageProps {
  preschoolId: number;
}

interface Preschool {
  id: number;
  name: string;
  image: string;
  location: string;
  area: string;
  phone: string;
  email: string;
  website?: string;
  ageRange: string;
  capacity: number;
  rating: number;
  reviews: number;
  features: string[];
  description: string;
  longDescription: string;
  hours: string;
  distance?: string;
  gallery: string[];
  curriculum: string[];
  amenities: string[];
  testimonials: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
  staff: {
    teachers: number;
    ratio: string;
    qualified: string;
  };
  pricing: {
    fullDay: string;
    halfDay: string;
    registration: string;
  };
}

const preschoolsData: Record<number, Preschool> = {
  1: {
    id: 1,
    name: "Roselle Pre-Primary School",
    image: "/images/d5b5243738e731091ac6857b81464d8ecea96033.png",
    location: "5 Roselle Road, Manors, Pinetown 3610",
    area: "Pinetown",
    phone: "071 791 6078",
    email: "info@roselleschool.co.za",
    website: "www.roselleschool.co.za",
    ageRange: "3 months - 6 years",
    capacity: 120,
    rating: 4.9,
    reviews: 48,
    features: ["Daily Updates", "Live Photos", "Digital Reports", "Parent App", "Qualified Teachers"],
    description: "A nurturing environment where children learn through play and exploration. Our experienced educators focus on holistic development.",
    longDescription: "At Roselle Pre-Primary School, we believe in creating a warm, nurturing environment where every child can thrive. Our experienced educators are passionate about early childhood development and use play-based learning to foster curiosity, creativity, and confidence. We partner with parents through the Klein Zibuo platform to ensure seamless communication and keep you connected to your child's daily experiences and milestones.",
    hours: "Monday - Friday, 7:00 AM - 5:00 PM",
    distance: "2.3 km",
    gallery: [
      "/images/d5b5243738e731091ac6857b81464d8ecea96033.png",
      "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBvdXRkb29yJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NzQ5MDMwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW4lMjBhY3Rpdml0eXxlbnwxfHx8fDE3NzQ5NDUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1567746512136-f005499a7575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb20lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQ4NTI0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    curriculum: [
      "Play-based learning approach",
      "Early literacy and numeracy",
      "Social and emotional development",
      "Creative arts and music",
      "Physical development and outdoor play",
      "School readiness program (Grade R)"
    ],
    amenities: [
      "Secure outdoor play areas",
      "Air-conditioned classrooms",
      "Nutritious meals and snacks",
      "Indoor jungle gym",
      "Library and reading corner",
      "Art and craft stations",
      "Music room",
      "Safe drop-off and pick-up zone"
    ],
    testimonials: [
      {
        name: "Thandi Mthembu",
        role: "Parent of 4-year-old",
        text: "Roselle has been incredible for our daughter's development. The Klein Zibuo app keeps us updated throughout the day with photos and progress reports. The teachers are caring and professional.",
        rating: 5
      },
      {
        name: "Michael van der Merwe",
        role: "Parent of twins (3 years)",
        text: "We love the daily updates through the app! It's wonderful to see what our twins are learning and doing. The staff are warm and welcoming, and the facilities are excellent.",
        rating: 5
      },
      {
        name: "Lindiwe Nkosi",
        role: "Parent of 5-year-old",
        text: "The school readiness program has prepared my son so well for primary school. The communication through Klein Zibuo is fantastic - I feel connected even when I'm at work.",
        rating: 5
      }
    ],
    staff: {
      teachers: 12,
      ratio: "1:10",
      qualified: "100% qualified with ECD certification"
    },
    pricing: {
      fullDay: "R3,500/month",
      halfDay: "R2,200/month",
      registration: "R1,000 (once-off)"
    }
  },
  2: {
    id: 2,
    name: "EduKids Learning Centre",
    image: "/images/093371cb837dd92a8c3de9738e44cc771e04d382.png",
    location: "45 Education Drive, Westville",
    area: "Westville",
    phone: "031 456 7890",
    email: "hello@edukids.co.za",
    website: "www.edukids.co.za",
    ageRange: "2 - 5 years",
    capacity: 80,
    rating: 4.8,
    reviews: 36,
    features: ["Bilingual Program", "Daily Updates", "Parent Portal", "Outdoor Play Area", "STEAM Activities"],
    description: "Forward-thinking education with a focus on STEAM learning and bilingual development in a safe, stimulating environment.",
    longDescription: "EduKids Learning Centre offers a progressive approach to early childhood education, combining bilingual instruction with hands-on STEAM activities. Our curriculum is designed to prepare children for the future while nurturing their natural curiosity and love of learning. Through Klein Zibuo, parents stay connected with real-time updates, photos, and developmental milestones.",
    hours: "Monday - Friday, 6:30 AM - 5:30 PM",
    distance: "5.7 km",
    gallery: [
      "/images/093371cb837dd92a8c3de9738e44cc771e04d382.png",
      "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDkwNDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBvdXRkb29yJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NzQ5MDMwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1591391258564-be184031cb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDk0NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    curriculum: [
      "Bilingual instruction (English & Afrikaans)",
      "STEAM-focused activities",
      "Problem-solving and critical thinking",
      "Language development",
      "Mathematics foundations",
      "Science exploration and discovery"
    ],
    amenities: [
      "Modern STEAM lab",
      "Bilingual learning resources",
      "Large outdoor play area",
      "Computer room",
      "Library with multilingual books",
      "Healthy meal program",
      "Secure parking and drop-off",
      "Extended care options"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Parent of 4-year-old",
        text: "The bilingual program has been amazing for our son. He's learning both languages naturally while having fun. The Klein Zibuo app makes it easy to track his progress.",
        rating: 5
      },
      {
        name: "Pieter Botha",
        role: "Parent of 3-year-old",
        text: "EduKids really focuses on preparing kids for the future with their STEAM program. My daughter loves the science experiments and I love receiving daily photo updates!",
        rating: 5
      }
    ],
    staff: {
      teachers: 10,
      ratio: "1:8",
      qualified: "All teachers hold ECD and bilingual certifications"
    },
    pricing: {
      fullDay: "R4,200/month",
      halfDay: "R2,800/month",
      registration: "R1,200 (once-off)"
    }
  }
};

export default function PreschoolDetailPage({ preschoolId }: PreschoolDetailPageProps) {
  const router = useRouter();
  const preschool = preschoolsData[preschoolId];

  if (!preschool) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preschool not found</h2>
          <button
            onClick={() => router.push('/find-preschool')}
            className="px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all"
          >
            Back to Find Preschool
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => onNavigate('find-preschool')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#E82D86] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Search Results
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {typeof preschool.image === 'string' && preschool.image.startsWith('http') ? (
                  <img
                    src={preschool.image}
                    alt={preschool.name}
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <img
                    src={preschool.image}
                    alt={preschool.name}
                    className="w-full h-[400px] object-cover"
                  />
                )}
              </div>
              {preschool.distance && (
                <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-gray-900">{preschool.distance} away</span>
                </div>
              )}
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {preschool.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg">
                      <Star size={18} className="text-amber-500 fill-amber-500" />
                      <span className="font-bold text-gray-900">{preschool.rating}</span>
                      <span className="text-gray-600 text-sm">({preschool.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {preschool.longDescription}
              </p>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#E82D86] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{preschool.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[#0083AD] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">{preschool.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-[#E82D86] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Age Range & Capacity</p>
                      <p className="text-gray-600">{preschool.ageRange} • Max {preschool.capacity} children</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${preschool.phone}`}
                  className="flex-1 px-6 py-4 bg-[#E82D86] text-white rounded-xl hover:bg-[#D01F76] transition-all text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`mailto:${preschool.email}`}
                  className="flex-1 px-6 py-4 bg-white border-2 border-[#E82D86] text-[#E82D86] rounded-xl hover:bg-[#E82D86] hover:text-white transition-all text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Klein Zibuo Badge */}
      <section className="py-8 bg-gradient-to-r from-[#E82D86] to-[#0083AD]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Check size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Powered by Klein Zibuo</p>
                <p className="text-white/90 text-sm">Real-time parent communication & updates</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {preschool.features.slice(0, 4).map((feature, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {preschool.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {typeof image === 'string' && image.startsWith('http') ? (
                    <img
                      src={image}
                      alt={`${preschool.name} facility ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`${preschool.name} facility ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum & Amenities */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Curriculum */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#0083AD] rounded-xl flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Curriculum</h2>
              </div>
              <ul className="space-y-4">
                {preschool.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-[#0083AD] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#E82D86] rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Facilities & Amenities</h2>
              </div>
              <ul className="space-y-4">
                {preschool.amenities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-[#E82D86] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff & Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Staff Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#E0FFFF] to-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Teaching Team</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0083AD] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Teaching Staff</p>
                    <p className="text-gray-700">{preschool.staff.teachers} experienced educators</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E82D86] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Teacher-to-Child Ratio</p>
                    <p className="text-gray-700">{preschool.staff.ratio} for personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0083AD] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Qualifications</p>
                    <p className="text-gray-700">{preschool.staff.qualified}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fees</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E82D86] rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Full Day Program</p>
                    <p className="text-2xl font-bold text-[#E82D86]">{preschool.pricing.fullDay}</p>
                    <p className="text-sm text-gray-600 mt-1">Includes meals and snacks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0083AD] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Half Day Program</p>
                    <p className="text-2xl font-bold text-[#0083AD]">{preschool.pricing.halfDay}</p>
                    <p className="text-sm text-gray-600 mt-1">Morning session with snacks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Registration Fee</p>
                    <p className="text-xl font-bold text-gray-900">{preschool.pricing.registration}</p>
                    <p className="text-sm text-gray-600 mt-1">One-time enrollment fee</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Parents Say</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Hear from families who have experienced the difference at {preschool.name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preschool.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Enrollment CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E82D86] to-[#0083AD]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a tour or get in touch to learn more about enrollment at {preschool.name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href={`tel:${preschool.phone}`}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all"
              >
                <Phone size={32} className="mx-auto mb-3" />
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-sm text-white/90">{preschool.phone}</p>
              </a>
              <a
                href={`mailto:${preschool.email}`}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all"
              >
                <Mail size={32} className="mx-auto mb-3" />
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-sm text-white/90">{preschool.email}</p>
              </a>
              {preschool.website && (
                <a
                  href={`https://${preschool.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all"
                >
                  <Globe size={32} className="mx-auto mb-3" />
                  <p className="font-semibold mb-1">Visit Website</p>
                  <p className="text-sm text-white/90 flex items-center justify-center gap-1">
                    {preschool.website}
                    <ExternalLink size={12} />
                  </p>
                </a>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('demo')}
                className="px-8 py-4 bg-white text-[#E82D86] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                Learn About Klein Zibuo
              </button>
              <button
                onClick={() => onNavigate('find-preschool')}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300 font-semibold"
              >
                View More Schools
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
