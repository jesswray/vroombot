import React, { Component } from 'react';
import CalendarMonth from './CalendarMonth';
import Button from './Button';

class CalendarYear extends Component {
  state = { expanded: true }

  onClick = () => this.setState({ expanded: !this.state.expanded })

  render(){
    const { year, months, onDayClick, selectedTime } = this.props;
    const expanded = this.state.expanded;

    return (
      <div className='CalendarYear'>
        <Button key={year} onClick={this.onClick}>
          <span>{year}</span>
          <i className={`fa ${expanded ? 'fa-caret-up' : 'fa-caret-down'}`} />
        </Button>
        {expanded && Object.keys(months).map(month => (
          <div key={month}>
            <CalendarMonth
              onDayClick={onDayClick}
              month={month}
              days={months[month]}
              selectedTime={selectedTime}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CalendarYear;
