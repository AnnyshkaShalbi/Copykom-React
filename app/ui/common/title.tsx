import { tenor_sans } from "../fonts";

interface TitleProps {
  title: string;
  subtitle?: string | boolean;
  className?: string;
}

export default function Title({title, subtitle, className}: TitleProps) {
  return(
    <div className={`mb-5 sm:mb-6 ${className}`}>
      <h1 className={`${tenor_sans.className} uppercase text-lg sm:text-3xl`}>{title}</h1>
      { subtitle && <p className="text-xs sm:text-base text-gray max-w-2xl mt-3">{subtitle}</p> }
    </div>
  )
}