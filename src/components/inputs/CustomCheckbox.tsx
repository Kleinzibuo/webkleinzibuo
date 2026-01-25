"use client";

import React from "react";
import { Check } from "lucide-react";

type Props = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  error?: string;
  className?: string;
};

export default function CustomCheckbox({
  id,
  checked,
  onChange,
  label,
  error,
  className = "",
}: Readonly<Props>) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label
        htmlFor={id}
        className="flex items-start gap-3 cursor-pointer select-none"
      >
        {/* Keep a real checkbox for accessibility, but visually hide it */}
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />

        {/* Custom box */}
        <span
          aria-hidden="true"
          className={[
            "mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border transition-all",
            checked
              ? "bg-[#E82D86] border-[#E82D86]"
              : "bg-white border-gray-300",
            "ring-offset-2",
            // focus styles (when label clicked, browser focuses input; we can still style using group if needed)
          ].join(" ")}
        >
          <Check
            className={`h-4 w-4 text-white transition-opacity ${checked ? "opacity-100" : "opacity-0"}`}
          />
        </span>

        {/* Text */}
        <span className="text-sm text-gray-700 leading-relaxed">{label}</span>
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
