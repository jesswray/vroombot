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
      {moment(entry.time).format('ll')}
    </Button>
);

export default withHandlers({
  handleClick: ({ onClick, entry }) => () => onClick(entry.time),
})(DayLink);
