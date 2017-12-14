import React from 'react';
import CalendarMonth from './CalendarMonth';

const CalendarYear = ({ year, months }) => (
  <div className='CalendarYear'>
    <div key={year}>[{year}]</div>
    {Object.keys(months).map(month => (
      <div key={month}>
        <CalendarMonth month={month} days={months[month]} />
      </div>
    ))}
  </div>
)

export default CalendarYear;
