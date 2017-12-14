import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from '../motorcycle_icon.svg'
import View from './View';
import LoadingIndicator from './LoadingIndicator';
import Footer from './Footer';
import test from './test';

// The endpoint to call for data
const url = 'https://6pe59rx5ii.execute-api.us-east-1.amazonaws.com/incoming/{proxy+}'

class App extends Component {
  state = { data: test }

  // componentDidMount() {
  //   fetch(url, { credentials: 'include' }) // required for CORS
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ data: json && json.Items })
  //     })
  //     .catch(ex => {
  //       console.log('Something went wrong: ', ex);
  //     });
  // }

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <div className="App-header lead">
          <div className='App-logo'>
            <img src={logo} alt='motorcycle icon'/>
          </div>
          vroombot
        </div>
        {data ? <View data={data} /> : <LoadingIndicator />}
        <Footer />
      </div>
    );
  }
};

export default App;
