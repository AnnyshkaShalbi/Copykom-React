import { Button } from "@/app/ui/common/button"
import Input from "@/app/ui/common/input"
import Link from "next/link"
import Comment from "@/app/ui/common/comment"

export default function FormOrder() {
  return(
    <div className="flex flex-col flex-wrap gap-4">
      <div className="grid grid-cols-2 gap-7 items-center">
        <Input
          type="text"
          label="Номер телефона"
          placeholder="+7 980 324-12-32"
          value={''}
          onChange={(e) => { console.log('onChange') }}
        />
        <Input
          type="text"
          label="Имя"
          placeholder="Андрей"
          value={''}
          onChange={(e) => { console.log('onChange') }}
        />
      </div>

      <Input
        type="email"
        label="Электронная почта"
        placeholder="example@gmail.com"
        value={''}
        onChange={(e) => { console.log('onChange') }}
      />

      <Comment 
        onChange={() => {}}
        label="Комментарий"
        placeholder="Завернуть диплом в пленку или добавить пакет" />

      <div className="grid grid-cols-2 gap-7 items-center">
        <Button>Оформить заказ</Button>
        <p className="text-sm">Нажимая кнопку «Оформить заказ», ты даёшь своё согласие на обработку <Link href="/privacy" className="link">персональных данных</Link></p>
      </div>
    </div>
  )
}