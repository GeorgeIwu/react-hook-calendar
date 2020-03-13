import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import Cell from './Cell';
import CellHeader from './CellHeader';
import Header from './Header';

const Month = () => {
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  // const startDate = dateFns.startOfWeek(currentMonth, { weekStartsOn: 0 });

  return (
    <div className="calendar">
      <Header currentMonth={month} handleSetMonth={setMonth} />
      <CellHeader currentMonth={month} />
      <Cell currentMonth={month} currentDay={day} handleSetDay={setDay} />
    </div>
  );
};

export default Month;
