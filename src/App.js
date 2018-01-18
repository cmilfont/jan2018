import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Activities from 'views/activities/activitiesContainer';

const url = 'http://biohacking.herokuapp.com/graphql?query=query%20%7B%0A%20%20todayActivities%20%7B%0A%20%20%20%20id%0A%20%20%20%20loggedAt%0A%20%20%20%20description%0A%20%20%20%20kind%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20color%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D';

class App extends Component {

  componentWillMount() {

    const middleware = (store) => {
      return (next) => {
        return (action) => {

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

          return next(action);
        }
      }
    }

    const combinedReducers = combineReducers({
      activity: (activity = {}, action) => {

        if (action.type === 'CHANGE') {
          return {
            ...activity,
            ...action.payload,
          }
        }
  
        if (action.type === 'EDIT') {
          return action.payload;
        }

        return activity;
      },
      list: (list = [], action) => {
        if (action.type === 'LISTA') {
          return action.payload;
        }
        return list;
      },
    });

    const middlewares = [
      middleware,
    ];

    const composeEnhancers = composeWithDevTools({});
    const composed = composeEnhancers( applyMiddleware(...middlewares) );

    this.store = createStore(combinedReducers, composed);
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
