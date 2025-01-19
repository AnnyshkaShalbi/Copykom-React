import TitleForServices from "@/app/ui/common/titleForServices";
import TableProjectdoc from "./table";
import LeaveRequest from "../leaveRequest";
import Tabs from "@/app/ui/common/tabs";

const tabsBrochure = [
  {
    label:  "Прайс-лист",
    content: <TableProjectdoc />
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
        title="Печать проектной документации"
        subtitle="Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете." />
      <Tabs tabs={tabsBrochure} className="lg:hidden" />
      <BrochureMobile />
    </div>
  );
}

const BrochureMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableProjectdoc />
      <LeaveRequest />
    </div>
  )
}