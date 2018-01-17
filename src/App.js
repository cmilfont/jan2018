import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Provider from 'views/tools/provider';
import createStore from 'views/tools/createStore';

import Wrapper from 'views/tools/wrapper';
import Activities from './views/activities';

class App extends Component {

  componentWillMount() {
    const reducer = (data, action) => {

      debugger;

      if (action.type === 'LISTA') {
        return {
          ...data,
          list: action.payload,
        }
      }

      return data;
    };
    this.store = createStore(reducer, {
      activity: {},
      list: [],
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        <Wrapper>
          <Activities />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
