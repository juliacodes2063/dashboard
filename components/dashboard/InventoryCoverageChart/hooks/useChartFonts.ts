import { useState } from 'react';

export const useChartFonts = () => {
  const [fonts] = useState<{
    openSans?: string;
    fixelDisplay?: string;
  }>(() => {
    if (typeof window === 'undefined') {
      return {};
    }

    const styles = getComputedStyle(document.body);

    const openSansVar = styles
      .getPropertyValue('--font-open-sans')
      .trim();
    const fixelVar = styles
      .getPropertyValue('--font-fixel-display')
      .trim();

    return {
      openSans: openSansVar || undefined,
      fixelDisplay: fixelVar || undefined,
    };
  });

  return fonts;
};
