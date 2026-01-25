"use client";

import Select from "react-dropdown-select";
import { ChevronDown, X } from "lucide-react";

export type ChallengeOption = { value: string; label: string };

type Props = {
  value: string[]; // selected values
  onChange: (next: string[]) => void;
  options: ChallengeOption[];
  placeholder?: string;
};

export default function ChallengesMultiSelect({
  value,
  onChange,
  options,
  placeholder = "Select challenges",
}: Readonly<Props>) {
  const selectedObjects = options.filter((o) => value.includes(o.value));

  return (
    <div
      className="
        mt-2 w-full rounded-md border bg-white px-2 py-1
        focus-within:ring-1 focus-within:ring-[#E82D86]
      "
    >
      <Select
        options={options}
        values={selectedObjects}
        onChange={(vals) => onChange(vals.map((v) => v.value))}
        multi
        searchable
        keepSelectedInList
        closeOnSelect={false}
        dropdownHandle={false}
        placeholder={placeholder}
        searchBy="label"
        style={{
          border: "none",
          boxShadow: "none",
          minHeight: "40px",
          padding: "0px",
        }}
        contentRenderer={({ props: p, state, methods }) => {
          const hasValues = state.values.length > 0;

          return (
            <div className="flex min-h-[40px] items-center gap-2 flex-wrap w-full">
              {/* Selected chips */}
              {state.values.map((item: ChallengeOption) => (
                <span
                  key={item.value}
                  className="inline-flex items-center gap-1 rounded-full
                             bg-[#FFF0F7] text-[#E82D86] border border-[#E82D86]/20
                             px-3 py-1 text-sm"
                >
                  {item.label}
                  <button
                    type="button"
                    className="ml-1"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onChange(value.filter((v) => v !== item.value));
                    }}
                    aria-label={`Remove ${item.label}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}

              {/* Placeholder / Search input */}
              <div className="flex-1 min-w-[160px] flex items-center">
                {!hasValues && (
                  <span className="text-gray-500 text-sm mr-2">
                    {placeholder}
                  </span>
                )}

                <input
                  className="w-full outline-none text-sm bg-transparent"
                  value={state.search}
                  onChange={(e) => methods.setSearch(e.target.value as any)}
                  onFocus={() => methods.dropDown("open")}
                  placeholder={hasValues ? "" : ""}
                />
              </div>

              {/* Chevron */}
              <button
                type="button"
                className="ml-auto px-2"
                onClick={(e) => {
                  e.preventDefault();
                  methods.dropDown("toggle");
                }}
                aria-label="Toggle dropdown"
              >
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          );
        }}
        itemRenderer={({ item, methods, state }) => {
          const selected = state.values.some(
            (v: ChallengeOption) => v.value === item.value,
          );

          return (
            <div
              className={`px-3 py-2 cursor-pointer flex items-center justify-between
                ${selected ? "bg-[#FFF0F7]" : "hover:bg-gray-50"}
              `}
              onClick={() => methods.addItem(item)}
            >
              <span className="text-sm text-gray-900">{item.label}</span>
              {selected && (
                <span className="text-xs text-[#E82D86] font-semibold">
                  Selected
                </span>
              )}
            </div>
          );
        }}
        dropdownRenderer={({ props: p, state, methods }) => (
          <div className="border-t bg-white rounded-b-md overflow-hidden">
            <div className="max-h-64 overflow-auto">
              {p.options.map((opt: ChallengeOption) => (
                <div key={opt.value}>
                  {
                    p.itemRenderer?.({
                      item: opt,
                      itemIndex: 0,
                      props: p,
                      state,
                      methods,
                    }) as any
                  }
                </div>
              ))}
            </div>

            <div className="p-2 border-t flex justify-end gap-2">
              <button
                type="button"
                className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  methods.clearAll();
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="text-sm px-3 py-2 rounded-md bg-[#E82D86] text-white hover:bg-[#D01F75]"
                onClick={(e) => {
                  e.preventDefault();
                  methods.dropDown("close");
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}
