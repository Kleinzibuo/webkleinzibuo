'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Mail, Globe, Users, Clock, Award, Star, Filter, Map, Grid3x3, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface FindPreschoolPageProps {
  onNavigate: (page: string, preschoolId?: number) => void;
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
  hours: string;
  distance?: string;
}

const preschools: Preschool[] = [
  {
    id: 1,
    name: "Roselle Pre-Primary School",
    image: "/images/d5b5243738e731091ac6857b81464d8ecea96033.png",
    location: "5 Roselle Road, Manors, Pinetown",
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
    hours: "Monday - Friday, 7:00 AM - 5:00 PM",
    distance: "2.3 km"
  },
  {
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
    hours: "Monday - Friday, 6:30 AM - 5:30 PM",
    distance: "5.7 km"
  },
  {
    id: 3,
    name: "Little Sunshine Preschool",
    image: "https://images.unsplash.com/photo-1567746512136-f005499a7575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb20lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQ4NTI0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "12 Sunshine Avenue, Kloof",
    area: "Kloof",
    phone: "031 764 5432",
    email: "info@littlesunshine.co.za",
    ageRange: "18 months - 6 years",
    capacity: 60,
    rating: 4.7,
    reviews: 29,
    features: ["Nature-Based Learning", "Daily Photos", "Parent App", "Small Class Sizes", "Organic Meals"],
    description: "Embracing nature-based learning with a focus on outdoor education and sustainable practices in a beautiful garden setting.",
    hours: "Monday - Friday, 7:00 AM - 4:00 PM",
    distance: "8.1 km"
  },
  {
    id: 4,
    name: "Bright Beginnings Academy",
    image: "https://images.unsplash.com/photo-1633219664515-2441564d0cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDkwNDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "78 Academic Street, Durban North",
    area: "Durban North",
    phone: "031 563 9871",
    email: "contact@brightbeginnings.co.za",
    website: "www.brightbeginnings.co.za",
    ageRange: "6 months - 5 years",
    capacity: 100,
    rating: 4.9,
    reviews: 52,
    features: ["Extended Hours", "Live Updates", "Parent Portal", "Swimming Lessons", "Music Classes"],
    description: "Academic excellence meets creative play. We prepare children for their educational journey with confidence and enthusiasm.",
    hours: "Monday - Friday, 6:00 AM - 6:00 PM",
    distance: "6.4 km"
  },
  {
    id: 5,
    name: "Happy Hearts Montessori",
    image: "https://images.unsplash.com/photo-1591391258564-be184031cb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDk0NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "23 Montessori Way, Hillcrest",
    area: "Hillcrest",
    phone: "031 765 3210",
    email: "info@happyhearts.co.za",
    ageRange: "2 - 6 years",
    capacity: 50,
    rating: 4.8,
    reviews: 31,
    features: ["Montessori Method", "Daily Reports", "Parent App", "Individual Learning Plans", "Low Student Ratio"],
    description: "Authentic Montessori education fostering independence, curiosity, and a lifelong love of learning in a prepared environment.",
    hours: "Monday - Friday, 7:30 AM - 3:30 PM",
    distance: "11.2 km"
  },
  {
    id: 6,
    name: "Rainbow Kids Pre-School",
    image: "https://images.unsplash.com/photo-1648143714234-810e3ce38cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBwcmVzY2hvb2x8ZW58MXx8fHwxNzc0OTQ1MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "91 Rainbow Road, Glenwood",
    area: "Glenwood",
    phone: "031 201 4567",
    email: "admin@rainbowkids.co.za",
    website: "www.rainbowkids.co.za",
    ageRange: "1 - 5 years",
    capacity: 75,
    rating: 4.6,
    reviews: 24,
    features: ["Multicultural Program", "Live Photos", "Parent Communication", "Art & Craft Focus", "Drama Classes"],
    description: "Celebrating diversity and creativity through a multicultural curriculum that nurtures every child's unique talents and abilities.",
    hours: "Monday - Friday, 7:00 AM - 5:00 PM",
    distance: "4.9 km"
  }
];

