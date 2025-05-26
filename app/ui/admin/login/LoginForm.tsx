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
    <div className="w-full p-8 md:px-10 md:py-14 after:hidden md:max-w-[37.5rem] bg-primary-light relative mx-auto py-12 px-16 md:after:block md:after:content-[''] md:after:absolute md:after:w-full md:after:h-full md:after:border md:after:border-primary md:after:top-4 md:after:left-4">
      <form 
        onSubmit={handleSubmit}
        className="z-10 relative flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-xl sm:text-2xl font-bold">Вход в админ-панель</h1>
        
        <Input
          type="text"
          label="Логин"
          placeholder="admin"
          value={form.login}
          onChange={(e) => handleChange('login')(e.target.value)}
          error={errors.login}
          required
          className="w-full sm:w-3/4"
        />

        <Input
          type="password"
          label="Пароль"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => handleChange('password')(e.target.value)}
          error={errors.password}
          required
          className="w-full sm:w-3/4"
        />

        {errors.global && (
          <div className="text-red-500 text-sm w-full sm:w-3/4 text-center">
            {errors.global}
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="w-full sm:w-3/4 mt-2">
          {isLoading ? "Вход..." : "Войти"}
        </Button>
      </form>
    </div>
    
  );
}