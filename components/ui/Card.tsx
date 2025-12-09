import { cn } from '@/lib/cn';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'bg-items',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
