import TitleForServices from "@/app/ui/common/titleForServices";
import Tabs from "@/app/ui/common/tabs";
import TablePatterns from "./table";
import LeaveRequest from "../leaveRequest";

const tabsDrawings = [
  {
    label:  "Прайс-лист",
    content: <TablePatterns />
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
        title="Печать лекал и выкроек"
        subtitle="Распечатаем лекала и выкройки любой длины, даже свыше 3-х метров и в реальном размере (да-да, мы умеем это делать)." />
      <Tabs tabs={tabsDrawings} className="lg:hidden" />
      <DrawingsMobile />
    </div>
  );
}

const DrawingsMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TablePatterns />
      <LeaveRequest />
    </div>
  )
}
