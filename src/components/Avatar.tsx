'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image
        src='/images/placeholder.jpg'
        width={30}
        height={30}
        alt='Avatar'
        className='rounded-full'
      />
    </div>
  );
};

export default Avatar;
