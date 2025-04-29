'use client';

import Image from "next/image";
import Sidebar from "./sidebar";
import Link from "next/link";
import { tenor_sans } from '@/app/ui/fonts';
import { useState } from "react";
import NavLinksHeader from "./navLinksHeader"
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname()

  const handleScrollToMap = () => {
    if(pathName != '/') {
      router.push('/')

      setTimeout(() => {
        const mapBlock = document.getElementById('map');
        if(mapBlock) {
          mapBlock?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000)
    }
    
    const mapBlock = document.getElementById('map');
    if(mapBlock) {
      mapBlock?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="border-b border-primary w-full">
        <div className="wrapper flex justify-between items-center py-3 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
          >
            <Image
              width={36}
              height={36}
              src="/burger.svg"
              alt="Иконка для открытия бокового меню"
            />
          </button>

          <div className="flex gap-11 items-center">
            <Link href={'/'}>
              <Image
                width={130}
                height={40}
                src="/logoNewBlack.svg"
                alt="Копикома - копировальный центр для студентов"
                className="md:w-[178px] md:h-[55px]"
              />
            </Link>
            <Link 
              target="_blank"
              href={'https://api.whatsapp.com/send/?phone=79154310666'}
              className={`${tenor_sans.className} text-xl hidden md:block`}>
              + 7 (915) 431-06-66
            </Link>
          </div>

          <div className="flex gap-10 items-center">
            <nav className="hidden md:block">
              <ul className="flex gap-5 items-center">
                <li 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleScrollToMap} >
                  <Image
                    width={16}
                    height={16}
                    src="/mapPin.svg"
                    alt="Месторасположение главного офиса"
                  />
                  Москва
                </li>
                <li
                  onClick={handleScrollToFooter} 
                  className="cursor-pointer relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-500">
                  Контакты
                </li>
              </ul>
            </nav>
            <Link href={'https://api.whatsapp.com/send/?phone=79154310666'} target="_blank">
              <Image
                width={40}
                height={40}
                src="/socials/whatsapp.svg"
                alt="Whats'app для связи с Копикомой в мессенджере."
              />
            </Link>
          </div>
          
        </div>
      </div>
      <NavLinksHeader />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}