import { useState } from 'react';

interface OrderFormValues {
  phone: string;
  name: string;
  email: string;
  comment: string;
}

export const useOrderForm = () => {
  const [values, setValues] = useState<OrderFormValues>({
    phone: '',
    name: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState<Partial<OrderFormValues>>({});

  const validate = (): boolean => {
    const newErrors: Partial<OrderFormValues> = {};
    
    if (!values.phone.trim()) {
      newErrors.phone = 'Номер телефона обязателен';
    } else if (!/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(values.phone)) {
      newErrors.phone = 'Введите корректный номер (+7XXX...)';
    }
    
    if (!values.name.trim()) {
      newErrors.name = 'Имя обязательно';
    } else if (values.name.length < 2) {
      newErrors.name = 'Минимум 2 символа';
    }
    
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Некорректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof OrderFormValues) => (value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Очищаем ошибку при изменении
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (callback: (data: OrderFormValues) => Promise<void>) => {
    if (validate()) {
      await callback(values);
    }
  };

  return { 
    values, 
    errors, 
    handleChange, 
    handleSubmit,
    setValues,
    resetForm: () => setValues({ phone: '', name: '', email: '', comment: '' }) // Добавьте этот метод
  };
};