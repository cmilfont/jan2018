import React from 'react';
import Toolbar from './toolbar';
import connect from './connect';

const mapping = (data, dispatch) => {
  return {
    primaryAction: () => {
      dispatch({
        type: 'EDIT'
      })
    }
  }
};

export default connect(mapping, Toolbar);