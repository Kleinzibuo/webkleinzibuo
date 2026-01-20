'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Building,
  Calendar as CalendarIcon,
  Shield,
  ChevronDown,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

export default function DemoRequestPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    // Contact
    fullName: '',
    role: 'PRINCIPAL', // default selected
    email: '',
    phone: '',
    // School
    schoolName: '',
    schoolType: 'Crèche', // default selected
    numberOfStudents: '1-20', // default selected
    // Schedule
    biggestChallenge: 'administration', // default selected
    preferredDate: undefined as Date | undefined,
    // Address (nested) - defaults
    address: {
      line1: '',
      line2: '',
      suburb: 'Sandton', // default selected
      city: '',
      province: 'Gauteng', // default selected
      postal_code: '',
      country: 'South Africa',
    },
  });

  // Support nested updates, e.g. updateFormData('address.line1', '123 main')
  const updateFormData = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value,
        },
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation: defaults satisfy selects so validations are unchanged
  const isStep1Valid = Boolean(formData.fullName && formData.email && formData.phone && formData.role);
  const isStep2Valid =
    Boolean(formData.schoolName && formData.schoolType && formData.numberOfStudents) &&
    Boolean(
      formData.address.line1 &&
        formData.address.suburb &&
        formData.address.city &&
        formData.address.province &&
        formData.address.postal_code
    );
  const isStep3Valid = Boolean(formData.biggestChallenge && formData.preferredDate);

  // GraphQL endpoint + auth placeholders
  const GRAPHQL_URL = 'https://1xachh4l5m.execute-api.eu-west-2.amazonaws.com/prod/graphql';
  const API_KEY = ''; // set if required (x-api-key)
  const BEARER_TOKEN = ''; // set if required (Authorization: Bearer ...)

  const MUTATION = `
  mutation WebOperation($requestDemoInput: LeadInput!) {
    WebOperation(requestDemoInput: $requestDemoInput) {
      success
      message
      id
    }
  }
`;

  // Static lists used in selects (adjust as needed)
  const provinceOptions = [
    'Gauteng',
    'Western Cape',
    'KwaZulu-Natal',
    'Eastern Cape',
    'Free State',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
  ];
  const suburbOptions = ['Sandton', 'Rosebank', 'Fourways', 'Randburg', 'Centurion'];
  
