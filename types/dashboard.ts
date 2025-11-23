export interface StatCard {
  id: string;
  title: string;
  value: string;
  description: string;
  iconId: 'method' | 'location' | 'override';
}

export interface InventoryPoint {
  id: string;
  label: string; 
  inventory: number;
  demand: number;
  safetyStock?: number;
}

export interface InfoBlock {
  id: string;
  title: string;
  description: string;
  iconId?: 'sale' | 'location' | 'override';
  color?: string;
}
