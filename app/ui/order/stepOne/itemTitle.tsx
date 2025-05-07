import { tenor_sans } from "../../fonts";

interface ItemTitleProps {
  index: number;
  title: string;
}

export default function ItemTitle({ index, title } : ItemTitleProps) {
  return(
    <div className="flex gap-4 items-center">
      <span className={`${tenor_sans.className} 
        bg-light w-7 h-7 sm:w-9 sm:h-9 rounded-full flex justify-center items-center text-base sm:text-2xl`}>{index}</span>
      <p className={`${tenor_sans.className} text-sm sm:text-lg uppercase`}>{title}</p>
    </div>
  )
}