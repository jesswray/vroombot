import React, { Component } from 'react';
import '../index.css';
import 'whatwg-fetch';
import View from './View';
import LoadingIndicator from './LoadingIndicator';

const url = 'https://6pe59rx5ii.execute-api.us-east-1.amazonaws.com/incoming/{proxy+}'

class App extends Component {
  state = { data: null }

  componentDidMount() {
    fetch(url, { credentials: 'include' })
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json && json.Items })
      })
      .catch(ex => {
        console.log('parsing failed', ex)
      });
  }

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <div className="App-header lead">
          vroombot
        </div>
        {data ? <View data={data} /> : <LoadingIndicator />}
      </div>
    );
  }
};

export default App;
