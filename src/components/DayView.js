import React from 'react';

const labels = {
  trip: 'Miles',
  gallons: 'Gallons',
  ppg: 'PPG',
  price: 'Price',
  odometer: 'Odometer',
};

const DayView = ({ entry, className }) => (
  <div className={className}>
    <h4>On this day ... </h4>
    {Object.keys(labels).map(key => (
      <div className={entry[key] ? 'text' : 'text-danger'}>
        {labels[key]}: {entry[key]}
      </div>
    ))}
  </div>
);

export default DayView;
