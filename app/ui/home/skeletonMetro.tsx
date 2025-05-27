export default function MetroSkeleton() {
  return (
    <div className="wrapper flex flex-col justify-between px-5 gap-3 md:grid md:grid-cols-2 md:gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="relative w-[45px] h-[41px] bg-grey-light rounded-md overflow-hidden">
            <div className="shimmer-effect" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="relative h-6 w-3/4 bg-grey-light rounded-md overflow-hidden">
              <div className="shimmer-effect" />
            </div>
            <div className="relative h-4 w-full bg-grey-light rounded-md overflow-hidden">
              <div className="shimmer-effect" />
            </div>
            <div className="relative h-4 w-2/3 bg-grey-light rounded-md overflow-hidden">
              <div className="shimmer-effect" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}