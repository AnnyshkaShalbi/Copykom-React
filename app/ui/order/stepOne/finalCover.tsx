'use client'

import { inter } from "../../fonts";
import { Button } from "../../common/button";
import ItemTitle from "./itemTitle";
import Image from "next/image";
import { useOrder } from '@/app/context/OrderContext';
import { useMemo } from "react";
import { logos } from "@/app/lib/placeholder-data";

export default function FinalCover() {
  const {
    selectedColor,
    getFinalCoverPath,
    getTotalPrice,
    getEmbossingType,
    selectedLogo,
    goToNextStep
  } = useOrder();

  const selectedLogoItem = useMemo(() => {
    return logos.find(item => item.id === selectedLogo) || logos[0];
  }, [selectedLogo]);

  const embossingType = getEmbossingType();
  const showEmbossingText = embossingType !== "Без тиснения";

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
            <p className="text-gray">
              {selectedColor === 'bg-primary' ? 'Синяя' : 'Красная'} обложка
            </p>
            {showEmbossingText ? (
              <p className="text-gray">С тиснением {embossingType}</p>
            ) : <p className="text-gray">Без тиснения</p>}
            <p className="text-gray">
              {selectedLogoItem.id === 0 ? "Без эмблемы" : selectedLogoItem.title}
            </p>
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