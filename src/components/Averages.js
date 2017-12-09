import React from 'react';
import { withProps } from 'recompose';

const sum = data => data.reduce((acc, item) => acc + item.dollars, 0);
const startMileage = (data) => data.sort(item => item.miles)[0].miles
const endMileage = (data) => data.sort(item => item.miles)[data.length - 1].miles

const averageMPG = (data) => {
  const totalMiles = startMileage(data) - endMileage(data);
  const totalGallons = data.reduce((acc, item) => acc + item.gallons, 0);
  return totalMiles/totalGallons;
}

const Averages = ({ average, averageMPG, sum, className }) => (
  <div className={className}>
    <h4>Cumulative</h4>
    <div>Total spent: ${sum.toFixed(2)} </div>
    <div>Average spent: ${average.toFixed(2)} </div>
    <div>Average MPG: <strong>{Math.floor(averageMPG)}</strong> </div>
  </div>
);

export default withProps(({ data }) => ({
  sum: sum(data),
  average: sum(data)/data.length,
  averageMPG: averageMPG(data),
}))(Averages);
