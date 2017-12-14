import React from 'react';
import { compose, withProps } from 'recompose';
import CalendarYear from './CalendarYear';
import moment from 'moment';
import _ from 'lodash';

const Calendar = ({ groupedByYearAndMonth, onDayClick, selectedTime }) => (
  <div className='Calendar'>
    {Object.keys(groupedByYearAndMonth).map(year => (
      <CalendarYear
        key={year}
        year={year}
        months={groupedByYearAndMonth[year]}
      />
    ))}
  </div>
);

const groupByMonth = year =>
  _.groupBy(year, item => moment(item.time).month());

export default compose(
  withProps(({ data }) => ({
    groupedByYear: _.groupBy(data, item => moment(item.time).year()),
  })),
  withProps(({ groupedByYear }) => {
    console.log('groupedByYear', groupedByYear);
    const years = Object.keys(groupedByYear);
    var groupedByYearAndMonth = {};
    years.map(year => groupedByYearAndMonth[year] = groupByMonth(groupedByYear[year]));
    return { groupedByYearAndMonth };
  }),
)(Calendar);
