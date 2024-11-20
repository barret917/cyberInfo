import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ActiveClass.module.css';

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const linkClass = isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <Link href={href} className={linkClass} onClick={onClick}>
      {children}
    </Link>
  );
};

export { NavLink };
