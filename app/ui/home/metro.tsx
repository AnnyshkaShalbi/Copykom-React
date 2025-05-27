import Image from "next/image"
import { tenor_sans } from "../fonts";
import { Office } from '@/app/lib/types/offices';

interface MetroProps {
  offices: Office[];
}

export default function Metro({ offices }: MetroProps) {
  

  return(
    <div className="wrapper flex flex-col justify-between px-5 gap-3
      md:grid md:grid-cols-2 md:gap-6">
      {offices.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <Image
            width={45}
            height={41}
            src="../metro.svg"
            alt="Иконка метро"
          />
          <div>
            <h3 className={`${tenor_sans.className} uppercase text-xl mt-2`}>{item.title}</h3>
            <p className="text-gray">{item.address}</p>
            <p>{item.opening_hours}</p>
          </div>
        </div>
      ) )}
    </div>
  )
}