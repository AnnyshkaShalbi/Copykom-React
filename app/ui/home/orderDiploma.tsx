import Image from "next/image"
import { inter, tenor_sans } from "../fonts"; 
import { steps } from "@/app/lib/placeholder-data"
import clsx from 'clsx';
import Link from "next/link";


export default function OrderDiploma() {
  return(
    <div className="relative lg:pb-72">
      <div className="wrapper flex flex-col justify-between px-5">
        <Subtitle />
        <Title />
        <PS />
        <div className="flex flex-col sm:flex-row sm:mt-4">
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
      <h1 className={`${tenor_sans.className} text-2xl sm:text-6xl sm:leading-[68px]`}>
        <p>ЗАКАЖИ <span className="text-primary">ПЕЧАТЬ</span></p>
        <p><span className="text-primary">ДИПЛОМА</span> У НАС</p>
      </h1>
    </>
  );
};

const PS = () => {
  return(
    <div className="bg-[#E6ECFF] px-4 py-5 my-4 sm:order-last">
      <p className={`${inter.className} text-xs sm:text-base text-primary`}>P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
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
    <Link href={'/'} className="rounded-full bg-primary w-[128px] h-[128px] lg:w-48 lg:h-48 flex justify-center items-center mx-auto">
      <div className="">
        <Image
          width={15}
          height={15}
          src="/arrowTR.svg"
          alt="Иконка"
        />
        <p className="text-white text-xs lg:text-xl leading-4">ЗАКАЖИ</p>
        <p className="text-white text-xs lg:text-xl leading-4">ПЕЧАТЬ</p>
        <p className="text-white text-xs lg:text-xl leading-4">ДИПЛОМА</p>
      </div>
    </Link>
  )
}

const CoverDiplom = () => {
  return (
    <div className="w-full">
      <picture>
        <source
          srcSet="/diplomsMain/img-1920x1080.png"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="/diplomsMain/img-980x700.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/diplomsMain/img-600x900.png"
          media="(min-width: 600px)"
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
          className="w-full lg:absolute lg:top-0 lg:bottom-0 lg:-z-10"
          priority
        />
      </picture>
    </div>
  );
};