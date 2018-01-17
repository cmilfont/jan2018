import React from 'react';
import Toolbar from './toolbar';
import connect from './connect';

const mapping = (data, dispatch, originalProps) => {
  return {
    primaryAction: () => {
      dispatch({
        type: 'EDIT',
        payload: originalProps.model,
      })
    }
  }
};

export default connect(mapping, Toolbar);