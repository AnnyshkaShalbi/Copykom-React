import { OrderState } from "../types/order"
import { calculateReadinessDate } from "@/app/lib/utils/order"

export const INITIAL_STATE: OrderState = {
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
} 