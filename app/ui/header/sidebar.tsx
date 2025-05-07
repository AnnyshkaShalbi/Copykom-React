import clsx from "clsx";
import Link from 'next/link';
import { tenor_sans } from "../fonts";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { name: 'Печать документов', href: '/services/copydoc' },
  { name: 'Печать чертежей', href: '/services/drawings' },
  { name: 'Печать презентаций', href: '/services/presentations' },
  { name: 'Печать лекал и выкроек', href: '/services/patterns' },
  { name: 'Сканирование документов', href: '/services/scanning' },
  { name: 'Брошюровка на пластиковую пружину', href: '/services/brochure' },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={clsx(
        "fixed top-[65px] left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-50 py-2 px-6",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <NavLinks onClose={onClose} />
      <SidebarFooter onClose={onClose} />
    </div>
  );
}

const NavLinks = ({ onClose }: { onClose: () => void }) => {
  return(
    <nav className="pb-4">
      <ul className='flex flex-col'>
        <li onClick={onClose}>
          <NavTitle text="Печать диплома" link="/order" />
        </li>
        <li onClick={onClose}>
          <NavTitle text="Проектная документация" link="/services/projectdoc" />
        </li>
        <li>
          <NavTitle text="Другие услуги" />
        </li>

        {links.map((link) => {
          return (
            <li key={link.name} onClick={onClose}>
              <Link
                href={link.href}
                className="w-full flex pb-2"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

interface NavTitleProps {
  text: string;
  link?: string;
}

const NavTitle = ({ text, link }: NavTitleProps) => {
  return(
    <>
      {link ? 
        <Link 
          href={link || '#'}
          className={`${tenor_sans.className} uppercase border-b border-primary pb-1 mb-7 w-full flex`}>{text}</Link> 
        : 
        <span className={`${tenor_sans.className} uppercase border-b border-primary pb-1 mb-7 w-full flex`}>{text}</span>
      }
    </>
  )
}

const SidebarFooter = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const pathName = usePathname()

  const handleScrollToMap = () => {
    if(pathName != '/') {
      router.push('/')

      setTimeout(() => {
        const mapBlock = document.getElementById('map');
        onClose()
        if(mapBlock) {
          mapBlock?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000)
    }
    
    const mapBlock = document.getElementById('map');
    onClose()
    if(mapBlock) {
      mapBlock?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById('footer');
    onClose()
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <div className="flex justify-between items-center flex-wrap gap-4">
      <Link
        target="_blank"
        href={'https://api.whatsapp.com/send/?phone=79154310666'}
        className={`${tenor_sans.className} text-xl`}
      >+ 7 (915) 431-06-66</Link>

      <ul className="flex items-center gap-5">
        <li className="flex items-center gap-2" onClick={handleScrollToMap}>
          <Image
            width={16}
            height={16}
            src="/mapPin.svg"
            alt="Месторасположение главного офиса"
          />
          Москва
        </li>
        <li onClick={handleScrollToFooter} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-500">
          Контакты
        </li>
      </ul>
    </div>
  )
}