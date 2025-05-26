import { Metadata } from "next";
import Sidebar from "@/app/ui/admin/Sidebar"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
  },
};

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6 sm:ml-64 mt-10 sm:mt-0">
        {children}
      </div>
    </div>
  );
}