import CheckboxCircle from "../../common/checkboxCircle"
import CheckboxSquare from "../../common/checkboxSquare"
import { useOrder } from '@/app/context/OrderContext';

export default function UpdateFileOption() {
  return(
    <div className="flex flex-col gap-3">
      <Print />
      <Additionally />
    </div>
  )
}

const Print = ()  => {
  const {
    selectedPrintColor, 
    setSelectedPrintColor,
    pdfFile
  } = useOrder();

  const handlePrintColorSelect = (print: string) => {
    setSelectedPrintColor(print);
  };

  return(
    <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
      <h3 className="text-dark mb-3 text-base leading-6">Печатать</h3>
      <div className="flex items-center mb-3 cursor-pointer gap-2" >
        <CheckboxCircle
          color="bg-primary"
          active={selectedPrintColor === 'black-white'}
          onClick={() => {handlePrintColorSelect('black-white')}} />
        <span className="text-sm text-dark" onClick={() => {handlePrintColorSelect('black-white')}}>Чёрно-белая</span>
      </div>
      <div className="flex items-center cursor-pointer gap-2">
        <CheckboxCircle 
          color="bg-primary"
          active={selectedPrintColor === 'colored'}
          onClick={() => {handlePrintColorSelect('colored')}} />
        <span className="text-sm text-dark" onClick={() => {handlePrintColorSelect('colored')}}>Цветная</span>
      </div>
      {(selectedPrintColor === "colored" && pdfFile?.pages) && 
        (<>
          <p>Выберите номер цветных страниц</p>
          <ChoosePages pages={pdfFile?.pages} />
        </>)}
      
    </div>
  )
}

const ChoosePages = ({ pages }: { pages: number | null }) => {
  const { coloredPages, toggleColoredPage } = useOrder();

  if (!pages) return null;

  return(
    <div className="overflow-hidden overflow-x-scroll pb-2.5 overflow-scroll-touch">
      <div className="flex items-center justify-start flex-nowrap whitespace-nowrap gap-2.5 mt-2.5 mb-1.25 min-w-[275px] w-[275px]">
        {Array.from(Array(pages).keys()).map((index) => {
          const pageNumber = index + 1;
          const isColored = coloredPages.includes(pageNumber);
          
          return (
            <div 
              key={index} 
              onClick={() => toggleColoredPage(pageNumber)}
              className={`
                border border-light w-[30px] h-[30px] px-3 py-0 text-sm font-normal 
                flex items-center justify-center transition-all duration-300 
                ease-in-out cursor-pointer
                ${
                  isColored 
                    ? 'bg-primary text-white' 
                    : 'text-dark hover:bg-gray-100'
                }
              `}
            >
              <span>{pageNumber}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Additionally = () => {
  const {
    pocketForReview,
    pocketCD,
    plasticFile,
    setPocketForReview,
    setPocketCD,
    setPlasticFile,
  } = useOrder();

  return(
    <div className="border border-solid border-grey-light py-4 px-5 h-full flex flex-col">
      <h3 className="text-dark mb-3 text-base leading-6">Дополнительно</h3>

      <div 
        className="
          flex items-center justify-between cursor-pointer mb-3 relative before:content-[''] 
          before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
          before:right-0 before:h-3/4 before:border-b before:border-dashed before:border-grey-light" 
        onClick={() => { setPocketForReview(!pocketForReview) }}
      >
        <div className="flex items-center">
          <CheckboxSquare active={pocketForReview} />
          <span className="text-sm text-dark pl-3 pr-1 bg-white">Вклеить карман для рецензии</span>
        </div>
        <span className="text-sm text-primary pl-1 bg-white">70 ₽</span>
      </div>

      <div 
        className="
          flex items-center justify-between cursor-pointer mb-3 relative before:content-[''] 
          before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
          before:right-0 before:h-3/4 before:border-b before:border-dashed before:border-grey-light" 
        onClick={() => { setPocketCD(!pocketCD) }}
      >
        <div className="flex items-center">
          <CheckboxSquare active={pocketCD} />
          <span className="text-sm text-dark pl-3 pr-1 bg-white">Вклеить карман для CD диска</span>
        </div>
        <span className="text-sm text-primary pl-1 bg-white">70 ₽</span>
      </div>

      <div 
        className="
          flex items-center justify-between cursor-pointer relative before:content-[''] 
          before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
          before:right-0 before:h-3/4 before:border-b before:border-dashed before:border-grey-light" 
        onClick={() => { setPlasticFile(!plasticFile) }}
      >
        <div className="flex items-center">
          <CheckboxSquare active={plasticFile} />
          <span className="text-sm text-dark pl-3 pr-1 bg-white">Добавить пластиковый файл</span>
        </div>
        <span className="text-sm text-primary pl-1 bg-white">15 ₽</span>
      </div>
    </div>
  )
} 