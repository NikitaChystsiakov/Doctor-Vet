import type { Metadata, Viewport } from 'next';
import { Golos_Text, Spectral } from 'next/font/google';
import './globals.css';

const golos = Golos_Text({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--f-body', display: 'swap' });
const spectral = Spectral({ subsets: ['latin', 'cyrillic'], weight: ['500', '600'], variable: '--f-head', display: 'swap' });

export const metadata: Metadata = {
  title: 'Доктор Вет — круглосуточные ветеринарные клиники в Минске',
  description: 'Две круглосуточные ветклиники в Минске: Подшипниковый пр., 9 и ул. Скрипникова, 39. Своя реанимация, лаборатория, МРТ. Онлайн-запись на ближайшее время, срочно — 7031.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: '#1F5A4C', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${golos.variable} ${spectral.variable}`}>
      <body>{children}</body>
    </html>
  );
}
