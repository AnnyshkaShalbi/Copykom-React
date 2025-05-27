'use client';
import { useState, useEffect } from 'react';
import Maps from "@/app/ui/home/maps";
import Metro from "@/app/ui/home/metro";
import OrderDiploma from "@/app/ui/home/orderDiploma";
import { Office } from '@/app/lib/types/offices';
import MetroSkeleton from "@/app/ui/home/skeletonMetro"; 

export default function Home() {
  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    const fetchOffices = async () => {
      const response = await fetch('/api/offices');
      if (response.ok) {
        setOffices(await response.json());
      }
    };

    fetchOffices();
  }, []);

  return (
    <div className="pb-5">
      <OrderDiploma />
      <Maps />
      {offices.length > 0 ? <Metro offices={offices} /> : <MetroSkeleton />}
    </div>
  );
}