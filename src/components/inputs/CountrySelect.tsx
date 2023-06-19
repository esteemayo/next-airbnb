'use client';

import Select from 'react-select';
import useCountries from '@/hooks/useCountries';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange(value: CountrySelectValue): void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return <div>CountrySelect</div>;
};

export default CountrySelect;
