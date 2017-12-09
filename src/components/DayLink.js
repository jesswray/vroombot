import React from 'react';
import { Button } from 'react-bootstrap';
import { withHandlers } from 'recompose';

const DayLink = ({ entry, handleClick, key, active }) => {
  const { month, day, year } = entry.date;
  return (
      <Button
        className='DayLink-button'
        key={key}
        onClick={handleClick}
        active={active}
      >
        {month}-{day}-{year}
      </Button>
  );
};

export default withHandlers({
  handleClick: ({ onClick, entry }) => () => onClick(entry.id),
})(DayLink);
