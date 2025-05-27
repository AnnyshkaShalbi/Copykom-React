'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Office } from '@/app/lib/types/offices';
import Preloader from '@/app/ui/common/preloader';
import MetroAdminList from '@/app/ui/admin/mainpage/metro';
import { ModalDelete } from '@/app/ui/common/modals/modalDelete';
import { ModalAddEdit } from '@/app/ui/common/modals/modalAddEdit';
import { Button } from '@/app/ui/common/button';
import MetroSkeleton from "@/app/ui/home/skeletonMetro";

export default function AdminMainPage() {
  const router = useRouter();
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [officeToDelete, setOfficeToDelete] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOffice, setCurrentOffice] = useState<Office | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

  const handleAddOffice = () => {
    setModalMode('add');
    setCurrentOffice(null);
    setIsModalOpen(true);
  };

  const handleEditOffice = (office: Office) => {
    setModalMode('edit');
    setCurrentOffice(office);
    setIsModalOpen(true);
  };

  const handleSaveOffice = async (data: Office) => {
    try {
      const url = '/api/offices';
      const method = modalMode === 'add' ? 'POST' : 'PUT';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalMode === 'edit' ? { ...data, id: currentOffice?.id } : data)
      });

      if (!response.ok) throw new Error('Ошибка сохранения');

      const result = await response.json();
      
      // Обновляем список офисов
      if (modalMode === 'add') {
        setOffices(prev => [...prev, result]);
      } else {
        setOffices(prev => prev.map(o => o.id === result.id ? result : o));
      }
      
      setIsModalOpen(false);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem('admin_id')) {
      router.push('/admin/login');
      return;
    }

    const fetchOffices = async () => {
      try {
        const response = await fetch('/api/offices');
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        setOffices(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchOffices();
  }, [router]);

  const handleDeleteClick = (id: number | undefined) => {
    if (id === undefined) {
    console.error('Попытка удаления офиса без ID');
    setError('Не удалось определить офис для удаления');
    return;
  }
  
  setOfficeToDelete(id);
  setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!officeToDelete) {
      setError('Не выбран офис для удаления');
      setShowModal(false);
      return;
    }

    try {
      const response = await fetch('/api/offices', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: officeToDelete })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка при удалении');
      }

      // Оптимистичное обновление UI
      setOffices(prev => prev.filter(office => office.id !== officeToDelete));
    
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка при удалении');
    } finally {
      setShowModal(false);
      setOfficeToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setOfficeToDelete(null);
  };

  if (loading) return <Preloader />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
     <Button 
      onClick={handleAddOffice}
      className='mb-6'
     >
      Добавить офис
     </Button>

      { offices.length > 0 ? 
        <MetroAdminList 
          offices={offices} 
          onDeleteClick={handleDeleteClick} 
          onEditClick={handleEditOffice}
        /> : <MetroSkeleton /> }
      
      
      <ModalDelete 
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        text="Уверены ли вы, что хотите удалить данный офис?"
        
      />

      <ModalAddEdit
        isOpen={isModalOpen}
        mode={modalMode}
        initialData={currentOffice || undefined}
        onConfirm={handleSaveOffice}
        onCancel={() => setIsModalOpen(false)}
        text={modalMode === 'add' ? 'Добавление нового офиса' : 'Редактирование офиса'}
      />
    </div>
  );
}