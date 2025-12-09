import React from 'react';
import SegmentedToggle from '@/components/ui/SegmentedToggle';
import { EyeIcon } from '@/components/icons';

const ForecastHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-between dynamic-dis-title-m">
      <div className="flex flex-col dynamic-dis-grid">
        <h1 className="heading-hero">Location-Based Forecasting</h1>
        <p className="text-body-md">
          Robust Rate of Sale forecasting with location-aware calculations.
        </p>
      </div>

      <SegmentedToggle
        defaultValue="settings"
        options={[
          {
            id: 'accuracy',
            label: (
              <span className="flex items-center gap-[8px]">
                <EyeIcon className="h-4 w-4" />
                <span>View Forecast Accuracy</span>
              </span>
            ),
          },
          { id: 'settings', label: 'Adjust Forecast Settings' },
        ]}
      />
    </div>
  );
};

export default ForecastHeader;
