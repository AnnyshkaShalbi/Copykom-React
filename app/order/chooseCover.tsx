import { inter, tenor_sans } from "../ui/fonts";
import { blueColors, redColors, logos } from "@/app/lib/placeholder-data"
import Image from "next/image"
import CheckboxCircle from "../ui/common/checkboxCircle"
import { Button } from "../ui/common/button";

export default function ChooseCover() {
  return(
    <div className="flex flex-col gap-10">
      <ColorForCover />
      <CoverForDiploma />
      <LogoForCover />
      <FinalCover />
    </div>
  )
}

interface ItemTitleProps {
  index: number;
  title: string;
}

const ItemTitle = ({ index, title } : ItemTitleProps) => {
  return(
    <div className="flex gap-4 items-center">
      <span className={`${tenor_sans.className} 
        bg-[#F1F4F7] w-9 h-9 rounded-full flex justify-center items-center text-2xl`}>{index}</span>
      <p className={`${tenor_sans.className} text-lg uppercase`}>{title}</p>
    </div>
  )
}

const ColorForCover = () => {
  return(
    <div className="flex gap-14 items-center">
      <ItemTitle index={1} title="цвет" />
      <div className="flex gap-4 items-center">
        <CheckboxCircle color="red-dark" />
        <CheckboxCircle color="primary" />
      </div>
    </div>
  )
}

const CoverForDiploma = () => {
  return(
    <div>
      <ItemTitle index={2} title="обложка" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7 mt-6">
        {blueColors.map((item) => (
          <div key={item.id} className="group flex flex-col gap-2 cursor-pointer transition-all duration-300">
            <div className="h-56 bg-[#F1F4F7] flex items-center justify-center border-2 border-transparent border-solid 
              group-hover:border-primary transition-all duration-300 p-5">
              <Image
                width={128}
                height={177}
                src={item.image}
                alt={item.title}
              />
            </div>
            <h4 className="text-gray">{item.title}</h4>
            <p className="text-[#BEC7E2]">{item.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  )
} 

const LogoForCover = () => {
  return(
    <div>
      <ItemTitle index={3} title="добавь фирменную эмблему вуза" />
      <div className="flex flex-wrap gap-7 mt-6">
        {logos.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 cursor-pointer transition-all duration-300">
            <div className="h-24 flex items-center justify-center p-5 bg-[#F1F4F7] border-2 border-transparent border-solid 
              group-hover:border-primary transition-all duration-300">
              {item.image && 
                <Image 
                width={60}
                height={60}
                alt={item.title}
                src={item.image}
              />}
            </div>
            <h4 className="text-gray">{item.title}</h4>
            {item.price && <p className="text-primary">{item.price} ₽</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

const FinalCover = () => {
  return(
    <div>
      <ItemTitle index={4} title="твой выбор" />
      <div className="mt-6 bg-[#F1F4F7] p-5 max-w-[615px]">
        <div className="grid grid-cols-[35%_65%]">
          <div>
            <Image 
              width={79}
              height={110}
              src="/covers/blue/withoutEmblems/empty.png"
              alt="Выбранная обложка для диплома"
            />
          </div>

          <div>
            <p className="text-gray">Синяя обложка</p>
            <p className="text-gray">С тиснением МД</p>
            <p className="text-gray">МЭИ</p>
            <p className={`${inter.className} text-primary text-lg`}>650 ₽</p>
          </div>
        </div>

        <Button className="w-full mt-4">Продолжить</Button>
      </div>
    </div>
  )
}