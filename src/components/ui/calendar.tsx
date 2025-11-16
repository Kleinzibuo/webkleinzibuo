'use client';
import React from 'react';

type CalendarProps = {
  mode?: 'single' | 'range';
  selected?: Date | undefined;
  onSelect?: (d: Date) => void;
  disabled?: (date: Date) => boolean;
  initialFocus?: boolean;
};

export function Calendar({ selected, onSelect }: CalendarProps) {
  const formatForInput = (d?: Date) => (d ? d.toISOString().slice(0, 10) : '');

  return (
    <div className="p-4">
      {/* native date input */}
      <input
        type="date"
        className="px-3 py-2 border rounded-lg"
        value={formatForInput(selected)}
        onChange={(e) => {
          const val = e.target.value;
          if (!val) return onSelect?.(new Date());
          const dt = new Date(val + 'T00:00:00');
          onSelect?.(dt);
        }}
      />
    </div>
  );
}
