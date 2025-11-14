import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}
export default function Testimonials({ onNavigate }: HomePageProps)  {
  return (
  <section className="py-24  bg-gradient-to-br 
      from-[#E82D86] 
      to-[#0083AD]">
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
  )
}
