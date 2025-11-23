import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  
  weight: ['500', '600'],
});

export const fixelDisplay = localFont({
  src: [
    {
      path: '../public/fonts/fixel-display/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/fixel-display/FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-fixel-display',
});
