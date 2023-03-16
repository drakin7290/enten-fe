import { setCookie } from 'cookies-next';
import moment from 'moment/moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Container from '~/components/base/Container';
import Form from '~/components/base/Form';
import { USER_AUTH } from '~/context/defaultConst';
import { useLogin } from '~/hooks/api/useAuth';
import styles from './styles.module.scss';
export default function LoginContainer() {
  const hookForm = useForm();
  const { mutate: login } = useLogin();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const router = useRouter();
  function handleTimeExpired(time_expired) {
    let y = time_expired / 1000 / 60 / 60;
    let x = moment().add(y, 'hours').format('L LTS');
    return x;
  }
  function submit(data) {
    setLoadingLogin(true);
    login(
      {
        email: data?.email,
        password: data?.password,
      },
      {
        onSuccess(data) {
          setLoadingLogin(false);
          if (!data.error) {
            setCookie(USER_AUTH.TOKEN, data.data.access_token);
            setCookie(USER_AUTH.TIME_EXPIRED, handleTimeExpired(data.data.expires_in));
            toast.success('Login successfully');
            router.push('/');
          } else {
            toast.error(data?.message);
          }
        },
      }
    );
  }
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
              onSubmit={submit}
              loadingSubmit={loadingLogin}
              inputs={[
                {
                  list: [
                    {
                      label: 'Email',
                      name: 'email',
                      type: 'mail',
                      required: true,
                      validates: {
                        isEmail: true,
                      },
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
            <Link href="/auth/forgot-password">
              <a className={styles['forgot-password']}>Quên mật khẩu?</a>
            </Link>
            <div className={styles['redirect-signup']}>
              Bạn chưa có tài khoản?
              <Link href="/auth/register">
                <a className={styles['link-register']}>Đăng ký ngay!</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
