import Link from 'next/link';

import styles from './styles.module.scss';

export default function NavbarItem({ label, to = '/' }) {
  return (
    <Link href={to}>
      <a className={styles['item']}>{label}</a>
    </Link>
  );
}
