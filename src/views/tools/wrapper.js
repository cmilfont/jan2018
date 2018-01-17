import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {
  
  static contextTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.object,
  }

  render() {
    const { dispatch, data } = this.context;
    const { children } = this.props;
    const newProps = {
      dispatch, data
    };
    return React.cloneElement(children, newProps);
  }
}

export default Wrapper;