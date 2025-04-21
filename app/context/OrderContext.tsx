'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { blueColors, redColors, logos } from "@/app/lib/placeholder-data";

type OrderState = {
  currentStep: number;
  selectedColor: string;
  selectedCover: number;
  selectedLogo: number;
};

type OrderActions = {
  setCurrentStep: (step: number) => void;
  setSelectedColor: (color: string) => void;
  setSelectedCover: (cover: number) => void;
  setSelectedLogo: (logo: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  // Новые методы
  getFinalCoverPath: () => string;
  getTotalPrice: () => number;
  getEmbossingType: () => string;
};

type OrderContextValue = OrderState & OrderActions;

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OrderState>({
    currentStep: 1,
    selectedColor: 'bg-primary',
    selectedCover: 0,
    selectedLogo: 0,
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
    setSelectedCover: (cover) => setState(prev => ({ ...prev, selectedCover: cover })),
    setSelectedLogo: (logo) => setState(prev => ({ ...prev, selectedLogo: logo })),
    goToNextStep: () => setState(prev => ({ ...prev, currentStep: Math.min(prev.currentStep + 1, 3) })),
    goToPrevStep: () => setState(prev => ({ ...prev, currentStep: Math.max(prev.currentStep - 1, 1) })),

    // Перенесенная логика из FinalCover
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

    getTotalPrice: () => {
      const coverPrice = selectedCoverItem.price;
      const logoPrice = typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0;
      return coverPrice + logoPrice;
    },

    getEmbossingType: () => {
      if (selectedCoverItem.masterThesis) return "МД";
      if (selectedCoverItem.diplomWork) return "ДР";
      if (selectedCoverItem.diplomProject) return "ДП";
      if (selectedCoverItem.finalWork) return "ВКР";
      return "Без тиснения";
    }
  }), [state.selectedColor, state.selectedCover, state.selectedLogo, selectedCoverItem, selectedLogoItem]);

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