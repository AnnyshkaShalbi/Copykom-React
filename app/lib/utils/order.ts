import { ReadinessDate } from "../types/order"

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