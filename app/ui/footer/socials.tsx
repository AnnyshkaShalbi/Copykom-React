
import Link from 'next/link';
import Image from "next/image"
 
const socials = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/copy.kom?igsh=dHI1b21uMm5udm5v',
    src: '/socials/instagram.svg' 
  },
  { 
    name: 'Vkontakte', 
    href: 'https://vk.com/copykom',
    src: '/socials/vk.svg' 
  },
  { 
    name: 'WhatsApp', 
    href: 'https://api.whatsapp.com/send/?phone=79154310666',
    src: '/socials/whatsapp.svg' 
  },
];
 
export default function Socials() {
  return (
    <div className='flex gap-7'>
      {socials.map((item) => {
        
        return (
          <Link
            key={item.name}
            href={item.href}
          >
            <Image
              width={40}
              height={40}
              src={item.src}
              alt={item.name}
            />
          </Link>
        );
      })}
    </div>
  );
}