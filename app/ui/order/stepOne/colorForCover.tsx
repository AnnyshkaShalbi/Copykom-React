import ItemTitle from './itemTitle';
import CheckboxCircle from '@/app/ui/common/checkboxCircle'
import { useOrder } from '@/app/context/OrderContext';


export default function ColorForCover(){
  const {
    selectedColor,
    setSelectedColor,
  } = useOrder();

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return(
    <div className="flex gap-14 items-center">
      <ItemTitle index={1} title="цвет" />
      <div className="flex gap-4 items-center">
        <CheckboxCircle 
          color="bg-red-dark" 
          active={selectedColor === 'bg-red-dark'}
          onClick={() => handleColorSelect('bg-red-dark')} />
        <CheckboxCircle 
          color="bg-primary" 
          active={selectedColor === 'bg-primary'}
          onClick={() => handleColorSelect('bg-primary')} />
      </div>
    </div>
  )
}