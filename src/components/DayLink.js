import React from 'react';
import { withHandlers } from 'recompose';

const DayLink = ({ item, handleClick }) => (
  <div>
    <button
      className='DayLink'
      onClick={handleClick}
    >
      {item.date.month}-{item.date.day}-{item.date.year}
    </button>
  </div>
);

export default withHandlers({
  handleClick: ({ onClick, item }) => () => onClick(item.id),
})(DayLink);
