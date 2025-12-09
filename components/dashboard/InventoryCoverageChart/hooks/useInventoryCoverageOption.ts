import { useCallback, useEffect, useMemo, useState } from 'react';
import { type EChartsOption } from 'echarts';
import type { InventoryPoint } from '@/types/dashboard';
import { chartIcons } from '../chartIcons';
import { getInventoryTooltipHtml } from '../utils/getInventoryTooltipHtml';

type TooltipParams = {
  dataIndex: number;
};

type Fonts = {
  openSans?: string;
  fixelDisplay?: string;
};

const INDEX_RATIO = 24.96;

export const useInventoryCoverageOption = (
  data: InventoryPoint[] | null,
  fonts: Fonts,
): EChartsOption | undefined => {
  const { openSans, fixelDisplay } = fonts;

  let black = '#071429';
  let primary = '#0e64ee';
  const green = '#7FCB87';

  const [index, setIndex] = useState(INDEX_RATIO);
  const [isMobile, setIsMobile] = useState(false);


  const smooth = 0.4;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      const vw = window.innerWidth / 100;
      const vh = window.innerHeight / 100;

      setIndex(vw + vh);
      setIsMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  if (typeof window !== 'undefined') {
    const root = getComputedStyle(document.documentElement);
    black = root.getPropertyValue('--color-commonBlack').trim() || black;
    primary = root.getPropertyValue('--color-primaryBlue').trim() || primary;
  }

  const dyn = useCallback(
    (base: number) => (index * base) / INDEX_RATIO,
    [index],
  );

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
          fontSize: dyn(18),
          fontWeight: 600,
          fontFamily: fixelDisplay || baseFont,
        },
        subtextStyle: {
          color: `${black}80`,
          fontSize: dyn(14),
        },
        itemGap: dyn(8),
      },
      legend: {
        show: !isMobile,
        top: 0,
        right: 0,
        itemWidth: 18,
        itemHeight: 3,
        icon: 'roundRect',
        data: [
          {
            name: 'Projected Inventory',
            icon: chartIcons.inventoryLegend,
            itemStyle: {
              color: `${black}B3`,
            },
          },
          {
            name: 'Demand',
            icon: chartIcons.demandLegend,
            itemStyle: {
              color: `${primary}80`,
            },
          },
          {
            name: 'Safety Stock Level',
            icon: chartIcons.safetyStockLegend,
          },
        ],
        textStyle: {
          color: black,
          fontSize: dyn(12),
        },
      },

      grid: { left: dyn(9), right: dyn(4), top: dyn(72), bottom: dyn(4) },
      tooltip: {
        trigger: 'axis',
        className: 'inventory-tooltip',
        borderWidth: 0,
        extraCssText:
          `box-shadow: 1px 0px 4px 0px #00000014;border-radius:8px;padding:${dyn(12)}px ${dyn(12)}px;`,
        axisPointer: {
          type: 'line',
          lineStyle: {
            type: 'dashed',
            width: 0,
            color: 'rgba(0,0,0,0)',
          },
        },
        formatter: (params: TooltipParams | TooltipParams[]) => {
          const list = Array.isArray(params) ? params : [params];
          const first = list[0];
          const idx = first.dataIndex;
          const point = data?.[idx];

          if (!point) return '';

          return getInventoryTooltipHtml(point);
        },
      },

      xAxis: {
        type: 'time',
        boundaryGap: ['1%', '1%'],
        splitNumber: isMobile ? 6 : 12,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          formatter(value) {
            const d = new Date(value);
            return d.toLocaleString('en-US', { month: 'short' });
          },
          color: `${black}80`,
          fontSize: dyn(12),
        },
      },

      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 25,
        axisLine: { show: false },
        splitLine: { lineStyle: { color: `${black}1A` } },
        axisLabel: { color: `${black}80`, fontSize: dyn(12) },
      },
      series: [
        {
          name: 'Projected Inventory',
          type: 'line',
          data: data.map((p) => [p.label, p.inventory]),
          smooth,
          lineStyle: { width: 2, color: black },
          itemStyle: { color: black },
          areaStyle: { opacity: 0 },
          symbol: 'none',
        },
        {
          name: 'DemandShadow',
          type: 'line',
          data: data.map((p) => [p.label, p.demand - 3]),
          smooth: smooth,
          lineStyle: { width: 0 },

          showSymbol: false,

          silent: true,
          tooltip: { show: false },
          animation: false,
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
          name: 'Demand',
          legendHoverLink: false,
          type: 'line',
          data: data.map((p) => [p.label, p.demand]),
          smooth,
          lineStyle: { width: 2, color: primary },

          showSymbol: true,
          symbolSize: 0.01,

          itemStyle: { color: primary },
          emphasis: {
            scale: 800,
            itemStyle: {
              color: primary,
              borderWidth: 2,
            },
          },
        },

        {
          name: 'Safety Stock Level',
          type: 'line',
          data: data.map((p) => [p.label, p.safetyStock]),
          itemStyle: { color: green },
          lineStyle: { type: 'dotted', color: green },
          symbol: 'none',
          silent: true,
        },
        {
          id: 'hover-line',
          name: 'Hover Line',
          type: 'line',
          data: [],
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'none',
          lineStyle: {
            width: 1,
            type: 'dashed',
            color: black,
          },
          silent: true,
          tooltip: { show: false },
          animation: false,
          z: 2.5,
        },
      ],
    };
  }, [data, openSans, fixelDisplay, black, primary, isMobile, dyn]);
};
