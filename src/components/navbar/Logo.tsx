'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  return (
    <Image
      src='/images/logo.png'
      width={100}
      height={100}
      alt='logo'
      className='hidden md:block cursor-pointer'
    />
  );
};

export default Logo;
