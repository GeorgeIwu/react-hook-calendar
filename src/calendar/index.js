import React, { useState } from 'react';
// import { CalendarProvider } from './state';
import Week from './week';
import Month from './month';
import './Calendar.css';

const Calendar = () => {
  const [calendar, SetCalendar] = useState('week')

  return (
    <div>
      <button onClick={() => SetCalendar('week')} >Week</button>
      <button onClick={() => SetCalendar('month')} >Month</button>
      {calendar === 'month' ? <Month /> : <Week />}
    </div>
  )
};

export default Calendar;
