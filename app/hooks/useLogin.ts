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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при изменении поля
    setErrors((prev) => (prev[name as keyof Errors] 
      ? { ...prev, [name]: undefined } 
      : prev
    ));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Перенаправление после успешного входа
      router.push("/admin");
    } catch (error) {
      setErrors({ password: "Неверный логин или пароль" });
    } finally {
      setIsLoading(false);
    }
  }, [validate, router]);

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};