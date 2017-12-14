import React from 'react';
import { compose, mapProps, withStateHandlers } from 'recompose';
import Calendar from './Calendar';
import DayView from './DayView';
import Averages from './Averages';

const View = ({ data, onDayClick, selectedTime }) => (
  <div className='View'>
    <div className='View__column'>
      <Calendar
        data={data}
        onDayClick={onDayClick}
        selectedTime={selectedTime}
      />
    </div>
    <div className='View__column'>
      <DayView
        entry={data.find(entry => entry.time === selectedTime)}
      />
    </div>
    <div className='View__column'>
      <Averages
        data={data}
      />
    </div>
  </div>
);

export default compose(
  mapProps(({ data }) => ({
    data: data.sort((a, b) => (a.time - b.time)),
  })),
  withStateHandlers(({ data }) => ({
    selectedTime: data && data[0].time,
  }), {
    onDayClick: () => time => ({ selectedTime: time }),
  }),
)(View);
