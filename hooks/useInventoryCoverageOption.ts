import { useMemo } from 'react';
import type { EChartsOption } from 'echarts';
import type { InventoryPoint } from '@/types/dashboard';

type TooltipParams = {
  dataIndex: number;
};

type Fonts = {
  openSans?: string;
  fixelDisplay?: string;
};

export const useInventoryCoverageOption = (
  data: InventoryPoint[] | null,
  fonts: Fonts,
): EChartsOption | undefined => {
  const { openSans, fixelDisplay } = fonts;

  let black = '#071429';
  let primary = '#0e64ee';
  let isMobile = false;

  if (typeof window !== 'undefined') {
    const root = getComputedStyle(document.documentElement);
    black = root.getPropertyValue('--color-commonBlack').trim() || black;
    primary = root.getPropertyValue('--color-primaryBlue').trim() || primary;
    isMobile = window.innerWidth < 768;
  }

  return useMemo(() => {
    if (!data) return undefined;

    const baseFont =
      openSans ||
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

    return {
      textStyle: {
        fontFamily: baseFont,
      },
      title: {
        text: 'Inventory Coverage (90 days)',
        subtext: isMobile
          ? ''
          : 'Optimized inventory projections with upcoming POs',
        left: 0,
        top: 0,
        textStyle: {
          color: black,
          fontSize: 18,
          fontWeight: 600,
          fontFamily: fixelDisplay || baseFont,
        },
        subtextStyle: {
          color: `${black}80`,
          fontSize: 14,
        },
        itemGap: 8,
      },
      legend: {
        show: !isMobile,
        top: 0,
        right: 0,
        itemWidth: 18,
        itemHeight: 3,
        icon: 'roundRect',
        data: ['Projected Inventory', 'Demand', 'Safety Stock Level'],
        textStyle: {
          color: black,
          fontSize: 12,
        },
      },
      grid: { left: 24, right: 4, top: 72, bottom: 4 },
      tooltip: {
        trigger: 'axis',
        className: 'inventory-tooltip',
        borderWidth: 0,
        extraCssText:
          'box-shadow:0 18px 45px rgba(15,23,42,0.18);border-radius:16px;padding:12px 16px;',
        axisPointer: {
          type: 'line',
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: black,
          },
        },
        formatter: (params: TooltipParams | TooltipParams[]) => {
          const list = Array.isArray(params) ? params : [params];
          const first = list[0];
          const idx = first.dataIndex;
          const point = data?.[idx];

          if (!point) return '';

          return `
      <div class="inventory-tooltip__inner">
        <div class="inventory-tooltip__title">Week of ${point.label}</div>

        <div class="inventory-tooltip__row">
          <span class="inventory-tooltip__dot inventory-tooltip__dot--inventory"></span>
          <span class="inventory-tooltip__value"><strong>${point.inventory} units</strong></span>
          <span class="inventory-tooltip__label">Inventory</span>
        </div>

        <div class="inventory-tooltip__row">
          <span class="inventory-tooltip__dot inventory-tooltip__dot--demand"></span>
          <span class="inventory-tooltip__value"><strong>${point.demand}</strong></span>
          <span class="inventory-tooltip__label">Weekly Demand</span>
        </div>

        <div class="inventory-tooltip__divider"></div>

        <div class="inventory-tooltip__footer">
          PO Arrival - Nov 15 (+120)
        </div>
      </div>
    `;
        },
      },

      xAxis: {
        type: 'category',
        data: data.map((d) => d.label),
        boundaryGap: false,
        axisLine: { show: false },
        axisLabel: { color: `${black}80`, fontSize: 12 },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: { show: false },
        splitLine: { lineStyle: { color: `${black}1A` } },
        axisLabel: { color: `${black}80`, fontSize: 12 },
      },
      series: [
        {
          name: 'Projected Inventory',
          type: 'line',
          data: data.map((d) => d.inventory),
          smooth: 0.3,
          lineStyle: { width: 2, color: black },
          itemStyle: { color: black },
          areaStyle: { opacity: 0 },
          symbol: 'none',
        },
        {
          name: 'Demand',
          type: 'line',
          data: data.map((d) => d.demand),
          smooth: 0.3,
          lineStyle: { width: 2, color: primary },
          symbol: 'circle',
          symbolSize: 10,
          showSymbol: false,
          itemStyle: { color: primary },
          emphasis: {
            focus: 'series',
          },

          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: `${primary}1A` },

                { offset: 1, color: `${primary}00` },
              ],
            },
          },
        },
        {
          name: 'Safety Stock Level',
          type: 'line',
          data: data.map((d) => d.safetyStock ?? 0),
          smooth: true,
          itemStyle: { color: '#7FCB87' },
          lineStyle: { width: 1.5, type: 'dashed', color: '#7FCB87' },
          symbol: 'none',
        },
      ],
    };
  }, [data, openSans, fixelDisplay, black, primary, isMobile]);
};
