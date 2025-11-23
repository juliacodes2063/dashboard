'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import SkeletonBlock from '@/components/ui/SkeletonBlock';
import type { InfoBlock } from '@/types/dashboard';
import { LocationIcon, SaleIcon, SettingsIcon } from '@/components/icons';

const ICONS = {
  sale: SaleIcon,
  location: LocationIcon,
  override: SettingsIcon,
} as const;

type IconColor = NonNullable<InfoBlock['color']>;

const ICON_COLOR_CLASSES: Record<IconColor, string> = {
  primaryBlue: 'text-primaryBlue',
  primaryOrange: 'text-primaryOrange',
  primaryGreen: 'text-primaryGreen',
};

const ICON_BG_CLASSES: Record<IconColor, string> = {
  primaryBlue: 'bg-primaryBlue/10',
  primaryOrange: 'bg-primaryOrange/10',
  primaryGreen: 'bg-primaryGreen/10',
};

const InfoSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Card className="bg-items">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="space-y-3 bg-items">
          <SkeletonBlock className="h-3 w-40" />
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-3/4" />
        </Card>
      ))}
    </Card>
  </div>
);

const InfoPanel: React.FC = () => {
  const [blocks, setBlocks] = useState<InfoBlock[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/info-blocks');
      const data: InfoBlock[] = await res.json();
      setBlocks(data);
    };
    load();
  }, []);

  if (!blocks) return <InfoSkeleton />;

  return (
    <Card className="bg-items/50 flex flex-col gap-[12px] ">
      {blocks.map((block, i) => {
        const Icon = block.iconId ? ICONS[block.iconId] : null;
        const colorClass = block.color ? ICON_COLOR_CLASSES[block.color] : '';
        const bgClass = block.color ? ICON_BG_CLASSES[block.color] : '';

        return (
          <Card
            key={block.id}
            noPadding={i === 0}
            className={i === 0 ? 'bg-items/0 ' : 'bg-items/80 '}
          >
            <div className="flex flex-col gap-[25px]">
              {Icon && (
                <div
                  className={`${bgClass} h-[42px] w-[42px] inline-flex items-center justify-center rounded-full`}
                >
                  <Icon className={colorClass} />
                </div>
              )}

              <div className="flex flex-col gap-[8px]">
                <p className="heading-card-md">{block.title}</p>
                <p className={i === 0 ? 'text-body-md' : 'text-body-sm'}>
                  {block.description}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </Card>
  );
};

export default InfoPanel;
