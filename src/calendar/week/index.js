import React, { useState } from 'react';
import CellContent from './CellContent';
import CellHeader from './CellHeader';
import Header from './Header';

const Week = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <Header date={date} setDate={setDate} />
      <CellHeader date={date} setDate={setDate} />
      <CellContent date={date} setDate={setDate} />
    </div>
  );
};

export default Week;
