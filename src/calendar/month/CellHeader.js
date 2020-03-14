import React from 'react';
import * as dateFns from 'date-fns';

const CellHeader = ({ weekStart }) => {
  const dateFormat = 'EEE dd';
  const weekDaysArray = Array.from(Array(7), (_, i) => i);

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
