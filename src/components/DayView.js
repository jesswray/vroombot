import React from 'react';

const DayView = ({ item }) => (
  <div className='DayView'>
    <div>
      Miles: {item.trip}
    </div>
    <div>
      Gallons: {item.gallons}
    </div>
    <div>
      PPG: {item.ppg}
    </div>
    <div>
      Price: {item.price}
    </div>
    <div>
      Odometer: {item.odometer}
    </div>
  </div>
);

export default DayView;
