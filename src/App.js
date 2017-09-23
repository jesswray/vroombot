import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import logo from './logo.svg';
import './App.css';
import store from './store';
import DayLink from './components/DayLink';
import DayView from './components/DayView';
import Averages from './components/Averages';

class App extends Component {
  render () {
    const ({ selectedDay, store, onClick }) = this.props;
  }
  <div className="App">
    <div className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h2>Tiny Motorcycle Stats</h2>
    </div>
    <p>

    </p>
    <p>
      This is an example app to experiment with React.
    </p>
    <p>
      Right now it's drawing from a static dataset - a file logging my gas fillups
      on my '94 Honda Nighthawk.
    </p>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-2'>
          <h4>Dates</h4>
          {store.map(item => (
            <DayLink
              item={item}
              key={item.id}
              onClick={onClick}
              selectedDay={selectedDay}
            />
          ))}
        </div>
        <DayView
          item={store.find(item => item.id === selectedDay)}
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
  withProps(() => ({
    store: store,
  })),
  withStateHandlers(() => ({
    selectedDay: 1,
  }), {
    onClick: () => id => ({
      selectedDay: id,
    }),
  }),
)(App);
