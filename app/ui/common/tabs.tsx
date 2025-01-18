'use client'
import { ReactNode, useState } from "react";
import { tenor_sans } from "../fonts";

interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

interface TabItem {
  label: string;
  content: ReactNode;
}

export default function Tabs({ tabs, className }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={`${className}`}>
      <div className="flex space-x-3">
        {tabs.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`${tenor_sans.className} p-3 uppercase border-b transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:border-primary'
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs[activeTabIndex].content}
    </div>
  );
}