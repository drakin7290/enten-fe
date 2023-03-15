import Link from 'next/link';
import Container from '~/components/base/Container';
import Login from './Login';
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
        <Login />
      </Container>
    </header>
  );
}
