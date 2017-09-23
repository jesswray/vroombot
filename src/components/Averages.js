import React from 'react';
import { withProps } from 'recompose';

const sum = store => store.reduce((acc, item) => acc + item.price, 0);
const startMileage = (store) => store.find(item => item.id === 1).odometer;
const endMileage = (store) => store.find(item => item.id === store.length).odometer;

// We don't know how many gallons we bought when paying with cash,
// so if the gallons are missing, exclude the 'trip' number.
const averageMPG = (store) => {
  // Add up cash trip miles to be deducted from total.
  const excludedMiles = store.filter(item => !item.gallons).reduce((acc, item) => acc + item.trip, 0);
  const totalGallons = store.reduce((acc, item) => acc + item.gallons, 0);
  const validMiles = endMileage(store) - startMileage(store) - excludedMiles;
  return validMiles/totalGallons;
};

const Averages = ({ average, averageMPG, sum, className }) => (
  <div className={className}>
    <h4>Cumulative</h4>
    <div>Total spent: ${sum.toFixed(2)} </div>
    <div>Average spent: ${average.toFixed(2)} </div>
    <div>Average MPG: <strong>{Math.floor(averageMPG)}</strong> </div>
  </div>
);

export default withProps(({ store }) => ({
  sum: sum(store),
  average: sum(store)/store.length,
  averageMPG: averageMPG(store),
}))(Averages);
