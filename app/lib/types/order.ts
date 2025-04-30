export type ReadinessDate = {
  formattedDate: string;
  formattedTime: string;
  timestamp: number;
};

export type FileInfo = {
  name: string;
  size: string;
  pages: number | null;
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

  goToNextStep: () => void;
  goToPrevStep: () => void;
  getFinalCoverPath: () => string;
  getCoverPrice: () => number;
  getTotalPrice: () => number;
  getEmbossingType: () => string;
  setPdfFile: (fileInfo: FileInfo) => void;
  toggleColoredPage: (pageNumber: number) => void;
  updateReadinessDate: () => void; 
};

export type OrderContextValue = OrderState & OrderActions;