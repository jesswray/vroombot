import React from 'react';
import { withHandlers } from 'recompose';

const DayLink = ({ item, handleClick }) => (
  <button
    className='DayLink'
    onClick={handleClick}
  >
    {item.date.month}-{item.date.day}-{item.date.year}
  </button>
);

export default withHandlers({
  handleClick: ({ onClick, item }) => () => onClick(item.id),
})(DayLink);
