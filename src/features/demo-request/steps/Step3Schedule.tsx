"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Shield } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";
import type { DemoRequestFormValues } from "../types";
import { format } from "date-fns";

import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChallengesMultiSelect from "@/components/inputs/ChallengesMultiSelect";
import CustomCheckbox from "@/components/inputs/CustomCheckbox";

const challengeOptions = [
  { value: "Administration & Paperwork", label: "Administration & Paperwork" },
  { value: "Parent Communication", label: "Parent Communication" },
  { value: "Billing & Payments", label: "Billing & Payments" },
  { value: "Compliance & Reporting", label: "Compliance & Reporting" },
  { value: "Staff Management", label: "Staff Management" },
  { value: "Other", label: "Other" },
];

const selectTriggerClass =
  "mt-2 pr-10 relative border rounded-md px-3 py-2 flex items-center bg-white text-left focus:outline-none focus:ring-1 focus:ring-[#E82D86]";

export default function Step3Schedule() {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<DemoRequestFormValues>();

  const preferredDate = watch("preferredDate");

  return (
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
          <Label>What challenges are you facing? *</Label>
          <Controller
            control={control}
            name="biggestChallenge"
            render={({ field }) => (
              <ChallengesMultiSelect
                value={field.value || []}
                onChange={field.onChange}
                options={challengeOptions}
                placeholder="Select challenges"
              />
            )}
          />
          {errors.biggestChallenge && (
            <p className="text-sm text-red-600 mt-1">
              {errors.biggestChallenge.message as string}
            </p>
          )}
        </div>

        <div>
          <Label>Preferred Demo Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full mt-2 flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-left"
              >
                <span
                  className={preferredDate ? "text-gray-900" : "text-gray-500"}
                >
                  {preferredDate
                    ? format(preferredDate, "PPP")
                    : "yyyy / mm / dd"}
                </span>
                <CalendarIcon size={16} className="text-gray-400" />
              </button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={preferredDate ?? undefined}
                onSelect={(date?: Date) => {
                  if (!date) return;
                  setValue("preferredDate", date, { shouldValidate: true });
                }}
                disabled={(date: Date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {errors.preferredDate && (
            <p className="text-sm text-red-600 mt-1">
              {errors.preferredDate.message as string}
            </p>
          )}
        </div>

        <div className="space-y-4 pt-2">
          <Controller
            control={control}
            name="confirmAccuracy"
            render={({ field }) => (
              <CustomCheckbox
                id="confirmAccuracy"
                checked={!!field.value}
                onChange={field.onChange}
                error={errors.confirmAccuracy?.message as string | undefined}
                label={
                  <>
                    I confirm that the information I’ve provided is accurate and
                    up to date.
                  </>
                }
              />
            )}
          />

          <Controller
            control={control}
            name="acceptTerms"
            render={({ field }) => (
              <CustomCheckbox
                id="acceptTerms"
                checked={!!field.value}
                onChange={field.onChange}
                error={errors.acceptTerms?.message as string | undefined}
                label={
                  <>
                    By submitting this form, I agree to the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E82D86] underline underline-offset-2 hover:text-[#D01F75]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Terms & Conditions
                    </a>{" "}
                    and consent to being contacted about my demo request.
                  </>
                }
              />
            )}
          />
        </div>
      </div>

      <div className="bg-[#F8F9FA] rounded-xl p-4 flex items-start gap-3">
        <Shield size={20} className="text-[#4A90E2] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600">
          <strong>Privacy Note:</strong> We respect your privacy. Your
          information is safe with us and will only be used to contact you about
          your demo.
        </p>
      </div>
    </motion.div>
  );
}
