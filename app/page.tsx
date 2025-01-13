import Maps from "./ui/home/maps";
import Metro from "./ui/home/metro";
import OrderDiploma from "./ui/home/orderDiploma";

export default function Home() {
  return (
    <div className="py-5">
      <OrderDiploma />
      <Maps />
      <Metro />
    </div>
  );
}
