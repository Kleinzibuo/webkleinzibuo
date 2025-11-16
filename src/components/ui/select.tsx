'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type SelectContextValue = {
  value?: string;
  onValueChange?: (v: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SelectContext = createContext<SelectContextValue | null>(null);

type SelectProps = {
  value?: string;
  onValueChange?: (v: string) => void;
  children?: React.ReactNode;
  className?: string;
};

export function Select({ value, onValueChange, children, className = '' }: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className={`relative inline-block w-full ${className}`}>{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    console.warn('SelectTrigger must be used within a Select');
    return <>{children}</>;
  }
  const { open, setOpen } = ctx;

  return (
    <div>
      {/* Expect consumers to place a visible element inside; we wrap it to toggle open */}
      <div
        onClick={() => setOpen(!open)}
        className={`w-full px-3 py-2 border rounded-lg flex items-center justify-between cursor-pointer ${className}`}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {children}
      </div>
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = useContext(SelectContext);
  if (!ctx) return <span>{placeholder}</span>;
  const { value } = ctx;
  return <span className={value ? 'text-gray-900' : 'text-gray-500'}>{value ?? placeholder}</span>;
}

export function SelectContent({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const ctx = useContext(SelectContext);
  const ref = useRef<HTMLDivElement | null>(null);

  if (!ctx) {
    console.warn('SelectContent must be used within a Select');
    return <div>{children}</div>;
  }

  const { open, setOpen } = ctx;

  // Close when clicking outside
  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('click', handleDocClick);
    }
    return () => document.removeEventListener('click', handleDocClick);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={`absolute left-0 z-40 mt-2 w-full bg-white border rounded-lg shadow-lg ${className}`}
      role="listbox"
    >
      <div className="py-2">{children}</div>
    </div>
  );
}

export function SelectItem({ value, children }: { value: string; children?: React.ReactNode }) {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    console.warn('SelectItem must be used within a Select');
    return <div>{children}</div>;
  }
  const { onValueChange, setOpen } = ctx;

  function handleClick() {
    onValueChange?.(value);
    setOpen(false);
  }

  return (
    <div
      role="option"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
      data-value={value}
    >
      {children}
    </div>
  );
}
