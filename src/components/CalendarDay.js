import React from 'react';
import moment from 'moment';
import Button from './Button';
import { compose, withHandlers } from 'recompose';

const CalendarDay = ({ entry, handleClick, active }) => (
  <Button
    onClick={handleClick}
    active={active}
  >
    {moment(entry.time).format('D')}
  </Button>
);

export default compose(
  withHandlers({
    handleClick: ({ onClick, entry }) => () => onClick(entry.time),
  }),
)(CalendarDay);
