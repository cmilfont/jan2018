import React from 'react';
import { connect } from 'react-redux';
import Toolbar from 'views/tools/toolbar';

const mapDispatchToProps = (dispatch) => {
  return {
    primaryAction: () => {
      dispatch({
        type: 'SAVE',
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(Toolbar);