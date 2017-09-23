import React from 'react';
import { Button } from 'react-bootstrap';
import { withHandlers } from 'recompose';

const DayLink = ({ item, handleClick, key, selectedDay }) => (
  <div>
    <Button
      className='DayLink'
      key={key}
      onClick={handleClick}
      active={item.id === selectedDay}
    >
      {item.date.month}-{item.date.day}-{item.date.year}
    </Button>
  </div>
);

export default withHandlers({
  handleClick: ({ onClick, item }) => () => onClick(item.id),
})(DayLink);
