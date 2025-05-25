import Image from "next/image"
import { tenor_sans } from "../fonts"; 
import Link from "next/link";

export default function Maps() {
  return(
    <div id="map" className="py-12 sm:py-14 md:py-16 lg:py-20">
      <Title />
      <div>
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8083df1b3091544fa582203d1bc98d46fbc2d03dcebb92311d5ab3fe0072652&amp;source=constructor" 
          title="Наши копицентры находятся: Метро Авиамоторная, Метро Аэропорт, Метро Бауманская, Метро Октябрьская"
          width="100%" 
          height="345" 
          frameBorder="0"></iframe>
      </div>
    </div>
  )
}

const Title = () => {
  return(
    <div>
      <h2 className={`${tenor_sans.className} text-2xl sm:text-3xl md:text-5xl lg:text-6xl flex justify-center items-center mb-3 lg:mb-5 text-nowrap`}>НАШИ К
        <span className="bg-primary rounded-full w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"></span>
        ПИЦЕНТРЫ</h2>
      <Link
        target="_blank"
        href={'https://api.whatsapp.com/send/?phone=79154310666'}
        className="flex items-center gap-6 justify-center mb-6">
        <span className={`${tenor_sans.className} text-base sm:text-lg md:text-xl lg:text-3xl`}>+ 7 (915) 431-06-66</span>
        <Image
          width={40}
          height={40}
          src="/socials/whatsapp.svg"
          alt="Whats'app для связи с Копикомой в мессенджере."
        />
      </Link>
    </div>
  )
}


