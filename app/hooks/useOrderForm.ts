import { useState } from 'react';
import { validatePhone, validateEmail, validateName } from '@/app/lib/validation';

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
    const newErrors: Partial<OrderFormValues> = {
      phone: validatePhone(values.phone),
      name: validateName(values.name),
      email: validateEmail(values.email),
    };

    // Убираем поля, где ошибки undefined
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== undefined)
    ) as Partial<OrderFormValues>;

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const handleChange = (field: keyof OrderFormValues) => (value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
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
    resetForm: () => setValues({ phone: '', name: '', email: '', comment: '' }) 
  };
};