import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import Cell from './Cell';
import CellHeader from './CellHeader';
import Header from './Header';

const Month = () => {
  const [day, setDay] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const monthStart = dateFns.startOfMonth(month);
  const weekStart = dateFns.startOfWeek(monthStart, {weekStartsOn: 1});
  const monthWeeks = dateFns.getWeeksInMonth(month, {weekStartsOn: 1});

  return (
    <div className="calendar">
      <Header currentMonth={month} handleSetMonth={setMonth} />
      <CellHeader weekStart={weekStart} />
      <Cell currentDay={day} handleSetDay={setDay} monthStart={monthStart} weekStart={weekStart} monthWeeks={monthWeeks}/>
    </div>
  );
};

export default Month;
