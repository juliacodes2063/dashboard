import { useEffect, useState } from 'react';
import type { InventoryPoint } from '@/types/dashboard';

export const useInventoryData = () => {
  const [data, setData] = useState<InventoryPoint[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch('/api/inventory');
        const json: InventoryPoint[] = await res.json();
        if (!cancelled) {
          setData(json);
        }
      } catch (e) {
        if (!cancelled) {
          setData([]);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
};
