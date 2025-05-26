'use client';
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface LoginForm {
  login: string;
  password: string;
}

interface Errors {
  login?: string;
  password?: string;
  global?: string;
}

export const useLogin = () => {
  const [form, setForm] = useState<LoginForm>({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validate = useCallback((): boolean => {
    const newErrors: Errors = {};
    
    if (!form.login.trim()) {
      newErrors.login = "Введите логин";
    } else if (form.login.trim().length < 3) {
      newErrors.login = "Логин должен содержать минимум 3 символа";
    }

    if (!form.password) {
      newErrors.password = "Введите пароль";
    } else if (form.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form.login, form.password]);

  const handleChange = (field: keyof LoginForm) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Ошибка авторизации');
      }

      const { adminId } = await response.json(); 
      sessionStorage.setItem('admin_id', adminId); 

      router.push('/admin/mainpage');
    } catch (error: unknown) {
      let errorMessage = 'Неизвестная ошибка';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      setErrors({ global: errorMessage });
    } finally {
      setIsLoading(false);
    }
  }, [form, validate, router]);

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};