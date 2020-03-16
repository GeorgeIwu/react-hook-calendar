import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import CellContent from './CellContent';
import CellHeader from './CellHeader';
import Header from './Header';

const Month = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <Header date={date} setDate={setDate} />
      <CellHeader date={date} setDate={setDate} />
      <CellContent date={date} setDate={setDate} />
    </div>
  );
};

export default Month;
