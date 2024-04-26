'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className='w-full absolute z-10 flex flex-wrap terms-center justify-between mx-auto p-8'>
      <Link className={pathname === '/' ? 'font-bold' : ''} href='/'>
        Home
      </Link>
      <Link
        className={pathname === '/performance' ? 'font-bold' : ''}
        href='/performance'>
        Performance
      </Link>
      <Link
        className={pathname === '/reliability' ? 'font-bold' : ''}
        href='/reliability'>
        Reliability
      </Link>
      <Link className={pathname === '/scale' ? 'font-bold' : ''} href='/scale'>
        Scale
      </Link>
    </nav>
  );
}
