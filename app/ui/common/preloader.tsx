export default function Preloader() {
  return (
    <div className="fixed inset-0 w-full h-full z-50 bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[50px] h-[50px] leading-[19px] relative">
          {/* Квадратики прелоадера */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-primary opacity-0 animate-preloader-square"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary opacity-0 animate-preloader-square animation-delay-100"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary opacity-0 animate-preloader-square animation-delay-200"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-primary opacity-0 animate-preloader-square animation-delay-300"></div>
        </div>
      </div>
    </div>
  );
}