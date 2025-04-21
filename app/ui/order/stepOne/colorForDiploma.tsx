import { blueColors, redColors } from "@/app/lib/placeholder-data"
import ItemTitle from './itemTitle'
import Image from "next/image"

interface CoverForDiplomaProps {
  selectedColor: string;
  selectedCover: number;
  setSelectedCover: (id: number) => void;
}

export default function CoverForDiploma({ 
  selectedColor, 
  selectedCover,
  setSelectedCover 
}: CoverForDiplomaProps) {
  const currentImages = selectedColor === 'bg-red-dark' ? redColors : blueColors;

  return(
    <div>
      <ItemTitle index={2} title="обложка" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7 mt-6">
        {currentImages.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col gap-2 cursor-pointer transition-all duration-300"
          >
            <div 
              className={`
                h-56 bg-[#F1F4F7] flex items-center justify-center border-2 border-solid
                transition-all duration-300 p-5 relative
                ${selectedCover === item.id 
                  ? 'border-primary' 
                  : 'border-transparent group-hover:border-primary'
                }
              `}
              onClick={() => setSelectedCover(item.id)}>
              <Image
                width={128}
                height={177}
                src={item.image}
                alt={item.title}
              />
              {/* Индикатор выбранного варианта */}
              {selectedCover === item.id && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
            <h4 className={`${selectedCover === item.id ? 'text-primary' : 'text-gray'}`}>
              {item.title}
            </h4>
            <p className="text-[#BEC7E2]">{item.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  )
}