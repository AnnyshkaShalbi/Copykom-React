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

// Функция для определения пути к финальной обложке
const getFinalCoverPath = (
  isRed: boolean,
  diplomWork: boolean,
  diplomProject: boolean,
  finalWork: boolean,
  masterThesis: boolean,
  logoTitle?: string
): string => {
  const colorPath = isRed ? 'red' : 'blue';
  const basePath = '/covers';

  // Определяем тип работы
  let workType = '';
  if (diplomWork) workType = 'diplomWork';
  else if (diplomProject) workType = 'diplomProject';
  else if (finalWork) workType = 'finalWork';
  else if (masterThesis) workType = 'masterThesis';
  else return `${basePath}/${colorPath}/withoutEmblems/empty.png`;

  // Если нет логотипа или "Без эмблемы"
  if (!logoTitle || logoTitle === "Без эмблемы") {
    return `${basePath}/${colorPath}/withoutEmblems/${workType}.png`;
  }

  // Маппинг названий логотипов на пути
  const logoPathMap: Record<string, string> = {
    "МАДИ": "madi",
    "МАИ": "mai",
    "Финашка": "fin",
    "Бауманка": "mgtu",
    "МЭИ": "mei"
  };

  const logoPath = logoPathMap[logoTitle];
  if (!logoPath) return `${basePath}/${colorPath}/withoutEmblems/${workType}.png`;

  return `${basePath}/${colorPath}/${logoPath}/${workType}.png`;
};

export default function FinalCover({ selectedColor, selectedCover, selectedLogo }: FinalCoverProps) {
  // Получаем выбранную обложку
  const currentColors = selectedColor === 'bg-primary' ? redColors : blueColors;
  const selectedCoverItem = currentColors.find(item => item.id === selectedCover) || currentColors[0];
  
  // Получаем выбранный логотип
  const selectedLogoItem = logos.find(item => item.id === selectedLogo) || logos[0];
  
  // Рассчитываем итоговую сумму
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

  // Получаем путь к финальной обложке
  const finalCoverPath = getFinalCoverPath(
    selectedColor === 'bg-red-dark',
    selectedCoverItem.diplomWork,
    selectedCoverItem.diplomProject,
    selectedCoverItem.finalWork,
    selectedCoverItem.masterThesis,
    selectedLogoItem.title === "Без эмблемы" ? undefined : selectedLogoItem.title
  );

  return(
    <div>
      <ItemTitle index={4} title="твой выбор" />
      <div className="mt-6 bg-[#F1F4F7] p-5 max-w-[615px]">
        <div className="grid grid-cols-[35%_65%] gap-4">
          <div className="flex items-center justify-center p-4 relative h-44">
            <Image 
              width={79}
              height={110}
              src={finalCoverPath}
              alt="Итоговая обложка для диплома"
              className="h-44 w-auto"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gray">
              {selectedColor === 'bg-primary' ? 'Красная' : 'Синяя'} обложка
            </p>
            <p className="text-gray">С тиснением {getEmbossingType()}</p>
            <p className="text-gray">
              {selectedLogoItem.id === 0 ? "Без эмблемы" : selectedLogoItem.title}
            </p>
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