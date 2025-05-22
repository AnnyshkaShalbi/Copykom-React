import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import Tabs from "@/app/ui/common/tabs";
import TableScanning from "../../ui/services/scanning/table";
import LeaveRequest from "../../ui/services/leaveRequest";

export const metadata: Metadata = {
  title: 'Сканирование документов в Москве | Копиком',
  description: 'Любые документы могут быть отсканированы как в ч/б варианте, так и в цвете!',
  openGraph: {
    title: 'Сканирование документов в Москве | Копиком',
    description: 'Любые документы могут быть отсканированы как в ч/б варианте, так и в цвете!',
  },
};

const tabsScanning = [
  {
    label:  "Прайс-лист",
    content: <TableScanning />
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
        title="Сканирование документов"
        subtitle="Любые документы могут быть отсканированы как в ч/б варианте, так и в цвете! " />
      <Tabs tabs={tabsScanning} className="lg:hidden" />
      <DrawingsMobile />
    </div>
  );
}

const DrawingsMobile = () => {
  return( 
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableScanning />
      <LeaveRequest />
    </div>
  )
}
