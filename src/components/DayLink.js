import React from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { withHandlers } from 'recompose';

const DayLink = ({ entry, handleClick, active }) => (
  <Button
    className='DayLink-button'
    onClick={handleClick}
    active={active}
  >
    <div>
      {moment(entry.time).format('ll')}
    </div>
  </Button>
);

export default withHandlers({
  handleClick: ({ onClick, entry }) => () => onClick(entry.time),
})(DayLink);
