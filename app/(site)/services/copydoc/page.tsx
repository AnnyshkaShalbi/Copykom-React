import type { Metadata } from "next";
import Title from "@/app/ui/common/title";
import TableCopydoc from "@/app/ui/services/copydoc/table";
import LeaveRequest from "@/app/ui/services/leaveRequest";
import Tabs from "@/app/ui/common/tabs";

export const metadata: Metadata = {
  title: 'Печать документов в Москве | Копиком',
  description: 'Любые документы могут быть распечатаны в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.',
  alternates: {
    canonical: 'https://copykom.ru/services/copydoc',
  },
  openGraph: {
    title: 'Печать документов в Москве | Копиком',
    description: 'Любые документы могут быть распечатаны в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.',
    url: 'https://copykom.ru/services/copydoc',
  },
};

const tabsCopydoc = [
  {
    label:  "Прайс-лист",
    content: <TableCopydoc />
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
        title="Печать документов"
        subtitle="Любые документы могут быть распечатаны в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете." />
      <Tabs tabs={tabsCopydoc} className="lg:hidden" />
      <CopydocMobile />
    </div>
  );
}

const CopydocMobile = () => {
  return(
    <div className="hidden lg:grid lg:gap-6 lg:grid-cols-[60%_35%]">
      <TableCopydoc />
      <LeaveRequest />
    </div>
  )
}