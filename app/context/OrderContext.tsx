'use client'

import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { blueColors, redColors, logos } from "@/app/lib/placeholder-data";
import { OrderContextValue, OrderState, OrderActions  } from "@/app/lib/types/order"
import { calculateReadinessDate } from "@/app/lib/utils/order"

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue);

export function OrderProvider({ children }: { children: ReactNode }) {
  
  const [state, setState] = useState<OrderState>({
    currentStep: 1,
    selectedColor: 'bg-primary',
    selectedCover: 0,
    selectedLogo: 0,
    selectedPrintColor: 'black-white',
    pocketForReview: false,
    pocketCD: false,
    plasticFile: false,
    plasticFileOptions: {
      beforeTitle: {
        enabled: false,
        count: 2,
      },
      afterTitle: {
        enabled: false,
        count: 2,
      },
      atEnd: {
        enabled: false,
        count: 2,
      }
    },
    pdfFile: null,
    coloredPages: [],
    readinessDate: calculateReadinessDate() 
  });

  // Получаем текущие выбранные элементы
  const selectedCoverItem = useMemo(() => {
    const currentColors = state.selectedColor === 'bg-primary' ? redColors : blueColors;
    return currentColors.find(item => item.id === state.selectedCover) || currentColors[0];
  }, [state.selectedColor, state.selectedCover]);

  const selectedLogoItem = useMemo(() => {
    return logos.find(item => item.id === state.selectedLogo) || logos[0];
  }, [state.selectedLogo]);

  const actions = useMemo<OrderActions>(() => ({
    // Основные методы
    setCurrentStep: (step) => setState(prev => ({ ...prev, currentStep: step })),
    setSelectedColor: (color) => setState(prev => ({ ...prev, selectedColor: color })),
    setSelectedPrintColor: (print) => setState(prev => ({ ...prev, selectedPrintColor: print })),
    setSelectedCover: (cover) => setState(prev => ({ ...prev, selectedCover: cover })),
    setSelectedLogo: (logo) => setState(prev => ({ ...prev, selectedLogo: logo })),

    // Методы для чекбоксов
    setPocketForReview: (value) => setState(prev => ({ ...prev, pocketForReview: value })),
    setPocketCD: (value) => setState(prev => ({ ...prev, pocketCD: value })),
    setPlasticFile: (value) => setState(prev => ({ ...prev, plasticFile: value })),

    togglePlasticFileOption: (option) => setState(prev => ({
      ...prev,
      plasticFileOptions: {
        ...prev.plasticFileOptions,
        [option]: {
          ...prev.plasticFileOptions[option],
          enabled: !prev.plasticFileOptions[option].enabled,
          // При первом включении устанавливаем count в 2
          count: !prev.plasticFileOptions[option].enabled ? 2 : 0
        }
      }
    })),
  
    setPlasticFileCount: (option, count) => setState(prev => ({
      ...prev,
      plasticFileOptions: {
        ...prev.plasticFileOptions,
        [option]: {
          ...prev.plasticFileOptions[option],
          count: Math.max(0, count) // Не допускаем отрицательные значения
        }
      }
    })),

    setPdfFile: (fileInfo) => setState(prev => ({ ...prev, pdfFile: fileInfo })),

    goToNextStep: () => setState(prev => ({ ...prev, currentStep: Math.min(prev.currentStep + 1, 3) })),
    goToPrevStep: () => setState(prev => ({ ...prev, currentStep: Math.max(prev.currentStep - 1, 1) })),

    // Новая функция для обновления даты готовности
    updateReadinessDate: () => {
      setState(prev => ({
        ...prev,
        readinessDate: calculateReadinessDate()
      }));
    },

    getFinalCoverPath: () => {
      const colorPath = state.selectedColor === 'bg-red-dark' ? 'red' : 'blue';
      const basePath = '/covers';

      let workType = '';
      if (selectedCoverItem.masterThesis) workType = 'masterThesis';
      else if (selectedCoverItem.diplomWork) workType = 'diplomWork';
      else if (selectedCoverItem.diplomProject) workType = 'diplomProject';
      else if (selectedCoverItem.finalWork) workType = 'finalWork';
      else return `${basePath}/${colorPath}/withoutEmblems/empty.png`;

      const logoTitle = selectedLogoItem.title === "Без эмблемы" ? undefined : selectedLogoItem.title;
      
      if (!logoTitle || logoTitle === "Без эмблемы") {
        return `${basePath}/${colorPath}/withoutEmblems/${workType}.png`;
      }

      const logoPathMap: Record<string, string> = {
        "МАДИ": "madi",
        "МАИ": "mai",
        "Финашка": "fin",
        "Бауманка": "mgtu",
        "МЭИ": "mei"
      };

      const logoPath = logoPathMap[logoTitle];
      return logoPath 
        ? `${basePath}/${colorPath}/${logoPath}/${workType}.png`
        : `${basePath}/${colorPath}/withoutEmblems/${workType}.png`;
    },

    toggleColoredPage: (pageNumber) => {
      setState(prev => {
        if (prev.pdfFile?.pages && pageNumber > prev.pdfFile.pages) {
          return prev;
        }
    
        if (prev.coloredPages.includes(pageNumber)) {
          return {
            ...prev,
            coloredPages: prev.coloredPages.filter(p => p !== pageNumber)
          };
        } else {
          return {
            ...prev,
            coloredPages: [...prev.coloredPages, pageNumber]
          };
        }
      });
    },

    getCoverPrice: () => {
      const coverPrice = selectedCoverItem.price;
      const logoPrice = typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0;
      return coverPrice + logoPrice;
    },

    getTotalPrice: () => {
      const coverPrice = selectedCoverItem.price;
      const logoPrice = typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0;
      
      const totalPages = state.pdfFile?.pages || 0;
      const coloredPagesCount = state.coloredPages.length;
      const blackWhitePagesCount = totalPages - coloredPagesCount;
      
      const blackWhitePrice = blackWhitePagesCount * 10;
      const coloredPagesPrice = coloredPagesCount * 30;
      
      const pocketCDPrice = state.pocketCD ? 70 : 0;
      const pocketForReviewPrice = state.pocketForReview ? 70 : 0;
      
      // Рассчитываем стоимость пластиковых файлов
      let plasticFilesPrice = 0;
      if (state.plasticFile) {
        plasticFilesPrice = Object.values(state.plasticFileOptions).reduce(
          (total, option) => total + (option.enabled ? option.count * 15 : 0),
          0
        );
      }
      
      return (
        coverPrice + 
        logoPrice + 
        blackWhitePrice + 
        coloredPagesPrice + 
        pocketCDPrice + 
        pocketForReviewPrice + 
        plasticFilesPrice
      );
    },

    getEmbossingType: () => {
      if (selectedCoverItem.masterThesis) return "МД";
      if (selectedCoverItem.diplomWork) return "ДР";
      if (selectedCoverItem.diplomProject) return "ДП";
      if (selectedCoverItem.finalWork) return "ВКР";
      return "Без тиснения";
    }
  }), [state, selectedCoverItem, selectedLogoItem]);

  // Обновляем дату готовности при монтировании
  useEffect(() => {
    actions.updateReadinessDate();
  }, []);

  const value = useMemo<OrderContextValue>(() => ({
    ...state,
    ...actions,
  }), [state, actions]);

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};