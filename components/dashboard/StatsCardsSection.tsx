'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import SkeletonBlock from '@/components/ui/SkeletonBlock';
import { StatCard } from '@/types/dashboard';
import { MethodIcon, MultiLocationIcon, OverrideIcon } from '@/components/icons';

const ICONS = {
  method: MethodIcon,
  location: MultiLocationIcon,
  override: OverrideIcon,
} as const;

const StatsCardsSkeleton: React.FC = () => (
  <div className="grid dynamic-dis-grid lg:grid-cols-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <Card key={i} className="space-y-3 bg-items card-dynamic-stat rounded-lg">
        <SkeletonBlock className="h-3 w-24" />
        <SkeletonBlock className="h-4 w-32" />
        <SkeletonBlock className="h-3 w-full" />
        <SkeletonBlock className="h-3 w-3/4" />
      </Card>
    ))}
  </div>
);

const StatsCardsSection: React.FC = () => {
  const [cards, setCards] = useState<StatCard[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/stat-cards');
      const data: StatCard[] = await res.json();
      setCards(data);
    };
    load();
  }, []);

  if (!cards) return <StatsCardsSkeleton />;

  return (
    <div className="grid dynamic-dis-grid lg:grid-cols-3">
      {cards.map((card) => {
        const Icon = ICONS[card.iconId];
        return (
          <Card
            key={card.id}
            className="bg-items/50 flex flex-col justify-between rounded-lg min-h-[100px] card-dynamic-stat"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col card-title-dis">
                <p className="heading-label">{card.title}</p>
                <p className="heading-card-lg">{card.value}</p>
              </div>

              <Icon className="text-primaryBlue" />
            </div>

            <p className="text-body-md">{card.description}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCardsSection;
