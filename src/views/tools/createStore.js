import React, { Component } from 'react';
import PropTypes from 'prop-types';

const createStore = (reducer, initialState) => {

  let provider;

  return {
    getState: () => {
      return initialState;
    },
    register: (prov) => {
      provider = prov;
    },
    dispatch: (action) => {
      provider.reconciliation(reducer, action);
    }
  }
};

export default createStore;