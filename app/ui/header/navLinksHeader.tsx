
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Dropdown from '../common/dropdown';

 
const links = [
  { name: 'Печать документов', href: '/services/copydoc' },
  { name: 'Печать чертежей', href: '/services/drawings' },
  { name: 'Печать презентаций', href: '/services/presentations' },
  { name: 'Печать лекал', href: '/services/patterns' },
  { name: 'Сканирование', href: '/services/scanning' },
  { name: 'Твёрдый переплёт', href: '/services/hardcover' },
  { name: 'Брошюровка', href: '/services/brochure' },
];
 
export default function NavLinksHeader() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block border-b border-primary w-full">
      <div className="wrapper p-4">
      
      <ul className='flex gap-11 items-center'>
        <li>
          <Link href={''}>Печать диплома</Link>
        </li>
        <li>
          <Link href={''}>Проектная документация</Link>
        </li>
        <li>
          <Dropdown buttonLabel='Другие услуги' items={links} />
        </li>
      </ul>
        
      </div>
    </div>
  );
}