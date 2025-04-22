import CheckboxCircle from "../../common/checkboxCircle"
import CheckboxSquare from "../../common/checkboxSquare"

export default function UpdateFileOption() {

  const handlePrintColorSelect = (color: string) => {
    console.log(color);
  };

  return(
    <div className="flex flex-col gap-3">
      <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
        <h3 className="text-dark mb-3 text-base leading-6">Печатать</h3>
        <div className="flex items-center mb-3 cursor-pointer gap-2">
          <CheckboxCircle
            color="bg-primary"
            active={true}
            onClick={() => {handlePrintColorSelect('')}} />
          <span className="text-sm text-dark">Чёрно-белая</span>
        </div>
        <div className="flex items-center cursor-pointer gap-2">
          <CheckboxCircle 
            color="bg-primary"
            active={false}
            onClick={() => {handlePrintColorSelect('')}} />
          <span className="text-sm text-dark">Цветная</span>
        </div>
      </div>

      <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
        <h3 className="text-dark mb-3 text-base leading-6">Дополнительно</h3>

        <div className="flex items-center justify-between cursor-pointer mb-3">
          <div className="flex items-center">
            <CheckboxSquare active={true} onClick={() => { console.log('hello word!') }} />
            <span className="text-sm text-dark pl-3">Вклеить карман для рецензии</span>
          </div>
          <span className="text-sm text-primary">70 ₽</span>
        </div>

        <div className="flex items-center justify-between cursor-pointer mb-3">
          <div className="flex items-center">
            <CheckboxSquare active={false} onClick={() => { console.log('hello word!') }} />
            <span className="text-sm text-dark pl-3">Вклеить карман для CD диска</span>
          </div>
          <span className="text-sm text-primary">70 ₽</span>
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <CheckboxSquare active={false} onClick={() => { console.log('hello word!') }} />
            <span className="text-sm text-dark pl-3">Добавить пластиковый файл</span>
          </div>
          <span className="text-sm text-primary">15 ₽</span>
        </div>
      </div>
    </div>
  )
}