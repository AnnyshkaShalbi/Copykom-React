import TitleForServices from "@/app/ui/common/titleForServices";
import Tabs from "@/app/ui/common/tabs";
import TableDrawings from "./table";
import LeaveRequest from "../leaveRequest";

const tabsDrawings = [
  {
    label:  "Прайс-лист",
    content: <TableDrawings />
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
      <Tabs tabs={tabsDrawings} className="lg:hidden" />
      <DrawingsMobile />
    </div>
  );
}

const DrawingsMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableDrawings />
      <LeaveRequest />
    </div>
  )
}
