import Image from "next/image"
import { inter, tenor_sans } from "../fonts"; 
import { steps } from "@/app/lib/placeholder-data"
import clsx from 'clsx';
import Link from "next/link";

export default function Maps() {
  return(
    <>
      <Title />
    </>
  )
}

const Title = () => {
  return(
    <div>
      <h2 className={`${tenor_sans.className} text-2xl flex justify-center items-center`}>НАШИ К
        <span className="bg-primary rounded-full w-[20px] h-[20px]"></span>
        ПИЦЕНТРЫ</h2>
    </div>
  )
}
