'use client';
import Image from "next/image"
import Sidebar from "./sidebar";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <div className="border-b border-primary w-full flex justify-between items-center py-2 px-4">
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

        <Link key={'CopyKoma'} href={'/'}>
          <Image
            width={118}
            height={36}
            src="/logoBlack.png"
            alt="Копикома - копировальный центр для студентов"
          />
        </Link>

        <Image
          width={36}
          height={36}
          src="/whatsapp.svg"
          alt="Whats'app для связи с Копикомой в мессенджере."
        />
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}