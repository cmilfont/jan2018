import React from 'react';
import Activities from './index';
import connect from 'views/tools/connect';

const mapping = (data, dispatch, originalProps) => {
  return {
    list: data.list,
    activity: data.activity,
    load: () => {
      dispatch({
        type: 'LOAD',
      })
    }
  }
};

export default connect(mapping, Activities);