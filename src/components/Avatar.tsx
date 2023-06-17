'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
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