const handleSubmit = async () => {
  try {
    if (!isStep3Valid) {
      alert('Please complete all required fields.');
      return;
    }

    const requestDemoInput = {
      challenge: formData.biggestChallenge || 'Other',
      preferred_date: formData.preferredDate ? format(formData.preferredDate, 'yyyy-MM-dd') : undefined,
      school: {
        name: formData.schoolName || '',
        no_of_pupils: formData.numberOfStudents || '',
        description: formData.schoolType || '',
      },
      contact_person: {
        full_name: formData.fullName || '',
        role: formData.role || '',
        work_email: formData.email || '',
        phone: formData.phone || '',
      },
      address: {
        line1: formData.address.line1 || '',
        line2: formData.address.line2 || '',
        suburb: formData.address.suburb || '',
        city: formData.address.city || '',
        province: formData.address.province || '',
        postal_code: formData.address.postal_code || '',
        country: formData.address.country || '',
      },
    };

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Attach auth if provided
    if (BEARER_TOKEN) headers['Authorization'] = `Bearer ${BEARER_TOKEN}`;
    if (API_KEY) headers['x-api-key'] = API_KEY;

    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: MUTATION,
        variables: { requestDemoInput },
      }),
    });

    const json = await res.json();

    // Helpful debug logs if something fails
    if (!res.ok || json.errors) {
      console.error('GraphQL error response', { status: res.status, body: json });
      const errMsg = json.errors?.[0]?.message || `HTTP ${res.status}`;
      alert(`Submission failed: ${errMsg}`);
      return;
    }

    const result = json.data?.WebOperation;
    // The backend may return data in different shape. Try both:
    const payload = result ?? json.data?.WebOperation ?? json.data?.requestDemo ?? json.data;
    if (payload?.success) {
      router.push('/onboarding-success');
      return;
    }

    // Fallback: show message or raw response
    alert(payload?.message || 'Submission succeeded (no success flag returned).');
  } catch (err) {
    console.error('Network/parsing error', err);
    alert('Network error submitting the form. Check console for details.');
  }
};

  // helper: common trigger class
  const selectTriggerClass =
    'mt-2 pr-10 relative border rounded-md px-3 py-2 flex items-center bg-white text-left focus:outline-none focus:ring-1 focus:ring-[#E82D86]';

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
          <div className="inline-block px-4 py-2 bg-[#FFF0F7] rounded-full border border-[#E82D86]/20 mb-4">
            <span className="text-[#E82D86]">✨ Schedule Your Demo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">See KleinZibuo in Action</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized, no-obligation demo with our team. We'll show you how KleinZibuo can solve your specific
            challenges and help your school thrive.
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
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
                    <div
                      className="h-full bg-[#E82D86] transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 1 ? 'bg-[#E82D86] text-white shadow-lg' : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > 1 ? <CheckCircle size={20} /> : '1'}
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">Your Info</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 2 ? 'bg-[#E82D86] text-white shadow-lg' : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > 2 ? <CheckCircle size={20} /> : '2'}
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">Your School</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= 3 ? 'bg-[#E82D86] text-white shadow-lg' : 'bg-gray-200 text-gray-400'
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
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Tell Us About You</h2>
                      <p className="text-gray-600">We'll use this to personalize your demo</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="e.g., Sarah Johnson"
                          value={formData.fullName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData('fullName', e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="role">Role *</Label>
                        <Select value={formData.role} onValueChange={(value: string) => updateFormData('role', value)}>
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Select role" />
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PRINCIPAL">PRINCIPAL</SelectItem>
                            <SelectItem value="MANAGER">MANAGER</SelectItem>
                            <SelectItem value="ADMIN">ADMIN</SelectItem>
                            <SelectItem value="TEACHER">TEACHER</SelectItem>
                            <SelectItem value="OTHER">OTHER</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g., sarah@sunshineacademy.com"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData('email', e.target.value)}
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData('phone', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Your School + Address */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0083AD] to-[#00A3D6] rounded-xl flex items-center justify-center">
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData('schoolName', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="numberOfStudents">Number of Pupils *</Label>
                        <Select
                          value={formData.numberOfStudents}
                          onValueChange={(value: string) => updateFormData('numberOfStudents', value)}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Select number of pupils" />
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-20">1-20 students</SelectItem>
                            <SelectItem value="21-50">21-50 students</SelectItem>
                            <SelectItem value="51-100">51-100 students</SelectItem>
                            <SelectItem value="100+">100+ students</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="schoolType">School Type *</Label>
                        <Select value={formData.schoolType} onValueChange={(value: string) => updateFormData('schoolType', value)}>
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Select school type" />
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Crèche">Crèche</SelectItem>
                            <SelectItem value="Private">Private Preschool</SelectItem>
                            <SelectItem value="Public">Public Preschool</SelectItem>
                            <SelectItem value="Montessori">Montessori</SelectItem>
                            <SelectItem value="Daycare">Daycare Center</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Address group */}
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Address</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="line1">Address Line 1 *</Label>
                          <Input
                            id="line1"
                            placeholder="Street address"
                            value={formData.address.line1}
                            onChange={(e) => updateFormData('address.line1', e.target.value)}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="line2">Address Line 2</Label>
                          <Input
                            id="line2"
                            placeholder="Apartment, suite, etc."
                            value={formData.address.line2}
                            onChange={(e) => updateFormData('address.line2', e.target.value)}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="province">Province *</Label>
                          <Select
                            value={formData.address.province}
                            onValueChange={(value: string) => updateFormData('address.province', value)}
                          >
                            <SelectTrigger className={selectTriggerClass}>
                              <SelectValue placeholder="Select a province" />
                              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinceOptions.map((p) => (
                                <SelectItem key={p} value={p}>
                                  {p}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="suburb">Suburb *</Label>
                          <Select
                            value={formData.address.suburb}
                            onValueChange={(value: string) => updateFormData('address.suburb', value)}
                          >
                            <SelectTrigger className={selectTriggerClass}>
                              <SelectValue placeholder="Select a suburb" />
                              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </SelectTrigger>
                            <SelectContent>
                              {suburbOptions.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            placeholder="e.g., Johannesburg"
                            value={formData.address.city}
                            onChange={(e) => updateFormData('address.city', e.target.value)}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="postal_code">Postal Code *</Label>
                          <Input
                            id="postal_code"
                            placeholder="e.g., 2001"
                            value={formData.address.postal_code}
                            onChange={(e) => updateFormData('address.postal_code', e.target.value)}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input id="country" value={formData.address.country} readOnly className="mt-2 bg-gray-50" />
                        </div>
                      </div>
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
                      <Label htmlFor="biggestChallenge">What challenges are you facing? *</Label>
                      <div className="mt-2">
                        <Select
                          value={formData.biggestChallenge}
                          onValueChange={(v: string) => updateFormData('biggestChallenge', v)}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Select challenge" />
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
                    </div>

                    <div>
                      <Label>Preferred Demo Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="w-full mt-2 flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left">
                            <span className={formData.preferredDate ? 'text-gray-900' : 'text-gray-500'}>
                              {formData.preferredDate ? format(formData.preferredDate, 'PPP') : 'yyyy / mm / dd'}
                            </span>
                            <CalendarIcon size={16} className="text-gray-400" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.preferredDate}
                            onSelect={(date: Date) => updateFormData('preferredDate', date)}
                            disabled={(date: Date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] rounded-xl p-4 flex items-start gap-3">
                    <Shield size={20} className="text-[#4A90E2] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      <strong>Privacy Note:</strong> We respect your privacy. Your information is safe with us and will only be
                      used to contact you about your demo.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep((s) => s - 1)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep((s) => s + 1)}
                    disabled={(currentStep === 1 && !isStep1Valid) || (currentStep === 2 && !isStep2Valid)}
                    className="flex-1 px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F75] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    Continue
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStep3Valid}
                    className="flex-1 px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F75] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
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
              <div className="bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-3xl shadow-lg p-8 text-white">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
                <p className="mb-6 italic">
                  "The demo was a game-changer. We could see exactly how KleinZibuo would transform our operations. We were
                  onboarded in a week and haven't looked back!"
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
