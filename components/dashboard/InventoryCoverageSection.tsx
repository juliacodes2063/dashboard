'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import InventoryChart from './InventoryCoverageChart/InventoryChart';

const InventoryCoverageSection: React.FC = () => {

  return (
    <Card className="bg-items flex-1 py-[16px] px-[14px] rounded-md">
      <InventoryChart />
    </Card>
  );
};

export default InventoryCoverageSection;
