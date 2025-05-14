'use client'

import React, { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/app/ui/common/button"
import Input from "@/app/ui/common/input"
import { getPageCount, formatFileSize } from "@/app/lib/utils"
import { usePathname, useRouter } from 'next/navigation';
import { FileInfo } from "@/app/lib/types/order"
import { useServicesForm } from "@/app/hooks/useServicesForm"
import { validatePhone } from "@/app/lib/validation"
import { tenor_sans } from "@/app/ui/fonts"

export default function LeaveRequest() {
  const [ pdfFile, setPdfFile ] = useState<FileInfo>(null);


  return(
    <div>
      <Download pdfFile={pdfFile} setPdfFile={setPdfFile} />
      <Form pdfFile={pdfFile} />
    </div>
  )
}

const Download = ({
  pdfFile,
  setPdfFile
}: {
  pdfFile: FileInfo | null
  setPdfFile: (file: FileInfo | null) => void
}) => {
  const pathname = usePathname();
  const servicePath = pathname.replace('/services/', '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Проверяем, что файл действительно PDF
      if (file.type !== 'application/pdf') {
        alert('Пожалуйста, выберите файл в формате PDF');
        return;
      }
  
      const pageCount = await getPageCount(file);
      
      setPdfFile({
        name: file.name,
        size: formatFileSize(file.size),
        pages: pageCount,
        file: file 
      });
    }
  };

  return(
    <div>
      <h3 className={`hidden lg:block uppercase pb-4 text-lg ${tenor_sans.className}`}>оставь заявку</h3>
      <div className="border border-border border-dashed flex justify-between flex-col p-12 items-center gap-6">
        <input 
          type="file"
          ref={fileInputRef}
          accept=".pdf"
          id={`updateFileInput-${servicePath}`}
          className="hidden"
          onChange={handleFileChange}
        />
        <label 
          htmlFor={`updateFileInput-${servicePath}`}
          className="flex flex-col justify-center items-center text-gray text-sm leading-normal cursor-pointer"
        >
          <Image
            src={pdfFile ? '/fileDone.svg' : '/pdfFile.svg'}
            height={100}
            width={100}
            alt={pdfFile ? "PDF файл загружен" : "Загрузить файл диплома в формате pdf"}
            className="fade-in"
          />
          { pdfFile ? <p>Количество страниц — {pdfFile.pages}</p> : <p>Загрузите файл в формате PDF</p> }
          { pdfFile && <p>Размер файла — {pdfFile.size}</p> }
        </label>
        <Button onClick={handleButtonClick}>Загрузить файл</Button>
      </div>
    </div>
  )
}

const Form = ({ pdfFile }: { pdfFile: FileInfo | null }) => {
  const pathname = usePathname()
  const servicePath = pathname.replace('/services/', '')
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    values,
    errors,
    handleChange,
    validate,
  } = useServicesForm(
    { phone: '' },
    { phone: validatePhone }
  )

  const handleSubmit = async () => {
    if (!validate()) return;
    if (!pdfFile || !pdfFile.file) {
      alert('Загрузите файл');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // 1. Сначала отправляем текстовые данные
      const textResponse = await fetch('/api/telegram-text-services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: servicePath,
          phone: values.phone,
          fileName: pdfFile.name,
          pageCount: pdfFile.pages,
          fileSize: pdfFile.size
        }),
      });

      const textResult = await textResponse.json();
      
      if (!textResponse.ok || !textResult.success) {
        throw new Error(textResult.error || 'Ошибка при отправке заявки');
      }

      // 2. Отправляем файл
      try {
        const fileFormData = new FormData();
        fileFormData.append('pdfFile', pdfFile.file);
        fileFormData.append('orderId', textResult.orderId || Date.now().toString());

        const fileResponse = await fetch('/api/telegram-file', {
          method: 'POST',
          body: fileFormData,
        });

        const fileResult = await fileResponse.json();
        
        if (!fileResponse.ok || !fileResult.success) {
          console.warn('Файл не отправлен:', fileResult.error);
          setSubmitError('Заявка отправлена, но файл не был прикреплен. Пожалуйста, свяжитесь с нами.');
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error 
          ? error.message 
          : 'Произошла неизвестная ошибка';
        setSubmitError(errorMessage || 'Произошла ошибка. Попробуйте позже.');
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }

      setSubmitSuccess(true);

      // Перенаправление на страницу благодарности
      setTimeout(() => {
        router.push(`/thanks?phone=${encodeURIComponent(values.phone)}`);
      }, 1500);
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Произошла неизвестная ошибка';
      setSubmitError(errorMessage || 'Произошла ошибка. Попробуйте позже.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = !values.phone || !!errors.phone || !pdfFile || isSubmitting

  return(
    <div>
      <p className="my-6 text-base">Менеджер свяжется с тобой по номеру для подтверждения заказа</p>
      <Input
        type="tel" 
        label="Номер телефона"
        placeholder="+7 980 324-12-32"
        value={values.phone}
        onChange={(e) => handleChange('phone')(e.target.value)}
        error={errors.phone}
      />

      {submitError && (
        <div className="text-red-500 text-sm mt-2">{submitError}</div>
      )}

      {submitSuccess && (
        <div className="text-green-500 text-sm mt-2">
          Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      <Button 
        className="w-full mt-6" 
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
      </Button>
    </div>
  )
}