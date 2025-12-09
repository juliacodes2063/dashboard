'use client';

import React from 'react';
import { cn } from '@/lib/cn';

type IconButtonSize = 'md' | 'mdm' | 'lg';
type IconButtonThemeName = 'headerLight' | 'sidebarLink' | 'avatar' |'logo';

type IconButtonTheme = {
  base: string;
};

const sizeClasses: Record<IconButtonSize, string> = {
  md: 'h-[46px] w-[46px]',
  mdm: 'h-[46px] w-[48px]',
  lg: 'h-[50px] w-[50px]',
};

const baseButtonClass =
  'inline-flex items-center justify-center rounded-full cursor-pointer ' +
  'transform transition-all duration-300 ease-out hover:scale-105';

const iconButtonThemes: Record<IconButtonThemeName, IconButtonTheme> = {
  headerLight: {
    base: 'bg-primary hover:bg-white',
  },
  logo: {
    base: 'bg-commonBlack hover:bg-primary hover:text-commonBlack text-white',
  },
  sidebarLink: {
    base: 'hover:bg-white',
  },
  avatar: {
    base: 'overflow-hidden',
  },
};


type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: IconButtonSize;
  theme?: IconButtonThemeName;
  className?: string;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({
  size = 'md',
  theme = 'headerLight',
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={cn(
        baseButtonClass,
        sizeClasses[size],
        iconButtonThemes[theme].base,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
