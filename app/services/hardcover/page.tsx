import TitleForServices from "@/app/ui/common/titleForServices";
import Tabs from "@/app/ui/common/tabs";
import TableHardcover from "./table";
import LeaveRequest from "../leaveRequest";

const tabsHardcover = [
  {
    label:  "Прайс-лист",
    content: <TableHardcover />
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
        title="твёрдый переплёт дипломов"
        subtitle="Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете" />
      <Tabs tabs={tabsHardcover} className="lg:hidden" />
      <HardcoverMobile />
    </div>
  );
}

const HardcoverMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableHardcover />
      <LeaveRequest />
    </div>
  )
}
