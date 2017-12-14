import React from 'react';
import { withProps } from 'recompose';

// data is an array of objects:
// data: [
//   {
//     dollars: 5.42,
//     miles: 187,
//     gallons: 2.89,
//   },
//   ...
// ]

// Utility functions for some unavoidable arithmetic.
const sum = propertyName => data =>
  data.reduce((acc, item) => acc + item[propertyName], 0);

const totalCost = sum('dollars');
const totalGallons = sum('gallons');

// These numbers are odometer readings, not miles traveled in a trip.
// We only need to look at the first and last.
const totalMiles = data => {
  const array = data.map(item => item.miles);
  return Math.max(...array) - Math.min(...array);
};

const averageMPG = (data) => {
  return totalMiles(data)/totalGallons(data);
}

const Averages = ({ average, averageMPG, totalCost }) => (
  <div className='Averages'>
    <div>Total spent: ${totalCost.toFixed(2)} </div>
    <div>Average spent: ${average.toFixed(2)} </div>
    <div>Average MPG: <strong>{Math.floor(averageMPG)}</strong> </div>
  </div>
);

export default withProps(({ data }) => ({
  totalCost: totalCost(data),
  average: totalCost(data)/data.length,
  averageMPG: averageMPG(data),
}))(Averages);
