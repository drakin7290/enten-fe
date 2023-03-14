import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Container from '~/components/base/Container';
import Form from '~/components/base/Form';
import styles from './styles.module.scss';
export default function LoginContainer() {
  const hookForm = useForm();
  return (
    <div className={styles['login']}>
      <Container className={styles['container']}>
        <Link href="/">
          <a>
            <img className={styles['logo']} src="/imgs/svgs/logo.svg" />
          </a>
        </Link>
        <div className={styles['login-container']}>
          <img className={styles['image']} src="/imgs/undraw/summer.svg" />
          <div className={styles['form-login']}>
            <Form
              className={styles['form']}
              hookForm={hookForm}
              title={'Đăng nhập'}
              submitText={'Đăng nhập'}
              inputs={[
                {
                  list: [
                    {
                      label: 'Username',
                      name: 'username',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  list: [
                    {
                      label: 'Password',
                      name: 'password',
                      type: 'password',
                      required: true,
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
