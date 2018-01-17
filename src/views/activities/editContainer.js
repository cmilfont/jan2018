import React from 'react';
import Edit from './edit';
import connect from 'views/tools/connect';

const mapping = (data, dispatch, originalProps) => {
  return {
    onChange: (payload) => {
      dispatch({
        type: 'CHANGE',
        payload,
      })
    }
  }
};

export default connect(mapping, Edit);