'use client'

import { inter } from "../../fonts";
import { Button } from "../../common/button";
import ItemTitle from "./itemTitle";
import Image from "next/image";
import { useOrder } from '@/app/context/OrderContext';

export default function FinalCover() {
  const {
    computed: {
      embossingType,
      logoText,
      colorText
    },
    getFinalCoverPath,
    getTotalPrice,
    goToNextStep
  } = useOrder();

  return(
    <div>
      <ItemTitle index={4} title="твой выбор" />
      <div className="mt-6 bg-light p-5 max-w-[615px]">
        <div className="grid grid-cols-[35%_65%] gap-4">
          <div className="flex items-center justify-center p-4 relative h-28 sm:h-44">
            <Image 
              width={79}
              height={110}
              src={getFinalCoverPath()}
              alt="Итоговая обложка для диплома"
              className="h-28 sm:h-44 w-auto"
            />
          </div>

          <div className="flex flex-col sm:gap-2">
            <p className="text-gray">{colorText} обложка</p>
            <p className="text-gray">{embossingType.text}</p>
            <p className="text-gray">{logoText}</p>
            <p className={`${inter.className} text-primary text-lg`}>
              {getTotalPrice()} ₽
            </p>
          </div>
        </div>

        <Button 
          className="w-full mt-4" 
          onClick={goToNextStep}
        >
          Продолжить
        </Button>
      </div>
    </div>
  )
}