import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import TableProjectdoc from "../../ui/services/projectdoc/table";
import LeaveRequest from "../../ui/services/leaveRequest";
import Tabs from "@/app/ui/common/tabs";

export const metadata: Metadata = {
  title: 'Печать проектной документации в Москве | Копиком',
  description: 'Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.',
  alternates: {
    canonical: 'https://copykom.ru/services/projectdoc',
  },
  openGraph: {
    title: 'Печать проектной документации в Москве | Копиком',
    description: 'Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.',
    url: 'https://copykom.ru/services/projectdoc',
  },
};

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
      <Title 
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