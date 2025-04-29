'use client';
import Image from "next/image"
import Link from "next/link";
import { tenor_sans } from '@/app/ui/fonts';
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white flex flex-shrink-0" id="footer">
      <div className="wrapper flex flex-col gap-4 justify-between items-center py-10 px-5 sm:px-12
        sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:items-start 
          md:flex-row md:items-center md:gap-9 lg:gap-16">
          <Link href={'/'}>
            <Image
              width={178}
              height={55}
              src="/logoNewWhite.svg"
              alt="Копикома - копировальный центр для студентов"
            />
          </Link>

          <Link 
            href={'tel:+7 (915) 431-06-66'} 
            target="_blank"
            className={`${tenor_sans.className} text-3xl`}> 
            +7 (915) 431-06-66
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <Socials />

          <Link href="/privacy" className="text-sm">Политика конфиденциальности</Link>
          <p className="text-sm">© 2015-2025 Копиком</p>
        </div>
      </div>
    </footer>
  );
}