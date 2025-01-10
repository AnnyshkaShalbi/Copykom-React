'use client';
import Image from "next/image";
import Sidebar from "./sidebar";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="relative">
      <div className="border-b border-primary w-full">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
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

          <Link href={'/'}>
            <Image
              width={118}
              height={36}
              src="/logoNewBlack.svg"
              alt="Копикома - копировальный центр для студентов"
            />
          </Link>

          <Link href={'https://api.whatsapp.com/send/?phone=79154310666'} target="_blank">
            <Image
              width={36}
              height={36}
              src="/socials/whatsapp.svg"
              alt="Whats'app для связи с Копикомой в мессенджере."
            />
          </Link>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}