'use client';

interface ModalDeleteProps {
  isOpen: boolean;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ModalDelete({ isOpen, text, onConfirm, onCancel }: ModalDeleteProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-md">
        <div className="p-4 md:p-5 text-center">
          <svg 
            className="mx-auto mb-4 text-gray-400 w-12 h-12" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 20 20"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500">
            {text}
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={onConfirm}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none 
                        focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Да, удалить
            </button>
            <button
              onClick={onCancel}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none 
                        bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                        focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Нет, отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}