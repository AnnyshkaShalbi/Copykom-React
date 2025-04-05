import { inter, tenor_sans } from "../ui/fonts";

const steps = [
  {
    index: 1,
    title: "выбери обложку",
    desc: "Выбери понравившийся вариант и цвет обложки",
  },
  {
    index: 2,
    title: "загрузи файл",
    desc: "",
  },
  {
    index: 3,
    title: "оформи заказ",
    desc: "",
  },
]

export default function Steps() {
  return(
    <div className="flex gap-10 mb-10">
      {steps.map((item) => (
        <div key={item.index} className="flex min-w-72 items-start gap-4">
          <span className={`${tenor_sans.className} 
          bg-[#BEC7E2] w-9 h-9 rounded-full flex justify-center items-center text-white text-2xl`}>{item.index}</span>
          <div>
            <span className={`${tenor_sans.className} text-2xl uppercase`}>{item.title}</span>
            <p className={`${inter.className} pt-2 text-sm text-gray max-w-60`}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}