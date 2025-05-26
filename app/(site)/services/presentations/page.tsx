import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import TablePresentations from "@/app/ui/services/presentation/table";
import LeaveRequest from "@/app/ui/services/leaveRequest";
import Tabs from "@/app/ui/common/tabs";

export const metadata: Metadata = {
  title: 'Печать презентаций в Москве | Копиком',
  description: 'Печать презентаций в Москве | Копиком',
  alternates: {
    canonical: 'https://copykom.ru/services/presentations',
  },
  openGraph: {
    title: 'Печать презентаций в Москве | Копиком',
    description: 'Печать презентаций в Москве | Копиком',
    url: 'https://copykom.ru/services/presentations',
  },
};

const tabsPresentations = [
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
      <Title 
        title="Печать презентаций"
        subtitle="Если тебе нужна презентация, распечатанная в хорошем качестве, то ты по адресу." />
      <Tabs tabs={tabsPresentations} className="lg:hidden" />
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