// data/dashboard.ts
import type { StatCard, InventoryPoint, InfoBlock } from '@/types/dashboard';

export const statCardsMock: StatCard[] = [
  {
    id: 'method',
    title: 'Forecasting Method',
    value: 'ROBUST_ROS',
    description:
      'A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.',
    iconId: 'method',
  },
  {
    id: 'location-support',
    title: 'Location Support',
    value: 'Multi-Location',
    description:
      'Each location is forecasted independently to prevent overstock and align supply with demand.',
    iconId: 'location',
  },
  {
    id: 'override',
    title: 'Override Support',
    value: 'Available',
    description:
      'Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.',
    iconId: 'override',
  },
];

export const inventoryMock: InventoryPoint[] = [
  { id: 'jan', label: 'Jan', inventory: 48, demand: 47, safetyStock: 32 },
  { id: 'feb', label: 'Feb', inventory: 66, demand: 57, safetyStock: 32 },
  { id: 'mar', label: 'Mar', inventory: 75, demand: 60, safetyStock: 32 },
  { id: 'apr', label: 'Apr', inventory: 66, demand: 53, safetyStock: 32 },
  { id: 'may', label: 'May', inventory: 48, demand: 43, safetyStock: 32 },
  { id: 'jun', label: 'Jun', inventory: 39, demand: 40, safetyStock: 32 },
  { id: 'jul', label: 'Jul', inventory: 48, demand: 47, safetyStock: 32 },
  { id: 'aug', label: 'Aug', inventory: 66, demand: 57, safetyStock: 32 },
  { id: 'sep', label: 'Sep', inventory: 75, demand: 60, safetyStock: 32 },
  { id: 'oct', label: 'Oct', inventory: 66, demand: 53, safetyStock: 32 },
  { id: 'nov', label: 'Nov', inventory: 48, demand: 43, safetyStock: 32 },
  { id: 'dec', label: 'Dec', inventory: 39, demand: 40, safetyStock: 32 },
];

export const infoBlocksMock: InfoBlock[] = [
  {
    id: 'how',
    title: 'How Forecasting Works',
    description:
      'The forecasting system has been streamlined to use the robust rate of sale method across all locations for improved consistency and reliability.',
  },
  {
    id: 'ros',
    title: 'Robust Rate of Sale',
    description:
      'Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.',
    iconId: 'sale',
    color: 'primaryBlue'
  },
  {
    id: 'location-awareness',
    title: 'Location Awareness',
    description:
      'Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.',
    iconId: 'location',
    color: 'primaryOrange'
  },
  {
    id: 'manual-overrides',
    title: 'Manual Overrides',
    description:
      'When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.',
    iconId: 'override',
    color: 'primaryGreen'
  },
];
