'use client'

import { createContext, useContext, useState, ReactNode, useMemo, useEffect, useCallback } from 'react';
import { blueColors, redColors, logos } from "@/app/lib/placeholder-data";
import { OrderContextValue, OrderState, OrderActions  } from "@/app/lib/types/order"
import { calculateReadinessDate, getFinalCoverPath, getCoverPrice, calculateTotalPrice } from "@/app/lib/utils/order"
import { INITIAL_STATE } from "@/app/lib/variables/order"

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue);

export function OrderProvider({ children }: { children: ReactNode }) {
  
  const [state, setState] = useState<OrderState>({
    ...INITIAL_STATE,
    readinessDate: calculateReadinessDate() 
  });

  const selectedCoverItem = useMemo(() => {
    const currentColors = state.selectedColor === 'bg-primary' ? redColors : blueColors;
    return currentColors.find(item => item.id === state.selectedCover) || currentColors[0];
  }, [state.selectedColor, state.selectedCover]);

  const selectedLogoItem = useMemo(() => {
    return logos.find(item => item.id === state.selectedLogo) || logos[0];
  }, [state.selectedLogo]);

  const logoPrice = useMemo(() => 
    typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0,
    [selectedLogoItem]
  );
  
  const coverPrice = useMemo(() => selectedCoverItem.price, [selectedCoverItem]);

  const embossingType = useMemo(() => {
    if (selectedCoverItem.masterThesis) return { text: "С тиснением МД", type: "МД" };
    if (selectedCoverItem.diplomWork) return { text: "С тиснением ДР", type: "ДР" };
    if (selectedCoverItem.diplomProject) return { text: "С тиснением ДП", type: "ДП" };
    if (selectedCoverItem.finalWork) return { text: "С тиснением ВКР", type: "ВКР" };
    return { text: "Без тиснения", type: "Без тиснения" };
  }, [selectedCoverItem]);
  
  const logoText = useMemo(() => {
    return selectedLogoItem.id === 0 
      ? "Без эмблемы" 
      : selectedLogoItem.title;
  }, [selectedLogoItem]);
  
  const colorText = useMemo(() => {
    return state.selectedColor === 'bg-primary' ? 'Синяя' : 'Красная';
  }, [state.selectedColor]);

  const resetOrder = useCallback(() => {
    setState({
      ...INITIAL_STATE,
      readinessDate: calculateReadinessDate() 
    });
  }, []);

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

    setPdfFile: (fileInfo) => {
      if (fileInfo && !fileInfo.file) {
        console.error('File object is missing in fileInfo');
        return;
      }
      setState(prev => ({ ...prev, pdfFile: fileInfo }));
    },

    goToNextStep: () => setState(prev => ({ ...prev, currentStep: Math.min(prev.currentStep + 1, 3) })),
    goToPrevStep: () => setState(prev => ({ ...prev, currentStep: Math.max(prev.currentStep - 1, 1) })),

    // Новая функция для обновления даты готовности
    updateReadinessDate: () => {
      setState(prev => ({
        ...prev,
        readinessDate: calculateReadinessDate()
      }));
    },

    getFinalCoverPath: () => getFinalCoverPath(
      state.selectedColor,
      selectedCoverItem,
      selectedLogoItem
    ),

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

    getCoverPrice: () => getCoverPrice(selectedCoverItem, selectedLogoItem),

    getTotalPrice: () => calculateTotalPrice(
      {
        pdfFile: state.pdfFile,
        coloredPages: state.coloredPages,
        pocketCD: state.pocketCD,
        pocketForReview: state.pocketForReview,
        plasticFile: state.plasticFile,
        plasticFileOptions: state.plasticFileOptions
      },
      coverPrice,
      logoPrice
    ),

    getOrderSummary: () => {
      const price = calculateTotalPrice(
        {
          pdfFile: state.pdfFile,
          coloredPages: state.coloredPages,
          pocketCD: state.pocketCD,
          pocketForReview: state.pocketForReview,
          plasticFile: state.plasticFile,
          plasticFileOptions: state.plasticFileOptions
        },
        coverPrice,
        logoPrice
      );
    
      return {
        orderDetails: {
          color: colorText,
          embossing: embossingType,
          logo: logoText,
          price,
          pdfFile: state.pdfFile, 
          coloredPages: state.coloredPages,
          options: {
            pocketForReview: state.pocketForReview,
            pocketCD: state.pocketCD,
            plasticFile: state.plasticFile,
            plasticFileOptions: state.plasticFileOptions
          },
          readinessDate: state.readinessDate
        }
      };
    },

    resetOrder,

  }), [resetOrder, state, selectedCoverItem, selectedLogoItem]);

  // Обновляем дату готовности при монтировании
  useEffect(() => {
    actions.updateReadinessDate();
  }, [actions]);

  const value = useMemo<OrderContextValue>(() => ({
    ...state,
    ...actions,
    computed: {
      embossingType,
      logoText,
      colorText,
      selectedCoverItem,
      selectedLogoItem,
    }
  }), [state, actions, embossingType, logoText, colorText, selectedCoverItem, selectedLogoItem]);

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