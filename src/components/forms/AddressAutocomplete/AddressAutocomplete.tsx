"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useFormContext } from "react-hook-form";
import { ChevronDown, Loader2 } from "lucide-react";

import { SEARCH_LOCATIONS } from "@/gql/queries/locations";
import type { LocationItem, AddressAutocompleteProps } from "./types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const selectTriggerClass =
  "mt-2 pr-10 relative border rounded-md px-3 py-2 flex items-center bg-white text-left focus:outline-none focus:ring-1 focus:ring-[#E82D86]";

type SearchResponse = { locations: LocationItem[] };

function useDebouncedValue<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function AddressAutocomplete({
  namePrefix = "address",
  required = true,
  title = "Address",
}: Readonly<AddressAutocompleteProps>) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
    clearErrors,
  } = useFormContext<any>();

  const line1Name = `${namePrefix}.line1`;
  const line2Name = `${namePrefix}.line2`;
  const suburbName = `${namePrefix}.suburb`;
  const cityName = `${namePrefix}.city`;
  const provinceName = `${namePrefix}.province`;
  const postalName = `${namePrefix}.postal_code`;
  const countryName = `${namePrefix}.country`;

  const suburbValue: string = watch(suburbName) || "";

  // local search input (so user can type without immediately changing "selected suburb" meaning)
  const [searchText, setSearchText] = useState(suburbValue);
  const debouncedTerm = useDebouncedValue(searchText, 300);

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [fetchLocations, { data, loading }] = useLazyQuery<SearchResponse>(
    SEARCH_LOCATIONS,
    { fetchPolicy: "no-cache" },
  );

  const results = data?.locations ?? [];

  // Keep local input aligned when RHF suburb changes (e.g. when selecting)
  useEffect(() => {
    setSearchText(suburbValue);
  }, [suburbValue]);

  // Search when user types
  useEffect(() => {
    const term = debouncedTerm?.trim();
    if (!term || term.length < 2) return;
    fetchLocations({ variables: { term, searchBy: "suburb" } });
  }, [debouncedTerm, fetchLocations]);

  // Close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const err: any = errors;

  const line1Error = err?.[namePrefix]?.line1?.message;
  const suburbError = err?.[namePrefix]?.suburb?.message;
  const cityError = err?.[namePrefix]?.city?.message;
  const provinceError = err?.[namePrefix]?.province?.message;
  const postalError = err?.[namePrefix]?.postal_code?.message;
  const countryError = err?.[namePrefix]?.country?.message;

  const onSelectLocation = async (loc: LocationItem) => {
    // set suburb to selected suburb (or name)
    setValue(suburbName, loc.suburb, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(cityName, loc.city, { shouldValidate: true, shouldDirty: true });
    setValue(provinceName, loc.province, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(postalName, loc.postal_code, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue(countryName, loc.country || "South Africa", {
      shouldValidate: true,
      shouldDirty: true,
    });

    // helpful: close list
    setOpen(false);

    // if required, validate address fields right away
    if (required) {
      await trigger([
        suburbName,
        cityName,
        provinceName,
        postalName,
        countryName,
      ]);
    } else {
      clearErrors([
        suburbName,
        cityName,
        provinceName,
        postalName,
        countryName,
      ]);
    }
  };

  // (Optional) display text in dropdown rows
  const displayRow = useMemo(() => {
    return (loc: LocationItem) =>
      `${loc.suburb} • ${loc.city} • ${loc.province} • ${loc.postal_code}`;
  }, []);

  return (
    <div className="mt-4" ref={containerRef}>
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Line 1 */}
        <div>
          <Label>{required ? "Address Line 1 *" : "Address Line 1"}</Label>
          <Input className="mt-2" {...register(line1Name)} />
          {line1Error && (
            <p className="text-sm text-red-600 mt-1">{line1Error}</p>
          )}
        </div>

        {/* Line 2 */}
        <div>
          <Label>Address Line 2</Label>
          <Input className="mt-2" {...register(line2Name)} />
        </div>

        {/* Suburb (autocomplete) */}
        <div className="md:col-span-2">
          <Label>{required ? "Suburb *" : "Suburb"}</Label>

          <div className="relative">
            <div className={selectTriggerClass}>
              <input
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setOpen(true);

                  // If user edits text manually, clear derived fields (so they don't submit stale city/province)
                  setValue(suburbName, e.target.value, { shouldDirty: true });
                  setValue(cityName, "", { shouldDirty: true });
                  setValue(provinceName, "", { shouldDirty: true });
                  setValue(postalName, "", { shouldDirty: true });
                  // keep country default if you want, or clear it too:
                  setValue(countryName, "South Africa", { shouldDirty: true });
                }}
                onFocus={() => setOpen(true)}
                placeholder="Start typing suburb..."
                className="w-full bg-transparent outline-none text-sm pr-8"
              />

              {loading ? (
                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
              ) : (
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              )}
            </div>

            {/* dropdown */}
            {open && debouncedTerm.trim().length >= 2 && (
              <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-xl">
                <div className="max-h-64 overflow-auto">
                  {results.length === 0 && !loading ? (
                    <div className="px-4 py-3 text-sm text-gray-600">
                      No suburbs found. Try another search.
                    </div>
                  ) : (
                    results.map((loc) => (
                      <button
                        key={loc._id}
                        type="button"
                        onClick={() => onSelectLocation(loc)}
                        className="w-full text-left px-4 py-3 hover:bg-[#FFF0F7] transition-colors"
                      >
                        <div className="text-sm font-semibold text-gray-900">
                          {loc.suburb}
                        </div>
                        <div className="text-xs text-gray-600">
                          {displayRow(loc)}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {suburbError && (
            <p className="text-sm text-red-600 mt-1">{suburbError}</p>
          )}
        </div>

        {/* City (readonly) */}
        <div>
          <Label>{required ? "City *" : "City"}</Label>
          <Input className="mt-2 bg-gray-50" readOnly {...register(cityName)} />
          {cityError && (
            <p className="text-sm text-red-600 mt-1">{cityError}</p>
          )}
        </div>

        {/* Province (readonly) */}
        <div>
          <Label>{required ? "Province *" : "Province"}</Label>
          <Input
            className="mt-2 bg-gray-50"
            readOnly
            {...register(provinceName)}
          />
          {provinceError && (
            <p className="text-sm text-red-600 mt-1">{provinceError}</p>
          )}
        </div>

        {/* Postal code (readonly) */}
        <div>
          <Label>{required ? "Postal Code *" : "Postal Code"}</Label>
          <Input
            className="mt-2 bg-gray-50"
            readOnly
            {...register(postalName)}
          />
          {postalError && (
            <p className="text-sm text-red-600 mt-1">{postalError}</p>
          )}
        </div>

        {/* Country (readonly) */}
        <div>
          <Label>{required ? "Country *" : "Country"}</Label>
          <Input
            className="mt-2 bg-gray-50"
            readOnly
            {...register(countryName)}
          />
          {countryError && (
            <p className="text-sm text-red-600 mt-1">{countryError}</p>
          )}
        </div>
      </div>
    </div>
  );
}
