import Logo from '@/assets/icons/logo.svg';
import Home from '@/assets/icons/home.svg';
import Discount from '@/assets/icons/discounts.svg';
import Dashboard from '@/assets/icons/dashboard.svg';
import Message from '@/assets/icons/messages.svg';
import Notification from '@/assets/icons/notifications.svg';
import Setting from '@/assets/icons/settings.svg';
import Logout from '@/assets/icons/log-out.svg';
import styles from './Navbar.module.scss';
import NavLink from '../Navlink';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Logo width={34} height={32} className={styles.icons} />
          </Link>
        </div>
      </div>
      <div className={styles.themeToggle}></div>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink href="/">
            <Home width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink href="/discount">
            <Discount width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink href="/dashboard">
            <Dashboard width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink href="/messages">
            <Message width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink href="/notifications">
            <Notification width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink href="/settings">
            <Setting width={40} height={40} className={styles.icons} />
          </NavLink>
        </li>
      </ul>
      <div className={styles.logOut}>
        <Logout width={40} height={40} className={styles.logoutIcon} />
      </div>
    </div>
  );
};

export default Navbar;
