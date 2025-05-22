import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import Tabs from "@/app/ui/common/tabs";
import TableHardcover from "../../ui/services/hardcover/table";
import LeaveRequest from "../../ui/services/leaveRequest";

export const metadata: Metadata = {
  title: 'Твёрдый переплёт дипломов в Москве | Копиком',
  description: 'Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете',
  alternates: {
    canonical: 'https://copykom.ru/services/hardcover',
  },
  openGraph: {
    title: 'Твёрдый переплёт дипломов в Москве | Копиком',
    description: 'Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете',
    url: 'https://copykom.ru/services/hardcover',
  },
};

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
      <Title 
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
