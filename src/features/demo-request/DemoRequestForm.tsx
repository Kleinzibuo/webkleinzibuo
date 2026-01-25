"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { ApolloProvider, gql, useMutation } from "@apollo/client";
import { FormProvider, useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { demoRequestSchema } from "./schema";
import type { DemoRequestFormValues } from "./types";
import Step1YourInfo from "./steps/Step1YourInfo";
import Step2School from "./steps/Step2School";
import Step3Schedule from "./steps/Step3Schedule";

import { REQUEST_DEMO_MUTATION } from "@/gql/mutations/requestDemo";
import { createApolloClient } from "@/lib/apollo/client";
import { EUserRole } from "@/enums";

const client = createApolloClient();

function DemoRequestFormInner() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<DemoRequestFormValues>({
    mode: "onTouched",
    resolver: zodResolver(
      demoRequestSchema,
    ) as unknown as Resolver<DemoRequestFormValues>,
    defaultValues: {
      fullName: "",
      role: EUserRole.PRINCIPAL,
      email: "",
      phone: "",
      schoolName: "",
      schoolType: "Crèche",
      numberOfStudents: "1-20",
      biggestChallenge: [],
      preferredDate: null,
      address: {
        line1: "",
        line2: "",
        suburb: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
      },
    },
  });

  type RequestDemoResponse = {
    WebOperation?: {
      success: boolean;
      message?: string;
    };
  };

  const [submitMutation, { loading }] = useMutation<
    RequestDemoResponse,
    { requestDemoInput: any }
  >(gql(REQUEST_DEMO_MUTATION));

  const stepFields = useMemo(() => {
    if (currentStep === 1)
      return ["fullName", "role", "email", "phone"] as const;
    if (currentStep === 2)
      return [
        "schoolName",
        "schoolType",
        "numberOfStudents",
        "address.line1",
        "address.suburb",
        "address.city",
        "address.province",
        "address.postal_code",
      ] as const;
    return ["biggestChallenge", "preferredDate"] as const;
  }, [currentStep]);

  const onNext = async () => {
    const ok = await methods.trigger(stepFields as any);
    if (!ok) return;
    setCurrentStep((s) => Math.min(3, s + 1));
  };

  const onBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      const requestDemoInput = {
        challenges: values.biggestChallenge,
        preferred_date: values.preferredDate
          ? format(values.preferredDate, "yyyy-MM-dd")
          : undefined,
        school: {
          name: values.schoolName,
          no_of_pupils: values.numberOfStudents,
          description: values.schoolType,
        },
        contact_person: {
          full_name: values.fullName,
          role: values.role,
          work_email: values.email,
          phone: values.phone,
        },
        address: {
          line1: values.address.line1,
          line2: values.address.line2 || "",
          suburb: values.address.suburb,
          city: values.address.city,
          province: values.address.province,
          postal_code: values.address.postal_code,
          country: values.address.country,
        },
      };

      await submitMutation({
        variables: { requestDemoInput },
      });

      router.push("/onboarding-success");
    } catch (error: any) {
      alert(error?.message || "An error occurred. Please try again.");
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          {/* Progress Steps (unchanged) */}
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
                    currentStep >= 1
                      ? "bg-[#E82D86] text-white shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {currentStep > 1 ? <CheckCircle size={20} /> : "1"}
                </div>
                <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">
                  Your Info
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= 2
                      ? "bg-[#E82D86] text-white shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {currentStep > 2 ? <CheckCircle size={20} /> : "2"}
                </div>
                <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">
                  Your School
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= 3
                      ? "bg-[#E82D86] text-white shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  3
                </div>
                <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">
                  Schedule
                </span>
              </div>
            </div>
          </div>

          {/* Steps */}
          {currentStep === 1 && <Step1YourInfo />}
          {currentStep === 2 && <Step2School />}
          {currentStep === 3 && <Step3Schedule />}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={onBack}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={onNext}
                className="flex-1 px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F75] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continue
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSubmit}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F75] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
              >
                {loading ? "Submitting..." : "Schedule My Demo"}
              </button>
            )}
          </div>
        </motion.div>

        {/* Right Column (unchanged - keep your existing JSX here) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Paste your existing right-column cards exactly as they are */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Trusted & Secure
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-[#4A90E2]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  GDPR Compliant
                </p>
                <p className="text-gray-600 text-xs">Your data is protected</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </FormProvider>
  );
}

export default function DemoRequestForm() {
  return (
    <ApolloProvider client={client}>
      <DemoRequestFormInner />
    </ApolloProvider>
  );
}
