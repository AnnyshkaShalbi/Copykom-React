'use client';
import Image from "next/image"
import Link from "next/link";
import { tenor_sans } from '@/app/ui/fonts';
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white flex flex-shrink-0">
      <div className="wrapper flex flex-col gap-4 justify-between items-center py-10">
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

        <Socials />

        <p className="text-sm">Политика конфиденциальности</p>
        <p className="text-sm">© 2015-2025 Копиком</p>
      </div>
    </footer>
  );
}