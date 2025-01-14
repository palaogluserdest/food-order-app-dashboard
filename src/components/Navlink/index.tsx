'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { NavLinksProps } from '@/types/types';
import UpInRadius from '@/assets/icons/up-in-radius.svg';
import DownInRadius from '@/assets/icons/down-in-radius.svg';
import styles from './NavLink.module.scss';

const NavLink: FC<NavLinksProps> = ({ href, className, children }) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={href} className={`${pathname === href ? styles.active : ''} ${styles.navLink} ${className}`}>
        {children}
        <UpInRadius width={24} height={24} className={styles.uir} />
        <DownInRadius width={24} height={24} className={styles.dir} />
      </Link>
    </>
  );
};

export default NavLink;
