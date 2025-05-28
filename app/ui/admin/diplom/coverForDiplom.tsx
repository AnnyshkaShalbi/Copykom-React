'use client';
import ItemTitle from '@/app/ui/order/stepOne/itemTitle'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { Cover } from '@/app/lib/types/order'
import MetroSkeleton from "@/app/ui/home/skeletonMetro";


export default function CoverForDiplom() {
  const [covers, setCovers] = useState<Cover[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCovers = async () => {
      try {
        const response = await fetch('/api/covers');
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        setCovers(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchCovers();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return(
    <div>
      <ItemTitle index={2} title="Редактирование обложки" />
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 sm:gap-7 mt-6">

        {loading ? (
          <MetroSkeleton />
        ) : covers.length > 0 ? (
          <>
            {covers.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col gap-2 cursor-pointer transition-all duration-300"
              >
                <div 
                  className={`
                    h-56 bg-light flex items-center justify-center transition-all duration-300 p-4 sm:p-5 relative
                  `}
                  onClick={() => {console.log('choose diplom')}}>
                  <Image
                    width={128}
                    height={177}
                    src={item.image_path}
                    alt={item.title}
                  />
                </div>
                <h4 className='text-gray'>
                  {item.title}
                </h4>
                <p className="text-[#BEC7E2]">{item.price} ₽</p>
              </div>
            ))}
          </>
        ) : ( <div className="text-gray-500">Нет доступных обложек</div>)}
        
      </div>
    </div>
  )
}