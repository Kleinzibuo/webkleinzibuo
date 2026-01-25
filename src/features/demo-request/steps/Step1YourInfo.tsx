"use client";

import { motion } from "framer-motion";
import { User, ChevronDown } from "lucide-react";
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
import { EUserRole } from "@/enums";

const selectTriggerClass =
  "mt-2 pr-10 relative border rounded-md px-3 py-2 flex items-center bg-white text-left focus:outline-none focus:ring-1 focus:ring-[#E82D86]";

export default function Step1YourInfo() {
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
        <div className="w-12 h-12 bg-gradient-to-br from-[#E82D86] to-[#F047A0] rounded-xl flex items-center justify-center">
          <User size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Tell Us About You
          </h2>
          <p className="text-gray-600">
            We'll use this to personalize your demo
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="e.g., Sarah Johnson"
              className="mt-2"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="role">Role *</Label>
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className={selectTriggerClass}>
                    <SelectValue placeholder="Select role" />
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={EUserRole.PRINCIPAL}>
                      Principal
                    </SelectItem>
                    <SelectItem value={EUserRole.MANAGER}>Manager</SelectItem>
                    <SelectItem value={EUserRole.ADMIN}>Admin</SelectItem>
                    <SelectItem value={EUserRole.TEACHER}>Teacher</SelectItem>
                    <SelectItem value={EUserRole.OTHER}>Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.role && (
              <p className="text-sm text-red-600 mt-1">
                {errors.role.message as string}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Work Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g., sarah@sunshineacademy.com"
            className="mt-2"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g. 0831234567"
            className="mt-2"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
