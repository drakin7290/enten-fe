import Link from 'next/link';
import Button from '~/components/base/Button';
import Container from '~/components/base/Container';
import { Login } from '~/public/assets/svgs';
import Navbar from './Navbar';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles['header']}>
      <Container className={styles['container']}>
        <Link href="/">
          <a>
            <img className={styles['logo']} src="/imgs/svgs/logo.svg" />
          </a>
        </Link>
        <Navbar />
        <Button className={styles['button']} iconBehind={<Login className={styles['icon-login']} />}>
          Đăng nhập
        </Button>
      </Container>
    </header>
  );
}
