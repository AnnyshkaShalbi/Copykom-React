import { metro } from "@/app/lib/placeholder-data"
import Image from "next/image"
import { inter, tenor_sans } from "../fonts";

export default function Metro() {
  return(
    <div className="wrapper flex flex-col justify-between px-5 gap-3
      md:grid md:grid-cols-2 md:gap-6">
      {metro.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <Image
            width={45}
            height={41}
            src="../metro.svg"
            alt="Иконка метро"
          />
          <div>
            <h4 className={`${tenor_sans.className} uppercase text-xl mt-2`}>{item.title}</h4>
            <p className="text-[#464F6A]">{item.address}</p>
            <p>{item.openinghouse}</p>
          </div>
        </div>
      ) )}
    </div>
  )
}