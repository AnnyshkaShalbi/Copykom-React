import { tenor_sans } from "../fonts";

interface TitleProps {
  title: string;
  subtitle: string;
}

export default function TitleForServices({title, subtitle}: TitleProps) {
  return(
    <div className="mb-6">
      <h1 className={`${tenor_sans.className} uppercase text-lg sm:text-3xl mb-3`}>{title}</h1>
      <p className="text-base text-gray max-w-2xl">{subtitle}</p>
    </div>
  )
}