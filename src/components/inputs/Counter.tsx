'use client';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange(value: number): void;
}

const Counter:React.FC<CounterProps> = ({ title, subtitle, value, onChange }) => {
  return <div>Counter</div>;
};

export default Counter;
