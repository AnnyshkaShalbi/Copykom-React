import TitleForServices from "@/app/ui/common/titleForServices";
import TablePresentations from "./table";
import LeaveRequest from "../leaveRequest";
import Tabs from "@/app/ui/common/tabs";

const tabsCopydoc = [
  {
    label:  "Прайс-лист",
    content: <TablePresentations />
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
        title="Печать презентаций"
        subtitle="Если тебе нужна презентация, распечатанная в хорошем качестве, то ты по адресу." />
      <Tabs tabs={tabsCopydoc} className="lg:hidden" />
      <CopydocMobile />
    </div>
  );
}

const CopydocMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TablePresentations />
      <LeaveRequest />
    </div>
  )
}