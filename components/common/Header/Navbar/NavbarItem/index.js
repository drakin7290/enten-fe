import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export default function NavbarItem({ label, to = '/' }) {
  const router = useRouter();

  return (
    <Link href={to}>
      <a
        className={clsx(styles['item'], {
          [styles['active']]: router.route.slice(1).split('/')[0] === to.slice(1).split('/')[0],
        })}
      >
        {label}
      </a>
    </Link>
  );
}
