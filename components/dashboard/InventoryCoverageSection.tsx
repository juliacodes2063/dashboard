'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Card from '@/components/ui/Card';
import SkeletonBlock from '@/components/ui/SkeletonBlock';
import { useInventoryData } from '@/hooks/useInventoryData';
import { useChartFonts } from '@/hooks/useChartFonts';
import { useInventoryCoverageOption } from '@/hooks/useInventoryCoverageOption';

const ReactECharts = dynamic(() => import('echarts-for-react'), {
  ssr: false,
});

const InventorySkeleton: React.FC = () => (
  <Card className="space-y-4 bg-items">
    <SkeletonBlock className="h-4 w-64" />
    <SkeletonBlock className="h-3 w-80" />
    <SkeletonBlock className="h-72 w-full rounded-2xl" />
  </Card>
);

const InventoryCoverageSection: React.FC = () => {
  const data = useInventoryData();
  const fonts = useChartFonts();
  const option = useInventoryCoverageOption(data, fonts);

  if (!data || !option) return <InventorySkeleton />;

  return (
    <Card className="bg-items">
      <div className="h-full min-h-[300px]">
        <ReactECharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Card>
  );
};

export default InventoryCoverageSection;
