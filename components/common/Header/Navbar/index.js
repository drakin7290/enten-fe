import { ArrowDown } from '~/public/assets/svgs';
import NavbarItem from './NavbarItem';

import styles from './styles.module.scss';

export default function Navbar() {
  const data = [
    {
      label: 'Bảng từ vựng',
      to: '/vocabularies',
    },
    {
      label: 'Ngữ pháp',
      to: '/grammars',
    },
    {
      label: 'Luyện tập',
      to: '/practice',
    },
    {
      label: 'Trò chơi',
      to: '/games',
    },
  ];
  return (
    <div className={styles['navbar']}>
      {data.slice(0, data?.length > 3 ? 2 : data?.length)?.map((item, index) => {
        return <NavbarItem key={index} {...item} />;
      })}
      <div className={styles['more-nav']}>
        <span className={styles['more-nav__label']}>
          Nhiều hơn <ArrowDown className={styles['more-icon']} />
        </span>
        <div className={styles['more-nav__popup']}>
          {data.slice(2, data?.length)?.map((item, index) => {
            return <NavbarItem key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
