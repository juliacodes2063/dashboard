'use client';

import React from 'react';
import { cn } from '@/lib/cn';

type ToggleOption = {
  id: string;
  label: React.ReactNode;
};

interface SegmentedToggleProps {
  options: ToggleOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  className?: string;
}

const SegmentedToggle: React.FC<SegmentedToggleProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  className,
}) => {
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? options[0]?.id,
  );

  const active = value ?? internalValue;

  const handleClick = (id: string) => {

    if (value === undefined) {
      setInternalValue(id);
    }
    onChange?.(id);
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {options.map((option) => {
        const isActive = option.id === active;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => handleClick(option.id)}
            className={cn(
              'cursor-pointer px-[20px] dynamic-button-h text-button rounded-full transition',
              isActive
                ? 'bg-primaryBlue text-white m'
                : 'text-primaryBlue hover:bg-slate-100',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedToggle;
