'use client'
import { ReactNode, useState } from "react";

interface TabsProps {
  tabs: TabItem[];
}

interface TabItem {
  label: string;
  content: ReactNode
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 border-b">
        {tabs.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-primary'
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