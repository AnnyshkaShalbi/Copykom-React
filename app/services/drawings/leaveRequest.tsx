'use client'
import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/app/ui/common/button"
import Input from "@/app/ui/common/input"

export default function LeaveRequest() {
  return(
    <div>
      <Download />
      <Form />
    </div>
  )
}

const Download = () => {
  return(
    <div className="border border-border border-dashed flex justify-between flex-col p-12 items-center gap-6">
      <div className="flex items-center justify-center gap-2 flex-col">
        <Image 
          width={100}
          height={100}
          src="/pdfFile.svg"
          alt="Загрузить файл диплома в формате pdf"
        />
        <p className="text-[#464F6A] text-base">Загрузите файл в формате PDF</p>
      </div>
      <Button>Загрузить файл</Button>
    </div>
  )
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return(
    <div>
      <p className="my-6 text-base">Менеджер свяжется с тобой по номеру для подтверждения заказа</p>
      <Input
        type="email"
        label="Email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <Button className="w-full mt-6" disabled={true}>Оставить заявку</Button>
    </div>
  )
}