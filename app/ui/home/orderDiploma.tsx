import Image from "next/image"
import { inter, tenor_sans } from "../fonts"; 
import { steps } from "@/app/lib/placeholder-data"
import clsx from 'clsx';
import Link from "next/link";

export default function OrderDiploma() {
  return(
    <>
      <Title />
      <PS />
      <StepByStep />
      <OrderDiplomaPrinting />
    </>
  )
}



const Title = () => {
  return (
    <>
      <p className="text-[#464F6A]">Хей, студент!</p>

      <h1 className={`${tenor_sans.className} text-2xl`}>
        <p>ЗАКАЖИ <span className="text-primary">ПЕЧАТЬ</span></p>
        <p><span className="text-primary">ДИПЛОМА</span> У НАС</p>
      </h1>
    </>
  );
};

const PS = () => {
  return(
    <div className="bg-[#E6ECFF] px-4 py-5">
      <p className={`${inter.className} text-xs text-primary`}>P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
    </div>
  )
}

const StepByStep = () => {
  return(
    <div className="flex flex-col gap-5">
      {
        steps.map((item, index) => {
          return(
            <div key={index} className="flex gap-4 items-center">
              <span className={clsx(
                'bg-[#F1F4F7] w-[30px] h-[30px] flex items-center justify-center rounded-full', {
                  'bg-primary': index === steps.length - 1,
                },
              )}>
                {item.index ? `${index + 1}` : 
                  <Image
                    width={11}
                    height={7}
                    src="/done.svg"
                    alt="Иконка"
                  />
                }
              </span>
              <p>{item.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const OrderDiplomaPrinting = () => {
  return(
    <Link href={'/'} className="rounded-full bg-primary w-[128px] h-[128px] flex justify-center items-center">
      <div className="">
        <Image
          width={15}
          height={15}
          src="/arrowTR.svg"
          alt="Иконка"
        />
        <p className="text-white text-xs leading-4">ЗАКАЖИ</p>
        <p className="text-white text-xs leading-4">ПЕЧАТЬ</p>
        <p className="text-white text-xs leading-4">ДИПЛОМА</p>
      </div>
    </Link>
  )
}