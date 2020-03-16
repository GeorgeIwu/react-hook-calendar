import React from 'react';
import * as dateFns from 'date-fns';

const CellHeader = ({ date }) => {
  const dateFormat = 'EEEE dd';
  const weekDaysArray = Array.from(Array(7), (_, i) => i);
  const weekStart = dateFns.startOfWeek(date, {weekStartsOn: 1});

  return (
    <div className="days row">
      {weekDaysArray.map((item, i) => (
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(weekStart, item), dateFormat)}
        </div>
      ))}
    </div>
  );
};

export default CellHeader;
