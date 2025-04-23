import Image from "next/image";
import { Button } from "../../common/button";
import { useRef, useState } from 'react';
import { getPageCount, formatFileSize } from "@/app/lib/utils"

export default function UpdateFileForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: string;
    pages: number | null;
  } | null>();

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
      
      setFileInfo({
        name: file.name,
        size: formatFileSize(file.size),
        pages: pageCount
      });
      
      console.log('Файл загружен:', {
        name: file.name,
        size: file.size,
        pages: pageCount
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[2.5rem] border border-dashed border-grey-light p-8">
      <input 
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        id="updateFileInput"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="updateFileInput" className="flex flex-col justify-center items-center text-gray text-sm leading-normal cursor-pointer">
        <Image
          src={fileInfo ? './fileDone.svg' : './pdfFile.svg'}
          height={100}
          width={100}
          alt={fileInfo ? "PDF файл загружен" : "Загрузить файл диплома в формате pdf"}
          className="fade-in"
        />
        { fileInfo ? <p>Количество страниц — {fileInfo.pages}</p> : <p>Загрузите файл в формате PDF</p> }
        { fileInfo && <p>Размер файла — {fileInfo.size}</p> }
        
      </label>
      <Button onClick={handleButtonClick}>Загрузить файл</Button>
    </div>
  );
}