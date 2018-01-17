import React from 'react';
import Toolbar from 'views/tools/toolbar';
import connect from 'views/tools/connect';

const mapping = (data, dispatch, originalProps) => {
  return {
    primaryAction: () => {
      dispatch({
        type: 'SAVE',
      })
    }
  }
};

export default connect(mapping, Toolbar);