import Container from '~/components/base/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import BannerItem from './BannerItem';
import styles from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';
export default function Banner() {
  const data = [
    {
      image: '/imgs/demos/banner-1.png',
    },
    {
      image: '/imgs/demos/banner-2.jpg',
    },
    {
      image: '/imgs/demos/banner-3.jpg',
    },
  ];
  return (
    <Container className={styles['banner']}>
      <div className={clsx(styles['slider'])}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: '.' + styles['navigation-right'],
            prevEl: '.' + styles['navigation-left'],
          }}
          // spaceBetween={device === 'extra-small' ? 20 : 40}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ el: '.' + styles['swiper-pagination'], clickable: true }}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide>
                <BannerItem image={item?.image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={`${styles['swiper-pagination']} swiper-pagination`}></div>
      </div>
    </Container>
  );
}
