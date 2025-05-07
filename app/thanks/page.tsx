'use client'

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { tenor_sans, inter } from '@/app/ui/fonts'
import { useEffect } from 'react';
import { useOrder } from '@/app/context/OrderContext';

export default function Page() {
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  
  const { resetOrder } = useOrder();

  // Сбрасываем состояние при загрузке страницы
  useEffect(() => {
    if (phone) {
      resetOrder();
    }
  }, []);

  return(
    <div className="w-full p-10 md:p-[2.5rem_3.5rem] after:hidden md:max-w-[37.5rem] flex flex-col items-center justify-center gap-2.5 bg-primary-light relative mx-auto py-[3.125rem] px-[4.6875rem] md:after:block md:after:content-[''] md:after:absolute md:after:w-full md:after:h-full md:after:border md:after:border-primary md:after:top-4 md:after:left-4">
      <h1 className={`text-primary uppercase text-[clamp(1.2rem,3vw,1.875rem)] leading-[clamp(2rem,3vw,2.5rem)] font-normal whitespace-nowrap ${tenor_sans.className}`}>спасибо за заказ!</h1>
      <p className={`${inter.className} text-center text-base sm:text-lg leading-6 sm:leading-7`}>В течение 5 минут менеджер свяжется с тобой по номеру для подтверждения заказа</p>
      <span className="text-gray text-lg leading-9 text-center">{phone}</span>
      <Link href="/" className="z-10 link">Вернуться на главную</Link>
  </div>
  )
}