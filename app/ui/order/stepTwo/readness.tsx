import { useOrder } from '@/app/context/OrderContext';
import { tenor_sans } from '../../fonts';
import { Button } from '../../common/button';
import { inter } from '../../fonts';
import { useEffect } from 'react';

export default function Readness() {
  useEffect(() => {
    console.log('pdfFile: ', pdfFile)
  })

  const {
    readinessDate,
    getTotalPrice,
    goToNextStep,
    pocketForReview,
    pocketCD,
    pdfFile,
    getCoverPrice,
    coloredPages,
    plasticFileOptions
  } = useOrder();

  // Вычисляем количество черно-белых страниц
  const blackWhitePages = pdfFile?.pages ? pdfFile.pages - coloredPages.length : 0;

  return(
    <div className="
      bg-primary-light relative mt-10 w-[98%] pt-8 pr-6 pb-5 pl-8
      before:content-[''] before:absolute before:w-full before:h-full 
      before:top-[15px] before:left-[15px] before:border-2 before:border-primary
    ">
      <h6 className="text-dark leading-6 mb-3">Готовность {readinessDate.formattedDate} после {readinessDate.formattedTime}</h6>

      <div className="flex justify-between relative gap-4 z-[1]">
        <div className="w-[400px] flex flex-col justify-start gap-3">
          <div 
            className="flex items-center justify-between relative before:content-[''] 
            before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
            before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light
          ">
            <p className="bg-primary-light text-gray pr-1 leading-6">Обложка</p>
            <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{getCoverPrice()} ₽</span>
          </div>

          { pdfFile?.pages && blackWhitePages > 0 && 
            <div 
              className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light
            ">
              <p className="bg-primary-light text-gray pr-1 leading-6">Страницы {blackWhitePages} х 10 ₽</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{blackWhitePages * 10} ₽</span>
            </div>
          }

          { coloredPages.length > 0 && 
            <div 
              className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light
            ">
              <p className="bg-primary-light text-gray pr-1 leading-6">Страницы цветные {coloredPages.length} х 30 ₽</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{coloredPages.length * 30} ₽</span>
            </div>
          }

          { pocketForReview && 
            <div 
              className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light
            ">
              <p className="bg-primary-light text-gray pr-1 leading-6">Карман для рецензии</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>70 ₽</span>
            </div>
          }

          { pocketCD && 
            <div 
              className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light
            ">
              <p className="bg-primary-light text-gray pr-1 leading-6">Карман для CD диска</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>70 ₽</span>
            </div>
          }

          { plasticFileOptions.beforeTitle.enabled && 
            <div className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light">
              <p className="bg-primary-light text-gray pr-1 leading-6">Файл перед титулом {plasticFileOptions.beforeTitle.count} х 15 ₽</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{plasticFileOptions.beforeTitle.count * 15} ₽</span>
            </div>
          }

          { plasticFileOptions.afterTitle.enabled && 
            <div className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light">
              <p className="bg-primary-light text-gray pr-1 leading-6">Файл после титула {plasticFileOptions.afterTitle.count} х 15 ₽</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{plasticFileOptions.afterTitle.count * 15} ₽</span>
            </div>
          }

          { plasticFileOptions.atEnd.enabled && 
            <div className="flex items-center justify-between relative before:content-[''] 
              before:absolute before:w-full before:-z-[1] before:bottom-1 before:top-0 before:left-0
              before:right-0 before:h-3/4 before:border-b before:border-solid before:border-grey-light">
              <p className="bg-primary-light text-gray pr-1 leading-6">Файл в конце работы {plasticFileOptions.atEnd.count} х 15 ₽</p>
              <span className={`${inter.className} bg-primary-light pl-1 text-dark text-lg leading-9`}>{plasticFileOptions.atEnd.count * 15} ₽</span>
            </div>
          }
        </div>

        <div className='flex flex-col items-end justify-end gap-6'>
          <span className={`${tenor_sans.className} text-dark text-[3.5rem] leading-[4.375rem]`}>
            {getTotalPrice()} ₽
          </span>
          <Button 
            disabled={pdfFile === null}
            onClick={goToNextStep}>
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  )
}