'use client';
import { useState, useEffect } from 'react';
import Input from "../input";
import { Office } from '@/app/lib/types/offices';


interface ModalAddEditProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  initialData?: Office;
  onConfirm: (data: Office) => Promise<void>;
  onCancel: () => void;
  text: string;
}

export function ModalAddEdit({ 
  isOpen, 
  mode, 
  initialData, 
  onConfirm, 
  onCancel,
  text 
}: ModalAddEditProps) {
  const [formData, setFormData] = useState<Office>({
    title: '',
    address: '',
    opening_hours: ''
  });
  const [errors, setErrors] = useState<Partial<Office>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Инициализация формы при открытии/изменении режима
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData || {
        title: '',
        address: '',
        opening_hours: ''
      });
      setErrors({});
    }
  }, [isOpen, initialData]);

  const handleChange = (field: keyof Office) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Office> = {};
    if (!formData.title.trim()) newErrors.title = 'Введите название';
    if (!formData.address.trim()) newErrors.address = 'Введите адрес';
    if (!formData.opening_hours.trim()) newErrors.opening_hours = 'Введите часы работы';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await onConfirm(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-md p-6">
        <h3 className="mb-5 text-lg font-normal text-gray-500">
          {text}
        </h3>

        <div className="space-y-4">
          <Input
            type="text"
            label="Заголовок метро:"
            placeholder="Авиамоторная"
            value={formData.title}
            onChange={(e) => handleChange('title')(e.target.value)}
            error={errors.title}
            required
          />

          <Input
            type="text"
            label="Адрес офиса:"
            placeholder="ул. Красноказарменная, 15к1"
            value={formData.address}
            onChange={(e) => handleChange('address')(e.target.value)}
            error={errors.address}
            required
          />

          <Input
            type="text"
            label="Часы работы:"
            placeholder="пн-пт 9.00-18.00, сб 9:00-16:00"
            value={formData.opening_hours}
            onChange={(e) => handleChange('opening_hours')(e.target.value)}
            error={errors.opening_hours}
            required
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Отмена
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
              isSubmitting 
                ? 'bg-gray-400' 
                : mode === 'add' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Сохранение...' : mode === 'add' ? 'Добавить' : 'Сохранить'}
          </button>
        </div>
      </div>
    </div>
  );
}