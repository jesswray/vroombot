import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import View from './components/View';

const url = 'https://6pe59rx5ii.execute-api.us-east-1.amazonaws.com/incoming/{proxy+}'

class App extends Component {
  componentDidMount() {
    fetch(url, { credentials: 'include' })
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json && json.Items })
        console.log('parsed json', json)
      })
      .catch(ex => {
        console.log('parsing failed', ex)
      });
  }

  render() {
    const data = this.state && this.state.data;
    return data && (
      <View
        data={data}
      />
    );
  }
};

export default App;
