import React, { Component } from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import blueGrey from 'material-ui/colors/blueGrey';
import {
  Theme, 
} from 'react-dashboard-mui/Components';

import firebase from 'api/firebase';
import sagas from 'api/sagas';
import reducers from 'api/reducers';
import Logged from 'views/logged';
import LoginForm from 'views/login';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
  },
  overrides: {
    MuiAppBar: {
      // colorPrimary: {
        //backgroundColor: blueGrey['A200'],
      // },
    },
  },
});

class App extends Component {

  componentWillMount() {

    this.history = createHistory();
    const sagaMiddleware = createSagaMiddleware();
    const combinedReducers = combineReducers(reducers);
    const middlewares = [
      routerMiddleware(this.history),
      sagaMiddleware,
    ];

    const composeEnhancers = composeWithDevTools({});
    const composed = composeEnhancers( applyMiddleware(...middlewares) );

    this.store = createStore(combinedReducers, composed);
    sagaMiddleware.run(sagas, firebase);
  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <Theme customTheme={theme}>
            <Switch>
              <Route key="login-cmp" path="/login" component={LoginForm} />
              <Route key="login-cmp" path="/" component={Logged} />
            </Switch>
          </Theme>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
