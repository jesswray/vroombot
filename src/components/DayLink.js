import React from 'react';
import { Button } from 'react-bootstrap';
import { withHandlers } from 'recompose';

const DayLink = ({ entry, handleClick, key, active }) => {
  const { month, day, year } = entry.date;
  return (
    <div>
      <Button
        className='DayLink'
        key={key}
        onClick={handleClick}
        active={active}
      >
        {month}-{day}-{year}
      </Button>
    </div>
  );
};

export default withHandlers({
  handleClick: ({ onClick, entry }) => () => onClick(entry.id),
})(DayLink);