export default function FindPreschoolPage({ onNavigate }: FindPreschoolPageProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique areas
  const areas = ['all', ...Array.from(new Set(preschools.map(p => p.area)))];

  // Filter preschools
  const filteredPreschools = preschools.filter(preschool => {
    const matchesSearch = preschool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         preschool.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         preschool.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'all' || preschool.area === selectedArea;
    
    return matchesSearch && matchesArea;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect<br />
              <span className="text-[#E82D86]">Preschool Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover preschools in the Durban area using Klein Zibuo's platform to keep parents connected, informed, and engaged every step of the way.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F8F9FA] rounded-xl">
                  <Search className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by school name, area, or address..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-3 bg-[#E82D86] text-white rounded-xl hover:bg-[#D01F76] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Filter size={20} />
                  Filters
                </button>
              </div>

              {/* Filter Options */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-white rounded-2xl shadow-xl p-6 mt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Area</label>
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent"
                      >
                        {areas.map(area => (
                          <option key={area} value={area}>
                            {area === 'all' ? 'All Areas' : area}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Age Group</label>
                      <select
                        value={selectedAge}
                        onChange={(e) => setSelectedAge(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E82D86] focus:border-transparent"
                      >
                        <option value="all">All Ages</option>
                        <option value="infant">Infants (0-2 years)</option>
                        <option value="toddler">Toddlers (2-3 years)</option>
                        <option value="preschool">Preschool (3-5 years)</option>
                        <option value="kindergarten">Kindergarten (5-6 years)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredPreschools.length} {filteredPreschools.length === 1 ? 'Preschool' : 'Preschools'} Found
              </h2>
              <p className="text-gray-600 mt-1">
                All schools use Klein Zibuo for seamless parent communication
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-[#F8F9FA] rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#E82D86] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#E82D86] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Map size={20} />
              </button>
            </div>
          </div>

          {/* Preschool Grid/List */}
          {filteredPreschools.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No preschools found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedArea('all');
                  setSelectedAge('all');
                }}
                className="px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredPreschools.map((preschool, index) => (
                <motion.div
                  key={preschool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => router.push(`/preschool-detail/${preschool.id}`)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {typeof preschool.image === 'string' && preschool.image.startsWith('http') ? (
                      <img
                        src={preschool.image}
                        alt={preschool.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={preschool.image}
                        alt={preschool.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {preschool.distance && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                        {preschool.distance}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E82D86] transition-colors">
                        {preschool.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                        <Star size={16} className="text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-gray-900">{preschool.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-gray-600">
                        <MapPin size={16} className="mt-1 flex-shrink-0 text-[#E82D86]" />
                        <span className="text-sm">{preschool.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} className="flex-shrink-0 text-[#0083AD]" />
                        <span className="text-sm">{preschool.ageRange} • Capacity: {preschool.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} className="flex-shrink-0 text-[#E82D86]" />
                        <span className="text-sm">{preschool.hours}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {preschool.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {preschool.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#E0FFFF] text-[#0083AD] text-xs rounded-full font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                      {preschool.features.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold">
                          +{preschool.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={`tel:${preschool.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-4 py-2 bg-[#E82D86] text-white rounded-xl hover:bg-[#D01F76] transition-all text-center text-sm font-semibold"
                      >
                        Call Now
                      </a>
                      <a
                        href={`mailto:${preschool.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-4 py-2 bg-white border-2 border-[#E82D86] text-[#E82D86] rounded-xl hover:bg-[#E82D86] hover:text-white transition-all text-center text-sm font-semibold"
                      >
                        Email
                      </a>
                    </div>

                    {preschool.website && (
                      <a
                        href={`https://${preschool.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 flex items-center justify-center gap-2 text-sm text-[#0083AD] hover:text-[#006B8F] transition-colors"
                      >
                        <Globe size={16} />
                        Visit Website
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Klein Zibuo Features Banner */}
      <section className="py-20 bg-gradient-to-br from-[#E82D86] to-[#0083AD]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every School Uses Klein Zibuo
              </h2>
              <p className="text-xl text-white/90">
                All listed preschools benefit from our powerful management platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Instant Updates",
                  description: "Parents receive real-time notifications about their child's day"
                },
                {
                  icon: Award,
                  title: "Digital Reports",
                  description: "Progress reports and assessments shared seamlessly"
                },
                {
                  icon: Globe,
                  title: "Parent Portal",
                  description: "24/7 access to photos, activities, and school information"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E82D86] to-[#0083AD] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Is Your Preschool Using Klein Zibuo?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join these amazing schools and provide parents with the connected experience they deserve. Get started with Klein Zibuo today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => onNavigate('demo')}
                    className="px-8 py-4 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Request a Demo
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-[#E82D86] hover:text-[#E82D86] transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}