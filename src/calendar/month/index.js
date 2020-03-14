import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import Cell from './Cell';
import CellHeader from './CellHeader';
import Header from './Header';

const Month = () => {
  const [date, setDate] = useState(new Date());
  const monthStart = dateFns.startOfMonth(date);
  const monthFirstWeek = dateFns.startOfWeek(monthStart, {weekStartsOn: 1});

  return (
    <div className="calendar">
      <Header currentDate={date} handleSetDate={setDate} />
      <CellHeader weekStart={monthFirstWeek} />
      <Cell currentDate={date} handleSetDate={setDate} weekStart={monthFirstWeek} />
    </div>
  );
};

export default Month;
