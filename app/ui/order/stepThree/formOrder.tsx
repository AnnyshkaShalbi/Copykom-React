'use client';
import { Button } from "@/app/ui/common/button";
import Input from "@/app/ui/common/input";
import Link from "next/link";
import Comment from "@/app/ui/common/comment";
import { useOrderForm } from "@/app/hooks/useOrderForm";
import { useState } from 'react';

export default function FormOrder() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues
  } = useOrderForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isFormValid = values.phone.trim() !== '' && values.name.trim() !== '';

  const onSubmit = async (formData: typeof values) => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          comment: formData.comment
        }),
      });
  
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Ошибка при отправке заказа');
      }
  
      setSubmitSuccess(true);
      setValues({ phone: '', name: '', email: '', comment: '' });
      
    } catch (error: any) {
      setSubmitError(error.message || 'Произошла ошибка. Попробуйте позже.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
      className="flex flex-col flex-wrap gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 items-center">
        <Input
          type="tel"
          label="Номер телефона"
          placeholder="+7 980 324-12-32"
          value={values.phone}
          onChange={(e) => handleChange('phone')(e.target.value)}
          error={errors.phone}
          required
        />
        <Input
          type="text"
          label="Имя"
          placeholder="Андрей"
          value={values.name}
          onChange={(e) => handleChange('name')(e.target.value)}
          error={errors.name}
          required
        />
      </div>

      <Input
        type="email"
        label="Электронная почта"
        placeholder="example@gmail.com"
        value={values.email}
        onChange={(e) => handleChange('email')(e.target.value)}
        error={errors.email}
      />

      <Comment 
        label="Комментарий"
        placeholder="Завернуть диплом в пленку или добавить пакет"
        value={values.comment}
        onChange={(e) => handleChange('comment')(e.target.value)}
        error={errors.comment}
        id="comment-field"
        rows={4} 
      />

      {submitError && (
        <div className="text-red-500 text-sm">{submitError}</div>
      )}

      {submitSuccess && (
        <div className="text-green-500 text-sm">
          Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 items-center">
        <Button 
          type="submit" 
          disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Оформить заказ'}
        </Button>
        <p className="text-xs">
          Нажимая кнопку «Оформить заказ», ты даёшь своё согласие на обработку{' '}
          <Link href="/privacy" className="link">персональных данных</Link>
        </p>
      </div>
    </form>
  )
}