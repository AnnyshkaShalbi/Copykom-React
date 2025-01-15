import TitleForServices from "@/app/ui/common/titleForServices";
import Tabs from "@/app/ui/common/tabs";
import Table from "./table";

const LeaveRequest = () => {
  return(
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit modi temporibus saepe repudiandae veniam dicta iure quae aliquid sequi. Magnam debitis libero ad optio.</p>
    </div>
  )
}

const tabsDrawings = [
  {
    label:  "Прайс-лист",
    content: <Table />
  },
  {
    label:  "Оставь заявку",
    content: <LeaveRequest />
  },
]

export default function Page() {
  return(
    <div className="wrapper flex flex-col justify-between px-5">
      <TitleForServices 
        title="Печать чертежей"
        subtitle="Любые чертежи могут быть распечатаны в высоком качестве, все форматы от А4 до А0+, а также нестандартные форматы чертежей!" />
      <Tabs tabs={tabsDrawings} />
    </div>
  );
}

