import React from 'react';
import { compose, mapProps, withStateHandlers } from 'recompose';
import Calendar from './Calendar';
import DayView from './DayView';
import Averages from './Averages';

const View = ({ data, onClick, selectedTime }) => (
  <div className='View'>
    <Calendar
      data={data}
      onDayClick={onClick}
      selectedTime={selectedTime}
    />
    <DayView
      entry={data.find(entry => entry.time === selectedTime)}
    />
    <Averages
      data={data}
    />
  </div>
);

export default compose(
  mapProps(({ data }) => ({
    data: data.sort((a, b) => (a.time - b.time)),
  })),
  withStateHandlers(({ data }) => ({
    selectedTime: data && data[0].time,
  }), {
    onClick: () => time => ({ selectedTime: time }),
  }),
)(View);
