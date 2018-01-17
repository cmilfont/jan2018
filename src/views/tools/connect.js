import React from 'react';
import PropTypes from 'prop-types';

class Wrapper extends React.Component {
  
  static contextTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.object,
  }

  render() {
    const { dispatch, data } = this.context;
    const { mapping, component, ...originalProps } = this.props;
    const defaultProps = mapping? mapping(data, dispatch) : null;
    const newProps = {
      ...defaultProps,
      data,
      dispatch,
      ...originalProps,
    };
    return React.createElement(component, newProps);
  }
}

const connect = (mapping, component) => {

  return (originalProps) => {

    return (
      <Wrapper mapping={mapping} component={component} {...originalProps} />
    );
  }
};

export default connect;