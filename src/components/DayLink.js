import React from 'react';
import moment from 'moment';
import { compose, withHandlers } from 'recompose';

const DayLink = ({ entry, handleClick, active }) => (
  <button
    onClick={handleClick}
    // active={active}
  >
    {moment(entry.time).format('ll')}
  </button>
);

export default compose(
  withHandlers({
    handleClick: ({ onClick, entry }) => () => onClick(entry.time),
  }),
)(DayLink);
