import Maps from "./ui/home/maps";
import Metro from "./ui/home/metro";
import OrderDiploma from "./ui/home/orderDiploma";
import Preloader from "@/./app/ui/common/preloader"

export default function Home() {

  return (
    <div className="pb-5">
      {/* <Preloader /> */}
      <OrderDiploma />
      <Maps />
      <Metro />
    </div>
  );
}
