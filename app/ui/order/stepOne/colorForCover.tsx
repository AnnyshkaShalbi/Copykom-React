import ItemTitle from './itemTitle';
import CheckboxCircle from '@/app/ui/common/checkboxCircle'

interface ColorForCoverProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export default function ColorForCover({ selectedColor, setSelectedColor } : ColorForCoverProps){

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return(
    <div className="flex gap-14 items-center">
      <ItemTitle index={1} title="цвет" />
      <div className="flex gap-4 items-center">
        <CheckboxCircle 
          color="bg-red-dark" 
          active={selectedColor}
          onClick={() => handleColorSelect('bg-red-dark')} />
        <CheckboxCircle 
          color="bg-primary" 
          active={selectedColor}
          onClick={() => handleColorSelect('bg-primary')} />
      </div>
    </div>
  )
}