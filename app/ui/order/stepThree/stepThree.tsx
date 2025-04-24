import FormOrder from "./formOrder"
import { tenor_sans } from "../../fonts"

export default function StepThree() {

  return(
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[57%_38%] lg:gap-12">
      <FormOrder />
      <div className="pl-7 pt-7 border-l-2 border-primary flex justify-end items-start">
        <p className={`uppercase text-gray text-[1.1875rem] max-w-[19.6875rem] ${tenor_sans.className}`}>после оформления заказа ты можешь оплатить его онлайн и забрать свой диплом без надоедливой очереди</p>
      </div>
    </div>
  )
}

 



