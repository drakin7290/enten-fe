import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '~/context/defaultConst';
import useResize from '~/hooks/useResize';
import { Spinner } from '~/public/assets/svgs';
import styles from './styles.module.scss';
export default function Button({
  className = '',
  children,
  onClick = function () {},
  style = {},
  styleMobile = {},
  upperCase = true,
  center = false,
  backgroundColor = '',
  responsive = true,
  disabled,
  outline = false,
  iconBehind = undefined,
  loading = false,
  ...props
}) {
  let upperCaseClass = '';

  const [styleForMobile, setStyleForMobile] = useState({});
  const { device } = useResize();
  useEffect(() => {
    if (device === 'extra-small') {
      setStyleForMobile(styleMobile);
    } else {
      setStyleForMobile({});
    }
  });

  if (upperCase === false) upperCaseClass = styles.normalCase;

  return (
    <button
      className={clsx(className, styles['btn-primary'], upperCaseClass, {
        [styles['center']]: center,
        [styles['responsive']]: responsive,
        [styles['disabled']]: disabled,
        [styles['outline']]: outline,
      })}
      onClick={(e) => {
        onClick(e);
      }}
      style={{
        color: outline,
        borderColor: outline,
        ...style,
        ...styleForMobile,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {children}
      {!loading && iconBehind}
      {loading && (
        <Spinner
          width="30px"
          height="30px"
          style={{
            color: '#fff',
          }}
        />
      )}
    </button>
  );
}
