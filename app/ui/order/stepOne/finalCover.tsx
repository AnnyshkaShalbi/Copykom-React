import { inter } from "../../fonts";
import { Button } from "../../common/button";
import ItemTitle from "./itemTitle";
import Image from "next/image"
import { blueColors, redColors, logos } from "@/app/lib/placeholder-data"

interface FinalCoverProps {
  selectedColor: string;
  selectedCover: number;
  selectedLogo: number;
}

export default function FinalCover({ selectedColor, selectedCover, selectedLogo }: FinalCoverProps) {
  // Получаем выбранную обложку
  const currentColors = selectedColor === 'bg-primary' ? blueColors : redColors;
  const selectedCoverItem = currentColors.find(item => item.id === selectedCover) || currentColors[0];
  
  // Получаем выбранный логотип
  const selectedLogoItem = logos.find(item => item.id === selectedLogo) || logos[0];
  
  // Рассчитываем итоговую сумму (обрабатываем случай когда price может быть boolean)
  const coverPrice = selectedCoverItem.price;
  const logoPrice = typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0;
  const totalPrice = coverPrice + logoPrice;

  // Определяем тип тиснения
  const getEmbossingType = () => {
    if (selectedCoverItem.masterThesis) return "МД";
    if (selectedCoverItem.diplomWork) return "ДР";
    if (selectedCoverItem.diplomProject) return "ДП";
    if (selectedCoverItem.finalWork) return "ВКР";
    return "Без тиснения";
  };

  return(
    <div>
      <ItemTitle index={4} title="твой выбор" />
      <div className="mt-6 bg-[#F1F4F7] p-5 max-w-[615px]">
        <div className="grid grid-cols-[35%_65%] gap-4">
          <div className="flex items-center justify-center bg-white p-4 relative">
            <Image 
              width={79}
              height={110}
              src={selectedCoverItem.image}
              alt="Выбранная обложка для диплома"
            />
            {selectedLogoItem.image && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image 
                  width={40}
                  height={40}
                  src={selectedLogoItem.image}
                  alt={selectedLogoItem.title}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gray">
              {selectedColor === 'bg-primary' ? 'Синяя' : 'Красная'} обложка
            </p>
            <p className="text-gray">С тиснением {getEmbossingType()}</p>
            {selectedLogoItem.id !== 0 && (
              <p className="text-gray">{selectedLogoItem.title}</p>
            )}
            <p className={`${inter.className} text-primary text-lg`}>
              {totalPrice} ₽
            </p>
          </div>
        </div>

        <Button className="w-full mt-4">Продолжить</Button>
      </div>
    </div>
  )
}