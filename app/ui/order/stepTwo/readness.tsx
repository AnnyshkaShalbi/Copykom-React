import { useOrder } from '@/app/context/OrderContext';
import { tenor_sans } from '../../fonts';
import { Button } from '../../common/button';

export default function Readness() {
  const {
      getTotalPrice,
      goToNextStep
    } = useOrder();

  return(
    <div className="
      bg-primary-light relative mt-10 w-[98%] pt-8 pr-6 pb-5 pl-8
      before:content-[''] before:absolute before:w-full before:h-full 
      before:top-[15px] before:left-[15px] before:border-2 before:border-primary
      ">
      <h6 className="text-dark leading-6 mb-3">Готовность 24.04.2025 после 10:00</h6>

      <div className="flex justify-between relative gap-4 z-[1]">
        <div className="w-[400px] flex flex-col justify-start gap-3">
          <div className="flex items-center justify-between">
            <p className="">Обложка</p>
            <span className="">{getTotalPrice()} ₽</span>
          </div>
        </div>

        <div className='flex flex-col items-end justify-end gap-6'>
          <span className={`${tenor_sans.className} text-dark text-[3.5rem] leading-[4.375rem]`}>
            {getTotalPrice()}руб
          </span>

          <Button onClick={goToNextStep}>Продолжить</Button>
        </div>
      </div>
    </div>
  )
}