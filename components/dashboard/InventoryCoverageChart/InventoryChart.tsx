import dynamic from "next/dynamic";
import { useChartFonts } from "./hooks/useChartFonts";
import { useInventoryCoverageOption } from "./hooks/useInventoryCoverageOption";
import { useInventoryData } from "./hooks/useInventoryData";
import { useInventoryHoverLine } from "./hooks/useInventoryHoverLine";
import Card from "@/components/ui/Card";
import SkeletonBlock from "@/components/ui/SkeletonBlock";

import './InventoryTooltip.scss'

const ReactECharts = dynamic(() => import('echarts-for-react'), {
  ssr: false,
});

const InventorySkeleton: React.FC = () => (
  <Card className="space-y-4 bg-items h-[200px] cart-chart">
    <SkeletonBlock className="h-4 w-64" />
    <SkeletonBlock className="h-3 w-80" />
    <SkeletonBlock className="h-[100px] xl:h-60 w-full rounded-2xl" />
  </Card>
);

const InventoryChart: React.FC = () => {
  const data = useInventoryData();
  const fonts = useChartFonts();
  const option = useInventoryCoverageOption(data, fonts);
  const { onEvents, handleChartReady } = useInventoryHoverLine({ data });


   if (!data || !option) return <InventorySkeleton />;

  return (

      <div className="h-full min-h-[300px]">
        <ReactECharts
          option={option}
          style={{ width: '100%', height: '100%' }}
          onChartReady={handleChartReady}
          onEvents={onEvents}
        />
      </div>
  );
};

export default InventoryChart;