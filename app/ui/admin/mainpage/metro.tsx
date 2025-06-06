'use client';
import Image from 'next/image';
import { tenor_sans } from "@/app/ui/fonts";
import { Office } from '@/app/lib/types/offices';

interface MetroAdminProps {
  offices: Office[];
  onDeleteClick: (id: number | undefined) => void;
  onEditClick: (office: Office) => void;
}

export default function MetroAdmin({ offices, onDeleteClick, onEditClick }: MetroAdminProps) {
  return (
    <div className="wrapper flex flex-col justify-between px-5 gap-3 md:grid md:grid-cols-2 md:gap-6">
      {offices.map((office) => (
        <div 
          key={office.id} 
          className="flex flex-col sm:flex-row items-start gap-3 relative group p-3 rounded-lg transition-colors hover:bg-gray-50"
        >
          <button
            onClick={() => onEditClick(office)}
            className="opacity-0 group-hover:opacity-100 transition-opacity
                      w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full
                      text-white hover:bg-blue-600 z-10"
            aria-label="Редактировать"
          >
            ✎
          </button>
          <button
            onClick={() => onDeleteClick(office?.id)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity
                      w-6 h-6 flex items-center justify-center bg-red-500 rounded-full
                      text-white hover:bg-red-600 z-10"
            aria-label="Удалить офис"
          >
            &times;
          </button>

          <Image
            width={45}
            height={41}
            src={'/metro.svg'}
            alt="Иконка метро"
            className="flex-shrink-0"
          />
          
          <div className="flex-1 min-w-0">
            <h3 className={`${tenor_sans.className} uppercase text-xl mt-2`}>{office.title}</h3>
            <p className="text-gray truncate">{office.address}</p>
            <p className="text-gray-600">{office.opening_hours}</p>
          </div>
        </div>
      ))}
    </div>
  );
}