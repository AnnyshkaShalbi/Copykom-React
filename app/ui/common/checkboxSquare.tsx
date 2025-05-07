import Image from 'next/image';

interface CheckboxSquareProps {
  active: boolean;
  onClick?: () => void;
}

export default function CheckboxSquare({ active, onClick }: CheckboxSquareProps) {
  return (
    <div
      className={`
        w-[22px] h-[22px] 
        ${active ? 'bg-primary' : 'bg-checkbox'}
        relative flex justify-center items-center 
        cursor-pointer select-none
        transition-all duration-300
        hover:brightness-90 active:brightness-75
      `}
      onClick={onClick}
      role="checkbox"
      aria-checked={active}
      tabIndex={0} // Для фокуса
    >
      {active && (
        <Image
          src="/done.svg"
          alt=""
          width={14}
          height={9}
          className="object-contain pointer-events-none"
          draggable={false}
        />
      )}
    </div>
  );
}