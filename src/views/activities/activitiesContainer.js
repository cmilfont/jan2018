import React from 'react';
import { connect } from 'react-redux';
import Activities from './index';

const mapStateToProps = (state) => {
  return {
    list: state.list,
    activity: state.activity,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch({
        type: 'LOAD',
      })
    }
  }
}

const wrapperConstructor = connect(mapStateToProps, mapDispatchToProps);

export default wrapperConstructor(Activities);