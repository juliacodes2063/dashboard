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
  { id: 'decPrev', label: '2024-12-15', inventory: 64, demand: 70, safetyStock: 32 },
  { id: 'jan', label: '2025-01-01', inventory: 62, demand: 62, safetyStock: 32 },
  { id: 'feb', label: '2025-02-01', inventory: 50, demand: 45, safetyStock: 32 },
  { id: 'mar', label: '2025-03-01', inventory: 67, demand: 60, safetyStock: 32 },
  { id: 'apr', label: '2025-04-01', inventory: 39, demand: 45, safetyStock: 32 },
  { id: 'may', label: '2025-05-01', inventory: 64, demand: 73, safetyStock: 32 },
  { id: 'jun', label: '2025-06-01', inventory: 35, demand: 50, safetyStock: 32 },
  { id: 'jul', label: '2025-07-01', inventory: 57, demand: 73, safetyStock: 32 },
  { id: 'aug', label: '2025-08-01', inventory: 45, demand: 50, safetyStock: 32 },
  { id: 'sep', label: '2025-09-01', inventory: 89, demand: 80, safetyStock: 32 },
  { id: 'oct', label: '2025-10-01', inventory: 47, demand: 56, safetyStock: 32 },
  { id: 'nov', label: '2025-11-01', inventory: 65, demand: 74, safetyStock: 32 },
  { id: 'dec', label: '2025-12-01', inventory: 39, demand: 60, safetyStock: 32 },
  { id: 'decMidl', label: '2025-12-15', inventory: 60, demand: 75, safetyStock: 32 },
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
