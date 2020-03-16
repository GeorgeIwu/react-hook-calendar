import React from 'react';
import * as dateFns from 'date-fns';

const CellContent = ({ date, setDate }) => {
  const currentDate = new Date();
  const dayHoursArray = Array.from(Array(24), (_, i) => i);
  const weekDays = Array.from(Array(7), (_, i) => i);
  const weekStart = dateFns.startOfWeek(date, {weekStartsOn: 1});
  const weekDatesFromWeek = weekDays.map(weekDay => dateFns.addDays(weekStart, weekDay));

  const onClickCell = data => {
    setDate(dateFns.parse(data));
  };

  const rowZ = dayHoursArray.map((dayHour, i) => {
    return (
      <div className="row" key={i}>
        {weekDatesFromWeek.map((weekDate, index) => {
          const now = dateFns.setHours(weekDate, dayHour)
          const formattedNow = dateFns.format(now, 'hh');

          return (
            <div
            className={`col cell ${
              dateFns.isSameHour(now, currentDate)
                  ? 'selected'
                  : ''
              }`}
              key={index}
              onClick={() => onClickCell(now)}
            >
              <span className="number">{formattedNow}</span>
              <span className="bg">{formattedNow}</span>
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="body">{rowZ}</div>;
};

export default CellContent;
