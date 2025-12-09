import ForecastHeader from '@/components/dashboard/ForecastHeader';
import InfoPanel from '@/components/dashboard/InfoPanel';
import InventoryCoverageSection from '@/components/dashboard/InventoryCoverageSection';
import StatsCardsSection from '@/components/dashboard/StatsCardsSection';

export default function Page() {
  return (
    <div className="min-w-0 p-3 md:pt-[14px] md:pb-[20px] md:pr-[12px] md:pl-0 h-max">
      <ForecastHeader />

      <div className="grid w-full max-w-full dynamic-dis-grid grid-main">
        <section className="flex min-w-0 flex-col dynamic-dis-grid ">
          <StatsCardsSection />
          <InventoryCoverageSection />
        </section>

        <aside className="mt-4 min-w-0 space-y-4 xl:mt-0">
          <InfoPanel />
        </aside>
      </div>
    </div>
  );
}
