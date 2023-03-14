import { useState } from 'react';
import { EyeClose, EyeOpen } from '~/public/assets/svgs';

export default function InputPassword({ type, register, ...props }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <input type={show ? 'text' : 'password'} {...register(props?.name)} {...props} />
      <div
        onClick={() => {
          setShow((prev) => !prev);
        }}
        style={{
          cursor: 'pointer',
        }}
      >
        {show ? (
          <EyeClose
            style={{
              color: '#333',
            }}
            width="24px"
            height="24px"
          />
        ) : (
          <EyeOpen
            style={{
              color: '#333',
            }}
            width="24px"
            height="24px"
          />
        )}
      </div>
    </>
  );
}
