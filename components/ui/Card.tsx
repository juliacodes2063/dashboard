import { cn } from '@/lib/cn';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, noPadding }) => {
  return (
    <div
      className={cn(
        'rounded-3xl flex-1 bg-items',
        !noPadding && 'p-[18px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
