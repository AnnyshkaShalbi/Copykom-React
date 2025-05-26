'use client';

import { Button } from "@/app/ui/common/button";
import Input from "@/app/ui/common/input";
import { useLogin } from "@/app/hooks/useLogin";

export default function LoginForm() {
  const {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useLogin();

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full p-10 md:p-[2.5rem_3.5rem] after:hidden md:max-w-[37.5rem] flex flex-col items-center justify-center gap-2.5 bg-primary-light relative mx-auto py-[3.125rem] px-[4.6875rem] md:after:block md:after:content-[''] md:after:absolute md:after:w-full md:after:h-full md:after:border md:after:border-primary md:after:top-4 md:after:left-4"
    >
      <h1 className="text-2xl font-bold mb-4">Вход в админ-панель</h1>
      
      <Input
        type="text"
        label="Логин"
        placeholder="admin"
        value={form.login}
        onChange={handleChange}
        error={errors.login}
        required
      />

      <Input
        type="password"
        label="Пароль"
        placeholder="••••••••"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
        required
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
}