import React from 'react';
import * as dateFns from 'date-fns';

const CellHeader = ({ currentMonth }) => {
  const dateFormat = 'EEE dd';
  const monthStartDate = dateFns.startOfMonth(currentMonth);
  const weekStartDate = dateFns.startOfWeek(monthStartDate, {
    weekStartsOn: 1,
  });
  const weekDaysArray = Array.from(Array(7), (_, i) => i);

  return (
    <div className="days row">
      {weekDaysArray.map((item, i) => (
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(weekStartDate, item), dateFormat)}
        </div>
      ))}
    </div>
  );
};

export default CellHeader;
