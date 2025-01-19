import TitleForServices from "@/app/ui/common/titleForServices";
import TableBrochure from "./table";
import LeaveRequest from "../leaveRequest";
import Tabs from "@/app/ui/common/tabs";

const tabsBrochure = [
  {
    label:  "Прайс-лист",
    content: <TableBrochure />
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
        title="брошюровка на пластиковую пружину"
        subtitle="Сброшюруем твой документ быстро, доступные форматы: А5, А4, А3." />
      <Tabs tabs={tabsBrochure} className="lg:hidden" />
      <BrochureMobile />
    </div>
  );
}

const BrochureMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableBrochure />
      <LeaveRequest />
    </div>
  )
}