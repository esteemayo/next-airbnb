'use client';

import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { categories } from '@/data';

const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => {
          const { icon, label, description } = item;
          return <CategoryBox key={label} label={label} description={description} icon={icon} />;
        })}
      </div>
    </Container>
  );
};

export default Categories;
