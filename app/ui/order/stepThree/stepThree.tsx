import FormOrder from "./formOrder"
import { tenor_sans } from "../../fonts"

export default function StepThree() {

  return(
    <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-[57%_38%] lg:gap-12">
      <FormOrder />
      <div className="pb-6 lg:pl-7 lg:pt-7 border-b-2 lg:border-b-0 lg:border-l-2 border-primary flex justify-start lg:justify-end items-start">
        <p className={`uppercase text-gray text-base lg:text-[1.1875rem] max-w-full lg:max-w-[19.6875rem] ${tenor_sans.className}`}>
          после оформления заказа ты можешь оплатить его онлайн и забрать свой диплом без надоедливой очереди
        </p>
      </div>
    </div>
  )
}

 



