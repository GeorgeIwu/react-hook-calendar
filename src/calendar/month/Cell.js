import React from 'react';
import * as dateFns from 'date-fns';

const enLocale = require('date-fns/locale/en-US');

const Cell = ({ currentMonth, currentDay, handleSetDay }) => {
  const dateFormat = 'd';
  const monthStartDate = dateFns.startOfMonth(currentMonth);
  const weekStartDate = dateFns.startOfWeek(monthStartDate, {
    weekStartsOn: 1,
  });
  const weeksInMonth = dateFns.getWeeksInMonth(currentMonth, {
    weekStartsOn: 1,
  });

  const weekDaysArray = Array.from(Array(7), (_, i) => i);
  const monthWeeksArray = Array.from(Array(weeksInMonth), (_, i) => i);

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
          const day = dateFns.addDays(weekStartDate, item);
          const formattedDate = dateFns.format(day, dateFormat);

          return (
            <div
              className={`col cell ${
                !dateFns.isSameMonth(day, monthStartDate)
                  ? 'disabled'
                  : dateFns.isSameDay(day, currentDay)
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
