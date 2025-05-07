import CheckboxCircle from "../../common/checkboxCircle"
import CheckboxSquare from "../../common/checkboxSquare"
import { useOrder, PlasticFileOptions } from '@/app/context/OrderContext';

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
          <ChooseColoredPages pages={pdfFile?.pages} />
        </>)}
      
    </div>
  )
}

const ChooseColoredPages = ({ pages }: { pages: number | null }) => {
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
                ease-in-out cursor-pointer hover:bg-primary hover:text-white
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
      { plasticFile && <AdditionallyPlasticFile /> }
    </div>
  )
} 

interface PlasticFileOption {
  key: keyof PlasticFileOptions; 
  label: string;
}

const AdditionallyPlasticFile = () => {
  const {
    plasticFileOptions,
    togglePlasticFileOption,
    setPlasticFileCount
  } = useOrder();

  const options: PlasticFileOption[] = [
    { key: 'beforeTitle', label: 'Перед титулом' },
    { key: 'afterTitle', label: 'После титула' },
    { key: 'atEnd', label: 'В конце работы' },
  ]

  return(
    <div className="ml-5">
      {
        options.map((option) => (
          <div key={option.key}>
            <div 
              className="flex items-center justify-between cursor-pointer relative mt-3" 
              onClick={() => { togglePlasticFileOption(option.key) }}
            >
              <div className="flex items-center">
                <CheckboxSquare active={plasticFileOptions[option.key].enabled} />
                <span className="text-sm text-dark pl-3 pr-1 bg-white">{option.label}</span>
              </div>
            </div>

            {plasticFileOptions[option.key].enabled && (
              <NumberOfPlasticFiles 
                count={plasticFileOptions[option.key].count}
                onChange={(newCount) => setPlasticFileCount(option.key, newCount)} />
            )}
          </div>
        ))
      }
    </div>
  )
}

const NumberOfPlasticFiles = ({ count, onChange }: { count: number, onChange: (count: number) => void }) => {
  const quantity = 10

  if (!count) return null;

  return(
    <>
      <p className="text-sm text-dark mt-3">Выбери количество</p>
      <div className="overflow-hidden overflow-x-scroll pb-2.5 overflow-scroll-touch">
        <div className="flex items-center justify-start flex-nowrap whitespace-nowrap gap-2.5 mt-2.5 mb-1.25 min-w-[275px] w-[275px]">
          {Array.from({ length: quantity }, (_, index) => {
            const pageNumber = index + 1;
            
            return (
              <div 
                key={index} 
                onClick={() => onChange(pageNumber)}
                className={`
                  border border-light w-[30px] h-[30px] px-3 py-0 text-sm font-normal 
                  flex items-center justify-center transition-all duration-300 
                  ease-in-out cursor-pointer hover:bg-primary hover:text-white
                  ${
                    pageNumber === count 
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
    </>
  );
};