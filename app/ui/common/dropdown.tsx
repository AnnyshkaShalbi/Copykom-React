import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  name: string;
  href?: string;
}

interface DropdownProps {
  buttonLabel: string;
  items: DropdownItem[];
}

export default function Dropdown({ buttonLabel, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-6 cursor-pointer"
      >
        <p>{buttonLabel}</p>
        <Image
          width={18}
          height={10}
          src="/arrowDown.svg"
          alt="Иконка"
          className={`transition-all duration-300 ${isOpen && 'rotate-180'}`}
        />
      </div>

      <div
        className={`absolute left-0 z-10 mt-4 w-56 origin-top-right bg-white shadow-[4px_7px_15px_0px_rgba(56,65,90,0.3019607843)] transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}