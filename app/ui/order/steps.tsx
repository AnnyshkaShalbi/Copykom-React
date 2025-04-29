import { inter, tenor_sans } from "../fonts";
import { useOrder } from '@/app/context/OrderContext';

const steps = [
  {
    index: 1,
    title: "выбери обложку",
    desc: "Выбери понравившийся вариант и цвет обложки",
  },
  {
    index: 2,
    title: "загрузи файл",
    desc: "",
  },
  {
    index: 3,
    title: "оформи заказ",
    desc: "",
  },
]

interface StepsProps {
  active: number;
}

export default function Steps({ active }: StepsProps) {
  const {
    currentStep,
  } = useOrder();

  return(
    <div className="flex gap-3 sm:gap-10 mb-6 sm:mb-10">
      {steps.map((item) => {
        const circleClasses = [
          `${tenor_sans.className} w-7 h-7 sm:w-9 sm:h-9 rounded-full flex justify-center items-center text-white text-base sm:text-2xl`,
          active === item.index 
            ? 'bg-primary' // активный шаг
            : active > item.index 
              ? 'bg-green' // пройденный шаг
              : 'bg-[#BEC7E2]' // будущий шаг
        ].join(' ');

        return(
          <div key={item.index} className="flex min-w-auto lg:min-w-72 items-start gap-4">
            <span className={circleClasses}>{item.index}</span>
            <div className={`${currentStep != item.index && 'hidden'} lg:block`}>
              <span className={`${tenor_sans.className} text-sm sm:text-2xl uppercase whitespace-nowrap`}>{item.title}</span>
              <p className={`${inter.className} pt-2 text-xs sm:text-sm text-gray max-w-60`}>{item.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}