import * as React from 'react';
const SvgLogin = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M15.573 20.493a.989.989 0 0 1-.706-.293 1.006 1.006 0 0 1 0-1.413l2.706-2.707-2.706-2.707a1.006 1.006 0 0 1 0-1.413 1.006 1.006 0 0 1 1.413 0l3.413 3.413a1.006 1.006 0 0 1 0 1.414L16.28 20.2a.967.967 0 0 1-.707.293Z"
      fill={'currentColor'}
    />
    <path
      d="M18.893 17.08H5.333c-.546 0-1-.453-1-1 0-.547.454-1 1-1h13.56c.547 0 1 .453 1 1 0 .547-.453 1-1 1Z"
      fill={'currentColor'}
    />
    <path
      d="M16 27.667c-.547 0-1-.454-1-1 0-.547.453-1 1-1 5.693 0 9.667-3.974 9.667-9.667S21.693 6.333 16 6.333c-.547 0-1-.453-1-1 0-.546.453-1 1-1 6.867 0 11.667 4.8 11.667 11.667S22.867 27.667 16 27.667Z"
      fill={'currentColor'}
    />
  </svg>
);
export default SvgLogin;
