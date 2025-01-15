import Image from "next/image"
import { inter, tenor_sans } from "../fonts"; 
import { steps } from "@/app/lib/placeholder-data"
import clsx from 'clsx';
import Link from "next/link";


export default function OrderDiploma() {
  return(
    <div className="relative md:pb-72 lg:pb-32 lg:border-b lg:border-primary">
      <div className="wrapper flex flex-col justify-between px-5">
        <Subtitle />
        <Title />
        <PS />
        <div className="flex flex-col sm:flex-row sm:mt-4 md:relative">
          <StepByStep />
          <OrderDiplomaPrinting />
        </div>
      </div>
      <CoverDiplom />
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
      <h1 className={`${tenor_sans.className} text-2xl sm:text-6xl sm:leading-[68px] lg:text-7xl lg:leading-[80px]`}>
        <p>ЗАКАЖИ <span className="text-primary">ПЕЧАТЬ</span></p>
        <p><span className="text-primary">ДИПЛОМА</span> У НАС</p>
      </h1>
    </>
  );
};

const PS = () => {
  return(
    <div className="bg-[#E6ECFF] p-4 my-4 sm:order-last md:max-w-96 md:px-6">
      <p className={`${inter.className} text-xs sm:text-base md:text-xl text-primary`}>P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
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
                'text-xs sm:text-base bg-[#F1F4F7] w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full', {
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
              <p className="text-xs sm:text-base">{item.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const OrderDiplomaPrinting = () => {
  return(
    <Link href={'/'} className="rounded-full bg-primary w-[128px] h-[128px] flex justify-center items-center mx-auto
      md:w-48 md:h-48 md:absolute md:right-[10%] md:top-0
      lg:-top-full">
      <div className="">
        <Image
          width={15}
          height={15}
          src="/arrowTR.svg"
          alt="Иконка"
        />
        <p className="text-white text-xs md:text-xl leading-4">ЗАКАЖИ</p>
        <p className="text-white text-xs md:text-xl leading-4">ПЕЧАТЬ</p>
        <p className="text-white text-xs md:text-xl leading-4">ДИПЛОМА</p>
      </div>
    </Link>
  )
}

const CoverDiplom = () => {
  return (
    <div className="w-full">
      <picture>
        <source
          srcSet="/diplomsMain/img-1920х1080.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/diplomsMain/img-980x700.png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/diplomsMain/img-360x840.png"
          media="(min-width: 360px)"
        />
        <Image
          src="/diplomsMain/img-360x840.png"
          alt="Заказать печать диплома | Копиком - копицентр для студентов"
          width={360}
          height={840}
          className="w-full md:absolute md:right-0 md:bottom-0 md:-z-10 lg:top-auto lg:w-auto lg:object-contain lg:h-[85%]"
          priority
        />
      </picture>
    </div>
  );
};