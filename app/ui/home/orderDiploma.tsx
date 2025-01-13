import Image from "next/image"
import { inter, tenor_sans } from "../fonts"; 
import { steps } from "@/app/lib/placeholder-data"
import clsx from 'clsx';
import Link from "next/link";


export default function OrderDiploma() {
  return(
    <div className="relative">
      <div className="wrapper flex flex-col justify-between px-5">
        <Subtitle />
        <Title />
        <PS />
        <StepByStep />
        <OrderDiplomaPrinting />
      </div>
      {/* <CoverDiplom /> */}
    </div>
  )
}

const Subtitle = () => {
  return(
    <div className="mb-4">
      <p className="text-[#464F6A] italic">
        <span className="block md:hidden">Хей, студент!</span>
        <span className="hidden md:block md:mb-2">
          Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом?
        </span>
      </p>
      <p className="text-[#464F6A] italic hidden md:block">Не парься —</p>
    </div>
  )
} 


const Title = () => {
  return (
    <>
      <h1 className={`${tenor_sans.className} text-2xl`}>
        <p>ЗАКАЖИ <span className="text-primary">ПЕЧАТЬ</span></p>
        <p><span className="text-primary">ДИПЛОМА</span> У НАС</p>
      </h1>
    </>
  );
};

const PS = () => {
  return(
    <div className="bg-[#E6ECFF] px-4 py-5 my-4">
      <p className={`${inter.className} text-xs text-primary`}>P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
    </div>
  )
}

const StepByStep = () => {
  return(
    <div className="flex flex-col gap-2 mb-4">
      {
        steps.map((item, index) => {
          return(
            <div key={index} className="flex gap-4 items-center">
              <span className={clsx(
                'bg-[#F1F4F7] w-6 h-6 flex items-center justify-center rounded-full', {
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
              <p className="text-xs">{item.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const OrderDiplomaPrinting = () => {
  return(
    <Link href={'/'} className="rounded-full bg-primary w-[128px] h-[128px] flex justify-center items-center mx-auto">
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

const CoverDiplom = () => {
  return (
    <div className="sm:absolute bottom-0 right-0 w-full md:w-auto">
      <div className="block sm:hidden">
        <Image
          src="/diplomsMain/img-360x840.png"
          alt="Обложка диплома"
          width={360}
          height={840}
          className="w-full"
          priority
        />
      </div>

      <div className="hidden sm:block md:hidden">
        <Image
          src="/diplomsMain/img-600x900.png"
          alt="Обложка диплома"
          width={600}
          height={900}
          className="w-full"
          priority
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <Image
          src="/diplomsMain/img-980x700.png"
          alt="Обложка диплома"
          width={980}
          height={700}
          className="w-full"
          priority
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/diplomsMain/img-1920x1080.png"
          alt="Обложка диплома"
          width={1920}
          height={1080}
          className="w-full"
          priority
        />
      </div>
    </div>
  );
};