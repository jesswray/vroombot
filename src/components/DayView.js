import React from 'react';

const DayView = ({ item, className }) => (
  <div className={className}>
    <h4>On this day ... </h4>
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
