import Image from "next/image"

export default function Header() {
  return(
    <div className="border-b border-primary w-full flex justify-between items-center py-2 px-4">
      <Image
        width={36}
        height={36}
        src="/burger.svg"
        alt="Иконка для открытия бокового меню"
      />
      <Image
        width={118}
        height={36}
        src="/logoBlack.png"
        alt="Копикома - копировальный центр для студентов"
      />
      <Image
        width={36}
        height={36}
        src="/whatsapp.svg"
        alt="Whats'app для связи с Копикомой в мессенджере."
      />
    </div>
  )
}