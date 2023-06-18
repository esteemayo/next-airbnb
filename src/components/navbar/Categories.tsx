'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { categories } from '@/data';

const Categories = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  const category = params.get('category');

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => {
          const { icon, label } = item;
          return <CategoryBox key={label} label={label} icon={icon} />;
        })}
      </div>
    </Container>
  );
};

export default Categories;
