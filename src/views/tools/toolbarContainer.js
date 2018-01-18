import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './toolbar';

const mapDispatchToProps = (dispatch) => {
  return {
    primaryAction: () => {
      dispatch({
        type: 'EDIT',
        payload: null,
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(Toolbar);