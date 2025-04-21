import Image from "next/image"
import { Button } from "../../common/button"

export default function UpdateFileForm() {
  return(
    <div className="flex flex-col justify-center items-center gap-[2.5rem] border border-dashed border-grey-light p-8">
      <input 
        type="file"
        id="updateFileInput"
        className="hidden" />
      <label htmlFor="updateFileInput" className="flex flex-col justify-center items-center text-gray text-sm leading-normal">
        <Image
          src={'./pdfFile.svg'}
          height={100}
          width={100}
          alt="Загрузить файл диплома в формате pdf"/>
        <p>Загрузите файл в формате PDF</p>
      </label>
      <Button>Загрузить файл</Button>
    </div>
  )
}