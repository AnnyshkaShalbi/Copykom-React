import { logos } from "@/app/lib/placeholder-data"
import Image from "next/image"
import ItemTitle from "./itemTitle"
import { useOrder } from '@/app/context/OrderContext';


export default function LogoForCover() {
  const {
    selectedLogo,
    setSelectedLogo,
  } = useOrder();

  return(
    <div>
      <ItemTitle index={3} title="добавь фирменную эмблему вуза" />
      <div className="flex flex-wrap gap-7 mt-6">
        {logos.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col gap-2 cursor-pointer transition-all duration-300" 
            onClick={() => setSelectedLogo(item.id)}
          >
            <div 
              className={`
                h-24 flex items-center justify-center p-5 bg-light border-2 border-solid 
                transition-all duration-300 relative
                ${selectedLogo === item.id 
                  ? 'border-primary'
                  : 'border-transparent group-hover:border-primary'}
              `}
              onClick={() => setSelectedLogo(item.id)}
            >
              {item.image && 
                <Image 
                  width={60}
                  height={60}
                  alt={item.title}
                  src={item.image}
                />
              }
              {/* Индикатор выбранного варианта */}
              {selectedLogo === item.id && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
            <h4 className={`${selectedLogo === item.id ? 'text-primary' : 'text-gray'}`}>{item.title}</h4>
            {item.price && <p className="text-primary">{item.price} ₽</p>}
          </div>
        ))}
      </div>
    </div>
  )
}