import type { Metadata } from "next";
import '@/app/ui/globals.css';
import { noto_sans } from '@/app/ui/fonts';
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import { OrderProvider } from '@/app/context/OrderContext';


export const metadata: Metadata = {
  title: 'Дешёвая печать для студентов в Москве | Переплёт дипломов — Копиком',
  description: '❗️твёрдый переплёт диплома с эмблемой твоего вуза',
  keywords: [
    'печать', 'студентам', 'диплом', 'переплёт', 'Москва', 'сканирование', 
    'брошюровка', 'печать дипломов', 'переплёт дипломов Москва', 
    'срочная печать для студентов', 'диплом с эмблемой вуза','копицентр недорого',],
  metadataBase: new URL('https://copykom.ru'),
  alternates: {
    canonical: 'https://copykom.ru', 
  },
  openGraph: {
    title: 'Дешёвая печать для студентов в Москве | Переплёт дипломов — Копиком',
    description: '❗️твёрдый переплёт диплома с эмблемой твоего вуза',
    url: 'https://copykom.ru',
    siteName: 'Копиком',
    images: [
      {
        url: '/meta/copykom.png', 
        width: 517,
        height: 497,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true, 
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/meta/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'RU-MOW', 
    'geo.placename': 'Moscow',
    'og:image:alt': 'Копиком — печать и переплёт документов',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20 md:pt-40 mb-8 md:mb-11">
          <OrderProvider>
            {children}
          </OrderProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
