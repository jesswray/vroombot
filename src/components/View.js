import React from 'react';
import { compose, mapProps, withStateHandlers } from 'recompose';
import DayLink from './DayLink';
import DayView from './DayView';
import Averages from './Averages';
import Footer from './Footer';

const View = ({ data, onClick, selectedTime }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-sm-2 col-xs-12'>
        <h4>Dates</h4>
        {data.map(entry => (
          <DayLink
            entry={entry}
            key={entry.time}
            onClick={onClick}
            active={selectedTime === entry.time}
          />
        ))}
      </div>
      <DayView
        entry={data.find(entry => entry.time === selectedTime)}
        className='col-sm-5 col-xs-6'
      />
      <Averages
        data={data}
        className='col-sm-5 col-xs-6'
      />
    </div>
    <Footer />
  </div>
);

// export default View;
export default compose(
  mapProps(({ data }) => ({
    data: data.sort((a, b) => (a.time - b.time)),
  })),
  withStateHandlers(({ data }) => {
    console.log(data);
    return {
      selectedTime: data && data[0].time,
    }
  }, {
    onClick: () => time => ({ selectedTime: time }),
  }),
)(View);
