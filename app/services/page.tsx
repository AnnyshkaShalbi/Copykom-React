import Link from "next/link";
import { tenor_sans, inter } from '@/app/ui/fonts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'googlebot': 'noindex',
    'yandex': 'none',
  },
};

export default function Page() {
  return (
    <div className="w-full p-10 md:p-[2.5rem_3.5rem] after:hidden md:max-w-[37.5rem] flex flex-col items-center justify-center gap-2.5 bg-primary-light relative mx-auto py-[3.125rem] px-[4.6875rem] md:after:block md:after:content-[''] md:after:absolute md:after:w-full md:after:h-full md:after:border md:after:border-primary md:after:top-4 md:after:left-4"> 
      <h1 className={`text-primary uppercase text-[clamp(1.2rem,3vw,1.875rem)] leading-[clamp(2rem,3vw,2.5rem)] font-normal whitespace-nowrap ${tenor_sans.className}`}>Страница не найдена</h1>
      <p className={`${inter.className} text-[clamp(1rem,3vw,1.125rem)] leading-[clamp(2rem,3vw,2.1875rem)] text-center `}>Error 404</p>
      <Link href="/" className="z-10 link">Вернуться на главную</Link>
    </div>
  );
}