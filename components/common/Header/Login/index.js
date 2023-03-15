import { removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '~/components/base/Button';
import { USER_AUTH } from '~/context/defaultConst';
import { Edit, Logout } from '~/public/assets/svgs';
import SvgLogin from '~/public/assets/svgs/Login';
import { isLogged } from '~/utils/base';
import ItemPopup from './ItemPopup';

import styles from './styles.module.scss';

export default function Login() {
  const router = useRouter();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(isLogged());
  }, []);
  function logout() {
    removeCookies(USER_AUTH.TOKEN);
    removeCookies(USER_AUTH.TIME_EXPIRED);
    window.location.reload();
  }
  return (
    <>
      {logged ? (
        <div className={styles['logged']}>
          <img className={styles['avatar']} src="/imgs/avatar-boy.jpg" />
          <div className={styles['popup']}>
            <ItemPopup icon={<Edit />} label="Thông tin" />
            <ItemPopup icon={<Logout />} label="Đăng xuất" onClick={logout} />
          </div>
        </div>
      ) : (
        <Button
          className={styles['button']}
          iconBehind={<SvgLogin className={styles['icon-login']} />}
          onClick={() => {
            router.push('/auth/login');
          }}
        >
          Đăng nhập
        </Button>
      )}
    </>
  );
}
