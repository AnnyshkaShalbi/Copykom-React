import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import Tabs from "@/app/ui/common/tabs";
import TablePatterns from "@/app/ui/services/patterns/table";
import LeaveRequest from "@/app/ui/services/leaveRequest";

export const metadata: Metadata = {
  title: 'Печать лекал и выкроек в Москве | Копиком',
  description: 'Распечатаем лекала и выкройки любой длины, даже свыше 3-х метров и в реальном размере. ',
  alternates: {
    canonical: 'https://copykom.ru/services/patterns',
  },
  openGraph: {
    title: 'Печать лекал и выкроек в Москве | Копиком',
    description: 'Распечатаем лекала и выкройки любой длины, даже свыше 3-х метров и в реальном размере. ',
    url: 'https://copykom.ru/services/patterns',
  },
};

const tabsPatterns = [
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
      <Title 
        title="Печать лекал и выкроек"
        subtitle="Распечатаем лекала и выкройки любой длины, даже свыше 3-х метров и в реальном размере (да-да, мы умеем это делать)." />
      <Tabs tabs={tabsPatterns} className="lg:hidden" />
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
