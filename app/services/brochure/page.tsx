import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import TableBrochure from "../../ui/services/brochure/table";
import LeaveRequest from "../../ui/services/leaveRequest";
import Tabs from "@/app/ui/common/tabs";

export const metadata: Metadata = {
  title: 'Брошюровка на пластиковую пружину в Москве | Копиком',
  description: 'Сброшюруем твой документ быстро, доступные форматы: А5, А4, А3.',
  alternates: {
    canonical: 'https://copykom.ru/services/brochure',
  },
  openGraph: {
    title: 'Брошюровка на пластиковую пружину в Москве | Копиком',
    description: 'Сброшюруем твой документ быстро, доступные форматы: А5, А4, А3.',
    url: 'https://copykom.ru/services/brochure',
  },
};

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
      <Title 
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