'use client';

import { Range, RangeKeyDict } from 'react-date-range';

interface CalendarProps {
  value: Range,
  onChange(value: RangeKeyDict): void;
  disabledDates?: Date[];
}

const Calendar = () => {
  return (
    <div>
      Calendar
    </div>
  );
};

export const Calendar;
