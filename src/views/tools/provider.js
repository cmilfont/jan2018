import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {

  constructor(props) {
    super(props);
    this.store = props.store;
    this.store.register(this);
    this.state = {
      data: this.store.getState()
    };
  }

  static childContextTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.object,
  }

  getChildContext() {
    return {
      dispatch: this.dispatch,
      data: this.state.data,
    }
  }

  reconciliation = (reducer, action) => {
    this.setState({
      data: reducer(this.state.data, action)
    });
  }

  dispatch = (action) => {
    this.store.dispatch(action);
  }

  render() {
    return this.props.children;
  }
}

export default Provider;