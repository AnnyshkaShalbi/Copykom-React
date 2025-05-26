import Maps from "@/app/ui/home/maps";
import Metro from "@/app/ui/home/metro";
import OrderDiploma from "@/app/ui/home/orderDiploma";

export default function Home() {
  return (
    <div className="pb-5">
      <OrderDiploma />
      <Maps />
      <Metro />
    </div>
  );
}
