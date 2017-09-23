import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import logo from './logo.svg';
import './App.css';
import store from './store';
import DayLink from './components/DayLink';
import DayView from './components/DayView';

const App = ({ selectedDay, store, onClick }) => {
  console.log(selectedDay);
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Testing!</h2>
      </div>
      <div className="stats">
        Menu: {store.map(item => (
          <DayLink
            item={item}
            key={item.id}
            onClick={onClick}
          />
        ))}
        <DayView
          item={store.find(item => item.id === selectedDay)} />
      </div>
    </div>
  );
}

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
