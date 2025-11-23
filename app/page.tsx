import ForecastHeader from '@/components/dashboard/ForecastHeader';
import InfoPanel from '@/components/dashboard/InfoPanel';
import InventoryCoverageSection from '@/components/dashboard/InventoryCoverageSection';
import StatsCardsSection from '@/components/dashboard/StatsCardsSection';

export default function Page() {
  return (
    <div className="min-w-0 p-3 md:pt-[14px] md:pb-[20px] md:pr-[12px] md:pl-0 h-max">
      <ForecastHeader />
      <div className="grid gap-grid xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        <section className="flex flex-col gap-grid">
          <StatsCardsSection />
          <InventoryCoverageSection />
        </section>

        <aside className="space-y-4 grid">
          <InfoPanel />
        </aside>
      </div>
    </div>
  );
}
