import { metro } from "@/app/lib/placeholder-data"
import Image from "next/image"

export default function Metro() {
  return(
    <div className="flex flex-col">
      {metro.map((item) => (
        <div key={item.title} className="flex items-start gap-2">
          <Image
            width={20}
            height={20}
            src="../metro.svg"
            alt="Screenshots of the dashboard project showing modile version"
          />
          <div>
            <p className="text-red-950">{item.title}</p>
            <p className="text-red-950">{item.address}</p>
            <p className="text-red-950">{item.openinghouse}</p>
          </div>
        </div>
      ) )}
    </div>
  )
}