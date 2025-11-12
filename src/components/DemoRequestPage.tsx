import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ArrowLeft, User, Building, Calendar as CalendarIcon, Shield } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';

interface DemoRequestPageProps {
  onNavigate: (page: string) => void;
}

export function DemoRequestPage({ onNavigate }: DemoRequestPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    schoolName: '',
    schoolType: '',
    numberOfStudents: '',
    biggestChallenge: '',
    preferredDate: undefined as Date | undefined,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStep1Valid = formData.fullName && formData.email && formData.phone;
  const isStep2Valid = formData.schoolName && formData.schoolType && formData.numberOfStudents;
  const isStep3Valid = formData.biggestChallenge && formData.preferredDate;

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onNavigate('success');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#FFF4F0] rounded-full border border-[#FF6B35]/20 mb-4">
            <span className="text-[#FF6B35]">✨ Schedule Your Demo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            See KleinZibuo in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized, no-obligation demo with our team. We'll show you how KleinZibuo can solve your specific challenges and help your school thrive.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-between relative">
                  {/* Progress Line */}
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
                    <div
                      className="h-full bg-[#FF6B35] transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                    />
                  </div>

                  {/* Step 1 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 1
                          ? 'bg-[#FF6B35] text-white shadow-lg'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > 1 ? <CheckCircle size={20} /> : '1'}
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">Your Info</span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 2
                          ? 'bg-[#FF6B35] text-white shadow-lg'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > 2 ? <CheckCircle size={20} /> : '2'}
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">Your School</span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 3
                          ? 'bg-[#FF6B35] text-white shadow-lg'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      3
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">Schedule</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Your Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5F] rounded-xl flex items-center justify-center">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Tell Us About You</h2>
                      <p className="text-gray-600">We'll use this to personalize your demo</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="e.g., Sarah Johnson"
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g., sarah@sunshineacademy.com"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g., (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Your School */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#6BA8E8] rounded-xl flex items-center justify-center">
                      <Building size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">About Your School</h2>
                      <p className="text-gray-600">Help us understand your needs</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="schoolName">School Name *</Label>
                      <Input
                        id="schoolName"
                        placeholder="e.g., Sunshine Academy"
                        value={formData.schoolName}
                        onChange={(e) => updateFormData('schoolName', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="schoolType">School Type *</Label>
                      <Select value={formData.schoolType} onValueChange={(value) => updateFormData('schoolType', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select school type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Preschool</SelectItem>
                          <SelectItem value="public">Public Preschool</SelectItem>
                          <SelectItem value="montessori">Montessori</SelectItem>
                          <SelectItem value="daycare">Daycare Center</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="numberOfStudents">Number of Students *</Label>
                      <Select value={formData.numberOfStudents} onValueChange={(value) => updateFormData('numberOfStudents', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-20">1-20 students</SelectItem>
                          <SelectItem value="21-50">21-50 students</SelectItem>
                          <SelectItem value="51-100">51-100 students</SelectItem>
                          <SelectItem value="100+">100+ students</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Schedule */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7DCE82] to-[#9DD9A1] rounded-xl flex items-center justify-center">
                      <CalendarIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Pick Your Time</h2>
                      <p className="text-gray-600">When works best for you?</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="biggestChallenge">What's your biggest challenge? *</Label>
                      <Select value={formData.biggestChallenge} onValueChange={(value) => updateFormData('biggestChallenge', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a challenge" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administration">Administration & Paperwork</SelectItem>
                          <SelectItem value="communication">Parent Communication</SelectItem>
                          <SelectItem value="billing">Billing & Payments</SelectItem>
                          <SelectItem value="reporting">Compliance & Reporting</SelectItem>
                          <SelectItem value="staffing">Staff Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="w-full mt-2 flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left">
                            <span className={formData.preferredDate ? 'text-gray-900' : 'text-gray-500'}>
                              {formData.preferredDate ? format(formData.preferredDate, 'PPP') : 'Pick a date'}
                            </span>
                            <CalendarIcon size={16} className="text-gray-400" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.preferredDate}
                            onSelect={(date) => updateFormData('preferredDate', date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] rounded-xl p-4 flex items-start gap-3">
                    <Shield size={20} className="text-[#4A90E2] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      <strong>Privacy Note:</strong> We respect your privacy. Your information is safe with us and will only be used to contact you about your demo.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      (currentStep === 1 && !isStep1Valid) ||
                      (currentStep === 2 && !isStep2Valid)
                    }
                    className="flex-1 px-6 py-3 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF5520] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    Continue
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStep3Valid}
                    className="flex-1 px-6 py-3 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF5520] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    Schedule My Demo
                  </button>
                )}
              </div>
            </motion.div>

            {/* Right Column - Reassurance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* What to Expect */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#7DCE82] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">A 30-minute, one-on-one video call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#7DCE82] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">A live walkthrough of the platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#7DCE82] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">Answers to all your specific questions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#7DCE82] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">Customized pricing for your school</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C5F] rounded-3xl shadow-lg p-8 text-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The demo was a game-changer. We could see exactly how KleinZibuo would transform our operations. We were onboarded in a week and haven't looked back!"
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-semibold">Maria G.</p>
                  <p className="text-white/80 text-sm">Principal, Sunny Skies Preschool</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Trusted & Secure</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center">
                      <Shield size={20} className="text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">GDPR Compliant</p>
                      <p className="text-gray-600 text-xs">Your data is protected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7DCE82]/10 rounded-lg flex items-center justify-center">
                      <CheckCircle size={20} className="text-[#7DCE82]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">500+ Schools</p>
                      <p className="text-gray-600 text-xs">Join our community</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
