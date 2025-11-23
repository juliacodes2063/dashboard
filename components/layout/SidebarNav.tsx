'use client';

import React, { useState } from 'react';
import IconButton from '../ui/IconButton';

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarNavProps {
  items: NavItem[];
}

const SidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleClick = (i: number): void => {
    setActiveIndex(i)
  };
  return (
    <nav className="flex flex-col gap-[2px] bg-primary rounded-[99999px] p-[2px]">
      {items.map((item, i) => {
        const Icon = item.icon;
        const isActive = i === activeIndex;

        return (
          <IconButton
            key={item.id}
            theme="sidebarLink"
            className={isActive ? 'bg-white text-primaryBlue' : ''}
            onClick={() => handleClick(i)}
          >
            <Icon />
          </IconButton>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
