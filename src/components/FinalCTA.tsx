import { motion } from 'motion/react'

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function FinalCTA({ onNavigate }: HomePageProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* HEADLINE */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ready to Transform Your Preschool?
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Schedule a free, no-obligation demo today and discover how Klein Zibuo can help you build a stronger and more connected school community.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            
            {/* PRIMARY CTA */}
            <button
              onClick={() => onNavigate('demo')}
              className="
                px-10 py-4
                bg-[#E82D86] 
                text-white 
                rounded-full 
                font-semibold
                hover:bg-[#D01F76]
                transition-all duration-300 
                shadow-lg hover:shadow-xl 
                transform hover:-translate-y-1
                cursor-pointer
              "
            >
              Book a Demo
            </button>

            {/* SECONDARY CTA */}
            <button
              onClick={() => (window.location.href = 'mailto:info@kleinzibuo.co.za')}
              className="
                px-10 py-4 
                bg-transparent 
                text-[#E82D86]
                border-2 border-[#E82D86]
                rounded-full
                font-semibold
                hover:bg-[#E82D86]/10
                transition-all duration-300
                cursor-pointer
              "
            >
              Contact Us
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
