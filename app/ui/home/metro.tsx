import { metro } from "@/app/lib/placeholder-data"
import Image from "next/image"
import { inter, tenor_sans } from "../fonts";

export default function Metro() {
  return(
    <div className="flex flex-col">
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