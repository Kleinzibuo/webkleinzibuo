import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HomePageProps) {
  return (
    <section className="
      min-h-screen 
      flex items-center 
      bg-gradient-to-br 
      from-[#E82D86] 
      to-[#0083AD]
      relative
    ">
      {/* Optional soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Smarter Preschool Management,<br />
              <span className="text-yellow-200">Happier Parent Connections</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Klein Zibuo builds beautiful websites and powerful communication tools 
              that help South African preschools thrive. Strengthen relationships and 
              keep parents connected—effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('features')}
                className="
                  px-8 py-4 
                  bg-white text-[#E82D86] 
                  rounded-full font-semibold
                  hover:bg-gray-100
                  transition-all duration-300
                  shadow-xl hover:shadow-2xl 
                  transform hover:-translate-y-1
                  cursor-pointer
                "
              >
                See Our Solutions
              </button>

              <button
                onClick={() => onNavigate('clients')}
                className="
                  px-8 py-4
                  bg-transparent border-2 border-white
                  text-white rounded-full font-semibold
                  hover:bg-white hover:text-[#E82D86]
                  transition-all duration-300
                  cursor-pointer
                "
              >
                View Our Client Schools
              </button>
            </div>
          </motion.div>

          {/* Right Column - Placeholder / Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* inner area shows kids.jpg slightly blurred as contextual scene */}
                <div className="h-[420px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/1000527542.jpg')" }} aria-hidden />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
