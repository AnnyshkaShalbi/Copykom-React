'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { tenor_sans } from "@/app/ui/fonts";
import Preloader from '@/app/ui/common/preloader';

interface Office {
  id: number;
  title: string;
  address: string;
  opening_hours: string;
  metro_icon: string;
}

export default function AdminMainPage() {
  const router = useRouter();
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Проверка авторизации
    if (!sessionStorage.getItem('admin_id')) {
      router.push('/admin/login');
      return;
    }

    // Загрузка данных об офисах
    const fetchOffices = async () => {
      try {
        const response = await fetch('/api/offices');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setOffices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchOffices();
  }, [router]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className={`${tenor_sans.className} uppercase text-2xl font-bold mb-6`}>Офисы копиком:</h1>
      
      <div className="wrapper flex flex-col justify-between px-5 gap-3 md:grid md:grid-cols-2 md:gap-6">
        {offices.map((office) => (
          <div key={office.id} className="flex items-start gap-3">
            <Image
              width={45}
              height={41}
              src="../metro.svg"
              alt="Иконка метро"
            />
            <div>
              <h3 className={`${tenor_sans.className} uppercase text-xl mt-2`}>{office.title}</h3>
              <p className="text-gray">{office.address}</p>
              <p>{office.opening_hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}