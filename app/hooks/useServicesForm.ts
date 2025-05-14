import { useState } from 'react';

// Тип для правил валидации
type ValidationRules<T> = {
  [key in keyof T]?: (value: T[key]) => string | undefined;
};

// Тип для ошибок
type FormErrors<T> = {
  [key in keyof T]?: string;
};

// Основной хук
export const useServicesForm = <T extends Record<string, unknown>>(
  initialValues: T,
  validationRules: ValidationRules<T> = {}
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  // Валидация всех полей
  const validate = (): boolean => {
    const newErrors: FormErrors<T> = {};

    for (const key in validationRules) {
      const rule = validationRules[key];
      if (rule) {
        const error = rule(values[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Изменение поля
  const handleChange = <K extends keyof T>(field: K) => (value: T[K]) => {
    setValues(prev => ({ ...prev, [field]: value }));

    // Очистка ошибки при изменении
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Сброс формы
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    resetForm,
    setValues,
  };
};