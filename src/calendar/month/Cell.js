import React from 'react';
import * as dateFns from 'date-fns';

const Cell = ({ handleSetDay, monthStart, weekStart, monthWeeks }) => {
  const dateFormat = 'd';
  const today = new Date();
  const weekDaysArray = Array.from(Array(7), (_, i) => i);
  const monthWeeksArray = Array.from(Array(monthWeeks), (_, i) => i);

  const onDateClick = newDay => {
    handleSetDay(dateFns.parse(newDay));
  };

  const rowZ = monthWeeksArray.map((monthWeek, i) => {
    const weekDaysForMonthWeek = weekDaysArray.map(
      weekDay => weekDay + monthWeek * 7
    );

    return (
      <div className="row" key={i}>
        {weekDaysForMonthWeek.map((item, index) => {
          const day = dateFns.addDays(weekStart, item);
          const formattedDate = dateFns.format(day, dateFormat);

          return (
            <div
              className={`col cell ${
                !dateFns.isSameMonth(day, monthStart)
                  ? 'disabled'
                  : dateFns.isSameDay(day, today)
                  ? 'selected'
                  : ''
              }`}
              key={index}
              onClick={() => onDateClick(day)}
            >
              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="body">{rowZ}</div>;
};

export default Cell;
