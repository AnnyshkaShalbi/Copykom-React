'use client';
import { useState } from 'react';
import ItemTitle from '@/app/ui/order/stepOne/itemTitle';

export default function ColorForCover() {
  const [colors, setColors] = useState([
    { id: '1', name: 'Красный', value: '#ff4d4f' },
    { id: '2', name: 'Синий', value: '#1890ff' }
  ]);
  
  const [selectedColor, setSelectedColor] = useState('#ff4d4f');
  const [isAdding, setIsAdding] = useState(false);
  const [newColor, setNewColor] = useState({ name: '', value: '#000000' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleAddColor = () => {
    if (!newColor.name) return;
    
    setColors([...colors, { 
      id: Date.now().toString(), 
      name: newColor.name, 
      value: newColor.value 
    }]);
    setNewColor({ name: '', value: '#000000' });
    setIsAdding(false);
  };

  const handleEditColor = () => {
    if (!editingId || !newColor.name) return;
    
    setColors(colors.map(color => 
      color.id === editingId 
        ? { ...color, name: newColor.name, value: newColor.value } 
        : color
    ));
    setEditingId(null);
    setIsAdding(false);
    setActiveMenu(null);
  };

  const handleDeleteColor = (id: string) => {
    if (colors.length <= 2) return;
    setColors(colors.filter(color => color.id !== id));
    setActiveMenu(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <ItemTitle index={1} title="Выбор цвета обложки" />
        
        <div className="flex flex-wrap items-center gap-4">
          {colors.map(color => (
            <div key={color.id} className="relative">
              <div 
                className={`w-12 h-12 rounded-full cursor-pointer border-2 transition-all flex items-center justify-center
                  ${selectedColor === color.value ? 'border-black scale-110' : 'border-transparent'}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              >
                {/* Кнопка меню */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === color.id ? null : color.id);
                  }}
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border shadow flex items-center justify-center hover:bg-gray-100"
                >
                  ⋮
                </button>
              </div>
              
              {/* Выпадающее меню */}
              {activeMenu === color.id && (
                <div className="absolute right-0 bottom-full mb-2 bg-white rounded shadow-lg p-1 z-10 flex flex-col gap-1 min-w-[120px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNewColor({ name: color.name, value: color.value });
                      setEditingId(color.id);
                      setIsAdding(true);
                      setActiveMenu(null);
                    }}
                    className="px-3 py-1 text-left hover:bg-gray-100 rounded flex items-center gap-2"
                  >
                    <span>✎</span>
                    <span>Изменить</span>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteColor(color.id);
                    }}
                    className="px-3 py-1 text-left hover:bg-gray-100 rounded flex items-center gap-2 text-red-600"
                    disabled={colors.length <= 2}
                  >
                    <span>×</span>
                    <span>Удалить</span>
                  </button>
                </div>
              )}
            </div>
          ))}
          
          <button 
            onClick={() => {
              setNewColor({ name: '', value: '#000000' });
              setEditingId(null);
              setIsAdding(true);
              setActiveMenu(null);
            }}
            className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:border-gray-600 text-2xl"
          >
            +
          </button>
        </div>
      </div>

      {isAdding && (
        <div className="sm:ml-[120px] p-4 bg-gray-50 rounded-lg space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Название цвета"
            value={newColor.name}
            onChange={(e) => setNewColor({...newColor, name: e.target.value})}
            className="w-full px-3 py-2 border rounded"
          />
          
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={newColor.value}
              onChange={(e) => setNewColor({...newColor, value: e.target.value})}
              className="h-12 w-12 cursor-pointer rounded-full overflow-hidden"
            />
            <span className="text-sm text-gray-600">Выберите цвет</span>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={editingId ? handleEditColor : handleAddColor}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex-1"
            >
              {editingId ? 'Сохранить' : 'Добавить цвет'}
            </button>
            
            <button 
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex-1"
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
}