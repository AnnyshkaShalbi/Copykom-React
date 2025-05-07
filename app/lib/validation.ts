export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) return 'Номер телефона обязателен';
  if (!/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone)) {
    return 'Введите корректный номер (+7XXX...)';
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Некорректный email';
  }
  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name.trim()) return 'Имя обязательно';
  if (name.length < 2) return 'Минимум 2 символа';
  return undefined;
};