import React from 'react';
import { connect } from 'react-redux';
import Edit from './edit';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (payload) => {
      dispatch({
        type: 'CHANGE',
        payload,
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(Edit);