import { useMemo, useRef, useCallback, useEffect } from 'react';
import type { EChartsType } from 'echarts';
import type { InventoryPoint } from '@/types/dashboard';

type AxisPointerEvent = {
  axesInfo?: Array<{
    seriesDataIndices?: Array<{ dataIndex: number }>;
    dataIndex?: number;
    value?: string | number;
  }>;
};

type UseInventoryHoverLineArgs = {
  data: InventoryPoint[] | null;
};

export const useInventoryHoverLine = ({ data }: UseInventoryHoverLineArgs) => {
  const chartRef = useRef<EChartsType | null>(null);
  const isAnimationDoneRef = useRef(false);
  const lastIndexRef = useRef<number | null>(null);

  useEffect(() => {
    isAnimationDoneRef.current = false;
    lastIndexRef.current = null;
  }, [data]);

  const handleChartReady = useCallback((instance: EChartsType) => {
    chartRef.current = instance;
  }, []);

  const handleFinished = useCallback(() => {
    isAnimationDoneRef.current = true;
  }, []);

  const onEvents = useMemo(
    () => ({
      finished: handleFinished,

      updateAxisPointer: (e: AxisPointerEvent) => {
        if (!data || !chartRef.current) return;
        if (!isAnimationDoneRef.current) return;

        if (!e.axesInfo || !e.axesInfo.length) {
          chartRef.current.setOption(
            {
              series: [{ id: 'hover-line', data: [] }],
            },
            false,
          );
          return;
        }

        const axisInfo = e.axesInfo[0];
        let dataIndex: number | undefined;

        if (axisInfo.seriesDataIndices?.length) {
          dataIndex = axisInfo.seriesDataIndices[0].dataIndex;
        } else if (axisInfo.dataIndex != null) {
          dataIndex = axisInfo.dataIndex;
        } else if (axisInfo.value != null) {
          const v = axisInfo.value;

          if (typeof v === 'number') {
            const target = v;
            let closestIdx = 0;
            let closestDiff = Infinity;

            data.forEach((d, idx) => {
              const t = new Date(d.label).getTime();
              const diff = Math.abs(t - target);

              if (diff < closestDiff) {
                closestDiff = diff;
                closestIdx = idx;
              }
            });

            dataIndex = closestIdx;
          } else {
            const idx = data.findIndex((d) => d.label === v);
            if (idx !== -1) dataIndex = idx;
          }
        }

        if (dataIndex == null || dataIndex < 0 || dataIndex >= data.length) {
          return;
        }

        if (lastIndexRef.current === dataIndex) return;
        lastIndexRef.current = dataIndex;

        const point = data[dataIndex];
        if (!point) return;

        const x = point.label;

        chartRef.current.setOption(
          {
            series: [
              {
                id: 'hover-line',
                data: [
                  [x, 0],
                  [x, point.demand],
                ],
              },
            ],
          },
          false,
        );
      },

      globalout: () => {
        if (!chartRef.current) return;
        if (!isAnimationDoneRef.current) return;

        chartRef.current.setOption(
          {
            series: [{ id: 'hover-line', data: [] }],
          },
          false,
        );
      },
    }),
    [data, handleFinished],
  );

  return { onEvents, handleChartReady };
};
