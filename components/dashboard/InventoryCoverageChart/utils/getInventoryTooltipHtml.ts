import type { InventoryPoint } from '@/types/dashboard';

export const getInventoryTooltipHtml = (point: InventoryPoint) => {
 
  let title = `Week of ${point.label} 12`;

  const date = new Date(point.label);
  if (!Number.isNaN(date.getTime())) {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getUTCDate();
    title = `Week of ${month} ${day}`;
  }

  return `
    <div class="inventory-tooltip__inner">
      <div class="inventory-tooltip__title">${title}</div>

      <div class="inventory-tooltip__dataBox">
        <div class="inventory-tooltip__col">
          <div>
            <span class="inventory-tooltip__dot inventory-tooltip__dot--inventory"></span>
            <span class="inventory-tooltip__value"><strong>${point.inventory} units</strong></span>
          </div>
          
          <div class="inventory-tooltip__label">Inventory</div>
        </div>

        <div class="inventory-tooltip__col">
          <div>
            <span class="inventory-tooltip__dot inventory-tooltip__dot--demand"></span>
            <span class="inventory-tooltip__value"><strong>${point.demand}</strong></span>
          </div>
          
          <div class="inventory-tooltip__label">Weekly Demand</div>
        </div>
      </div>

      <div class="inventory-tooltip__divider"></div>

      <div class="inventory-tooltip__footer">
        PO Arrival - Nov 15 (+120)
      </div>
    </div>
  `;
};
