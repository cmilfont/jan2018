import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Provider from 'views/tools/provider';
import createStore from 'views/tools/createStore';

import Activities from 'views/activities/activitiesContainer';

const url = 'http://biohacking.herokuapp.com/graphql?query=query%20%7B%0A%20%20todayActivities%20%7B%0A%20%20%20%20id%0A%20%20%20%20loggedAt%0A%20%20%20%20description%0A%20%20%20%20kind%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20color%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D';


class App extends Component {

  componentWillMount() {
    const reducer = (data, action) => {

      if (action.type === 'CHANGE') {
        return {
          ...data,
          activity: {
            ...data.activity,
            ...action.payload,
          },
        }
      }

      if (action.type === 'EDIT') {
        return {
          ...data,
          activity: action.payload,
        };
      }

      if (action.type === 'LISTA') {
        return {
          ...data,
          list: action.payload,
        }
      }

      return data;
    };
    const middleware = (store, action) => {

      if (action.type === 'LOAD') {
        fetch(url).then(r => r.json()).then(list => {
          store.dispatch({
            type: 'LISTA',
            payload: list.data.todayActivities
          });
        });
      }

      if (action.type === 'SAVE') {
        // fetch().then()
        store.dispatch({
          type: 'SAVED'
        })
      }

      if (action.type === 'SAVED') {

      }

    } 
    this.store = createStore(reducer, {
      activity: {},
      list: [],
    }, middleware);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Activities />
      </Provider>
    );
  }
}

export default App;
