import React from 'react';
import * as dateFns from 'date-fns';

const CellContent = ({ setDate, date }) => {
  const currentDate = new Date();
  const weekDays = Array.from(Array(7), (_, i) => i);
  const monthWeeks = Array.from(Array(dateFns.getWeeksInMonth(date, {weekStartsOn: 1})), (_, i) => i) ;
  const monthStartWeek = dateFns.startOfWeek(dateFns.startOfMonth(date), {weekStartsOn: 1});
  const monthWeeksFromMonth = monthWeeks.map(monthWeek => dateFns.addWeeks(monthStartWeek, monthWeek));

  const onClickCell = data => {
    setDate(dateFns.parse(data));
  };

  const rowZ = monthWeeksFromMonth.map((monthWeekDate, i) => {
    const weekDatesFromWeek = weekDays.map(weekDay => dateFns.addDays(monthWeekDate, weekDay));

    return (
      <div className="row" key={i}>
        {weekDatesFromWeek.map((weekDate, index) => {
          const formattedDate = dateFns.format(weekDate, 'd');

          return (
            <div
              className={`col cell ${
                !dateFns.isSameMonth(weekDate, date)
                  ? 'disabled'
                  : dateFns.isSameDay(weekDate, currentDate)
                  ? 'selected'
                  : ''
              }`}
              key={index}
              onClick={() => onClickCell(weekDate)}
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

export default CellContent;
