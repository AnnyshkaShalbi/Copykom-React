import { ReadinessDate, CoverItem, LogoItem, PlasticFileOptions, FileInfo } from "../types/order"

export const calculateReadinessDate = (): ReadinessDate => {
  const now = new Date();
  const currentHours = now.getHours();
  const readinessDate = new Date(now);
  
  if (currentHours < 16) {
    readinessDate.setDate(readinessDate.getDate() + 1); // +1 день
  } else {
    readinessDate.setDate(readinessDate.getDate() + 2); // +2 дня
  }
  
  readinessDate.setHours(10, 0, 0, 0); 
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };
  
  return {
    formattedDate: formatDate(readinessDate),
    formattedTime: '10:00',
    timestamp: readinessDate.getTime()
  };
};

export const getFinalCoverPath = (
  selectedColor: string,
  selectedCoverItem: CoverItem,
  selectedLogoItem: LogoItem
): string => {
  const colorPath = selectedColor === 'bg-red-dark' ? 'red' : 'blue';
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
}

export const getCoverPrice = (
  selectedCoverItem: CoverItem,
  selectedLogoItem: LogoItem
): number => {
  const coverPrice = selectedCoverItem.price;
  const logoPrice = typeof selectedLogoItem.price === 'number' ? selectedLogoItem.price : 0;
  return coverPrice + logoPrice;
};

export const calculateTotalPrice = (
  orderDetails: {
    pdfFile: FileInfo,
    coloredPages: number[],
    pocketCD: boolean,
    pocketForReview: boolean,
    plasticFile: boolean,
    plasticFileOptions: PlasticFileOptions
  },
  coverPrice: number,
  logoPrice: number
): number => {
  // Безопасное получение количества страниц
  const totalPages = orderDetails.pdfFile?.pages || 0;
  const coloredPagesCount = orderDetails.coloredPages.length;
  const blackWhitePagesCount = Math.max(0, totalPages - coloredPagesCount);
  
  const blackWhitePrice = blackWhitePagesCount * 10;
  const coloredPagesPrice = coloredPagesCount * 30;
  
  const pocketCDPrice = orderDetails.pocketCD ? 70 : 0;
  const pocketForReviewPrice = orderDetails.pocketForReview ? 70 : 0;
  
  let plasticFilesPrice = 0;
  if (orderDetails.plasticFile) {
    plasticFilesPrice = Object.values(orderDetails.plasticFileOptions).reduce(
      (total, option) => total + (option.enabled ? option.count * 15 : 0),
      0
    );
  }
  
  return coverPrice + logoPrice + blackWhitePrice + coloredPagesPrice + 
         pocketCDPrice + pocketForReviewPrice + plasticFilesPrice;
};