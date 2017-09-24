import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import './App.css';
import store from './store';
import DayLink from './components/DayLink';
import DayView from './components/DayView';
import Averages from './components/Averages';

const App = ({ store, onClick, selectedDay }) => (
  <div className="App">
    <div className="App-header">
      <h2>Example</h2>
    </div>
    <p>
      This is an example app to experiment with React.
    </p>
    <p>
      Right now it's drawing from a static dataset: a file logging my gas fillups
      on my '94 Honda Nighthawk.
    </p>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-2'>
          <h4>Dates</h4>
          {store.map(entry => (
            <DayLink
              entry={entry}
              key={entry.id}
              onClick={onClick}
              active={selectedDay === entry.id}
            />
          ))}
        </div>
        <DayView
          entry={store.find(entry => entry.id === selectedDay)}
          className='col-sm-5'
        />
        <Averages
          store={store}
          className='col-sm-5'
        />
      </div>
    </div>
  </div>
);


export default compose(
  withProps({ store }),
  withStateHandlers(() => ({
    selectedDay: 1,
  }), {
    onClick: () => id => ({ selectedDay: id }),
  }),
)(App);
