interface CheckboxProps {
  color: string;
  active: string;
  onClick: () => void;
}

export default function CheckboxCircle({ color, active, onClick }: CheckboxProps) {
  return (
    <div 
      className={`
        ${color} 
        rounded-full w-6 h-6 
        relative cursor-pointer
        flex items-center justify-center
        transition-all duration-100
        hover:brightness-90
        active:brightness-75
      `}
      onClick={onClick}
    >
      {/* Внутренний белый кружок с анимацией */}
      {active === color && (
        <div 
          className="
            absolute w-2.5 h-2.5 
            bg-white rounded-full
            top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            animate-scale-in
          "
        />
      )}
    </div>
  );
}