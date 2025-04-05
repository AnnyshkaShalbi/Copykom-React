interface CheckboxProps {
  color: string;
}

export default function CheckboxCircle({ color }: CheckboxProps) {
  return(
    <div className={`bg-${color} rounded-full w-6 h-6 relative cursor-pointer
      
    `}>
    </div>
  )
}