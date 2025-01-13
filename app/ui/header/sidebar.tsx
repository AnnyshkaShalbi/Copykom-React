import NavLinksSidebar from "./navLinksSidebar"
import clsx from "clsx";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={clsx(
        "fixed top-[74px] left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-50",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        close
      </button>
      <NavLinksSidebar />
    </div>
  );
}