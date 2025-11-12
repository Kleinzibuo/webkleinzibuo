import { motion } from 'motion/react';
import { CheckCircle, Play, Users, Lightbulb } from 'lucide-react';

interface OnboardingSuccessPageProps {
  onNavigate: (page: string) => void;
}

export function OnboardingSuccessPage({ onNavigate }: OnboardingSuccessPageProps) {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#F8F9FA] flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-[#7DCE82] to-[#9DD9A1] rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle size={64} className="text-white" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-6 mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              You're All Set! 🎉
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700">
              Thank You for Your Request
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A member of our onboarding team will contact you within <strong className="text-[#FF6B35]">24 hours</strong> to confirm your demo time. We're excited to show you how KleinZibuo can transform your preschool!
            </p>
          </motion.div>

          {/* Preparation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              In the Meantime, Here's What You Can Do to Prepare
            </h3>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5F] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb size={24} className="text-[#FF6B35]" />
                    <h4 className="text-xl font-semibold text-gray-900">Think About Your Challenges</h4>
                  </div>
                  <p className="text-gray-600">
                    What are the top 3 things you'd like to solve with KleinZibuo? Jot them down so we can address them specifically during your demo.
                  </p>
                  <div className="mt-4 bg-[#F8F9FA] rounded-xl p-4">
                    <p className="text-sm text-gray-600 italic">
                      Examples: Reducing administrative time, improving parent communication, streamlining billing processes
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#6BA8E8] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={24} className="text-[#4A90E2]" />
                    <h4 className="text-xl font-semibold text-gray-900">Gather Your Team</h4>
                  </div>
                  <p className="text-gray-600">
                    Invite any other decision-makers to the demo. The more perspectives we have, the better we can customize KleinZibuo to your needs.
                  </p>
                  <div className="mt-4 bg-[#F8F9FA] rounded-xl p-4">
                    <p className="text-sm text-gray-600 italic">
                      Suggested attendees: Assistant Principal, Lead Teacher, Administrative Staff
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7DCE82] to-[#9DD9A1] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Play size={24} className="text-[#7DCE82]" />
                    <h4 className="text-xl font-semibold text-gray-900">See It Live</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Watch our 2-minute overview video to get a sneak peek of what KleinZibuo can do for your preschool.
                  </p>
                  <button className="px-6 py-3 bg-[#7DCE82] text-white rounded-full hover:bg-[#6DBE72] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                    <Play size={20} />
                    Watch Overview Video
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {/* Resource Card 1 */}
            <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-2xl p-6 border border-[#FF6B35]/20">
              <h4 className="font-semibold text-gray-900 mb-2">Explore Our Features</h4>
              <p className="text-gray-600 text-sm mb-4">
                Learn about all the powerful tools KleinZibuo offers to transform your preschool operations.
              </p>
              <button
                onClick={() => onNavigate('features')}
                className="text-[#FF6B35] hover:text-[#FF5520] transition-colors inline-flex items-center gap-2 group"
              >
                View Features
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-gradient-to-br from-[#4A90E2]/10 to-[#4A90E2]/5 rounded-2xl p-6 border border-[#4A90E2]/20">
              <h4 className="font-semibold text-gray-900 mb-2">Read Success Stories</h4>
              <p className="text-gray-600 text-sm mb-4">
                See how other preschools have transformed their operations with KleinZibuo.
              </p>
              <button
                onClick={() => window.open('https://kleinzibuo.com/testimonials', '_blank')}
                className="text-[#4A90E2] hover:text-[#3A7BC2] transition-colors inline-flex items-center gap-2 group"
              >
                Read Testimonials
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center space-y-4"
          >
            <div className="bg-gradient-to-r from-[#FF6B35] via-[#4A90E2] to-[#7DCE82] p-[2px] rounded-2xl inline-block">
              <div className="bg-white rounded-2xl px-8 py-6">
                <p className="text-gray-900 mb-2">
                  <strong>We're excited to partner with you</strong>
                </p>
                <p className="text-gray-600">and help your preschool blossom! 🌸</p>
                <p className="text-gray-900 mt-4">— The KleinZibuo Team</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('home')}
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all"
              >
                Return to Homepage
              </button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 text-center text-gray-600"
          >
            <p className="mb-2">Questions in the meantime?</p>
            <a href="mailto:info@kleinzibuo.co.za" className="text-[#FF6B35] hover:text-[#FF5520] transition-colors">
              info@kleinzibuo.co.za
            </a>
            <span className="mx-2">•</span>
            <a href="tel:0717916078" className="text-[#FF6B35] hover:text-[#FF5520] transition-colors">
              071 791 6078
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}