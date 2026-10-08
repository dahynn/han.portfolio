import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hansol.dahyeon.kr'),
  title: '유다현 포트폴리오',
  description: '고객의 클릭 한 번부터 데이터의 마지막 줄까지, 끝까지 따라가는 풀스택 개발자 유다현의 포트폴리오',
  openGraph: { title: '유다현 | 한솔PNS IT 풀스택 개발자 포트폴리오', description: '고객의 클릭 한 번부터 데이터의 마지막 줄까지, 끝까지 따라가는 풀스택 개발자', images: ['/assets/hansol-share.png'] },
  twitter: { card: 'summary_large_image', images: ['/assets/hansol-share.png'] },
  icons: {
    icon: '/assets/hansol-symbol.svg',
    shortcut: '/assets/hansol-symbol.svg',
    apple: '/assets/hansol-symbol.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
