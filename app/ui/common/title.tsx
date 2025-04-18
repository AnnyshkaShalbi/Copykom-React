import { tenor_sans } from "../fonts";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Title({title, subtitle, className}: TitleProps) {
  return(
    <div className={`mb-6 ${className}`}>
      <h1 className={`${tenor_sans.className} uppercase text-lg sm:text-3xl mb-3`}>{title}</h1>
      { subtitle && <p className="text-base text-gray max-w-2xl">{subtitle}</p> }
    </div>
  )
}