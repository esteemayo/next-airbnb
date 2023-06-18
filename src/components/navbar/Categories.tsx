'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { categories } from '@/data';

const Categories = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  const category = params.get('category');

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => {
          const { icon, label } = item;
          return (
            <CategoryBox
              key={label}
              label={label}
              selected={category === 'label'}
              icon={icon}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
