import Image from "next/image";
import { Button } from "../../common/button";
import { useRef } from 'react';
import { getPageCount, formatFileSize } from "@/app/lib/utils"
import { useOrder } from "@/app/context/OrderContext";

export default function UpdateFileForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { pdfFile, setPdfFile } = useOrder();

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
          src={pdfFile ? './fileDone.svg' : './pdfFile.svg'}
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
  );
}