import React from 'react';
import DayLink from './DayLink';

const CalendarMonth = ({ month, days, onDayClick, selectedTime }) => (
  <div className='CalendarMonth'>
    [{month}]
    {days.map(entry => (
      <DayLink
        entry={entry}
        key={entry.time}
        onClick={onDayClick}
        active={selectedTime === entry.time}
      />
    ))}
  </div>
);

export default CalendarMonth;
