'use client';

import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src='/images/logo.png'
        width={100}
        height={100}
        alt='logo'
        className='hidden md:block cursor-pointer'
      />
    </div>
  );
};

export default Logo;
