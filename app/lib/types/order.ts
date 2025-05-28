// новые типы для бд
export interface Cover {
  id?: number,
  price: number,
  title: string,
  image_path: string,
  color: string;
}
// новые типы для бд

export type ReadinessDate = {
  formattedDate: string;
  formattedTime: string;
  timestamp: number;
};

export type FileInfo = {
  name: string;
  size: string;
  pages: number | null;
  file: File;
} | null;

export type PlasticFileOptions = {
  beforeTitle: {
    enabled: boolean;
    count: number;
  };
  afterTitle: {
    enabled: boolean;
    count: number;
  };
  atEnd: {
    enabled: boolean;
    count: number;
  };
};

export type OrderState = {
  currentStep: number;
  selectedColor: string;
  selectedCover: number;
  selectedLogo: number;
  selectedPrintColor: string;
  pocketForReview: boolean;
  pocketCD: boolean;
  plasticFile: boolean;
  plasticFileOptions: PlasticFileOptions;
  pdfFile: FileInfo;
  coloredPages: number[];
  readinessDate: ReadinessDate;
};

export type OrderActions = {
  setCurrentStep: (step: number) => void;
  setSelectedColor: (color: string) => void;
  setSelectedCover: (cover: number) => void;
  setSelectedLogo: (logo: number) => void;
  setSelectedPrintColor: (print: string) => void;
  setPocketForReview: (value: boolean) => void;
  setPocketCD: (value: boolean) => void;
  setPlasticFile: (value: boolean) => void;
  togglePlasticFileOption: (option: keyof PlasticFileOptions) => void;
  setPlasticFileCount: (option: keyof PlasticFileOptions, count: number) => void;
  resetOrder: () => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  getFinalCoverPath: () => string;
  getCoverPrice: () => number;
  getTotalPrice: () => number;
  setPdfFile: (fileInfo: FileInfo) => void;
  toggleColoredPage: (pageNumber: number) => void;
  updateReadinessDate: () => void; 
  getOrderSummary: () => OrderSummary;
};

export type OrderContextValue = OrderState & OrderActions & {
   /**
   * Информация о тиснении embossingType
   * @property {string} text - Готовый текст для отображения ("С тиснением МД")
   * @property {string} type - Тип тиснения ("МД")
   */
  computed: {
    embossingType: {
      text: string;
      type: string;
    };
    logoText: string;
    colorText: string;
    selectedCoverItem: CoverItem;
    selectedLogoItem: LogoItem;
  };
};

export type CoverItem = {
  id: number,
  price: number,
  title: string,
  image: string,
  diplomWork: boolean,
  diplomProject: boolean,
  finalWork: boolean,
  masterThesis: boolean,
}

export type LogoItem = {
  id: number,
  price: number | boolean,
  title: string,
  image: string,
}

export type OrderSummary = {
  orderDetails: {
    color: string;
    embossing: {
      text: string;
      type: string;
    };
    logo: string;
    price: number;
    pdfFile: FileInfo | null;
    coloredPages: number[];
    options: {
      pocketForReview: boolean;
      pocketCD: boolean;
      plasticFile: boolean;
      plasticFileOptions: PlasticFileOptions;
    };
    readinessDate: ReadinessDate;
  };
  formData?: {
    name: string;
    phone: string;
    email: string;
    comment: string;
  };
};