import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import DayLink from 'DayLink';
import DayView from 'DayView';
import Averages from 'Averages';

const View = ({ data, onClick, selectedDay }) => (
  <div className="App">
    <div className="App-header lead">
      react mileage tracking {data && 'with data!'}
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-2 col-xs-12'>
          <h4>Dates</h4>
          {/* {data.map(entry => (
            <DayLink
              entry={entry}
              key={entry.id}
              onClick={onClick}
              active={selectedDay === entry.id}
            />
          ))} */}
        </div>
        {/* <DayView
          entry={data.find(entry => entry.id === selectedDay)}
          className='col-sm-5 col-xs-6'
        />
        <Averages
          store={data}
          className='col-sm-5 col-xs-6'
        /> */}
      </div>
    </div>
  </div>
);


export default compose(
  withProps({ store }),
  withStateHandlers(() => ({
    selectedDay: 1,
  }), {
    onClick: () => id => ({ selectedDay: id }),
  }),
)(View);
