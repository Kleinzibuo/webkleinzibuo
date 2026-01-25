"use client";

import { motion } from "framer-motion";
import { Building, ChevronDown } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";
import type { DemoRequestFormValues } from "../types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddressAutocomplete from "@/components/forms/AddressAutocomplete/AddressAutocomplete";

const selectTriggerClass =
  "mt-2 pr-10 relative border rounded-md px-3 py-2 flex items-center bg-white text-left focus:outline-none focus:ring-1 focus:ring-[#E82D86]";

export default function Step2School() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<DemoRequestFormValues>();

  return (
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
          <h2 className="text-2xl font-bold text-gray-900">
            About Your School
          </h2>
          <p className="text-gray-600">Help us understand your needs</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="schoolName">School Name *</Label>
          <Input id="schoolName" className="mt-2" {...register("schoolName")} />
          {errors.schoolName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.schoolName.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Number of Pupils *</Label>
            <Controller
              control={control}
              name="numberOfStudents"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className={selectTriggerClass}>
                    <SelectValue placeholder="Select number of pupils" />
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1-20 students</SelectItem>
                    <SelectItem value="21-50">21-50 students</SelectItem>
                    <SelectItem value="51-100">51-100 students</SelectItem>
                    <SelectItem value="100+">100+ students</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.numberOfStudents && (
              <p className="text-sm text-red-600 mt-1">
                {errors.numberOfStudents.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>School Type *</Label>
            <Controller
              control={control}
              name="schoolType"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className={selectTriggerClass}>
                    <SelectValue placeholder="Select school type" />
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
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
              )}
            />
            {errors.schoolType && (
              <p className="text-sm text-red-600 mt-1">
                {errors.schoolType.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <AddressAutocomplete
          required
          title="Address"
          namePrefix="address"
        />
      </div>
    </motion.div>
  );
}
