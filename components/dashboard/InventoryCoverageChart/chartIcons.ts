export const chartIcons = {
  safetyStockLegend:
    'path://M0,0.25 H2 V0.75 H0 Z ' +
    'M4,0.25 H6 V0.75 H4 Z ' +
    'M8,0.25 H10 V0.75 H8 Z ' +
    'M12,0.25 H14 V0.75 H12 Z',

  demandLegend: 'path://M0,0 H10 V4 H0 Z',

  inventoryLegend: 'path://M0,0 H10 V4 H0 Z',
 
} as const;

export type ChartIconKey = keyof typeof chartIcons;
