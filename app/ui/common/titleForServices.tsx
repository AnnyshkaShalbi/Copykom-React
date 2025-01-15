import { tenor_sans } from "../fonts";

interface TitleProps {
  title: string;
  subtitle: string;
}

export default function TitleForServices({title, subtitle}: TitleProps) {
  return(
    <div>
      <h1 className={`${tenor_sans.className} uppercase text-lg mb-3`}>{title}</h1>
      <p className="text-base text-[#464F6A]">{subtitle}</p>
    </div>
  )
}