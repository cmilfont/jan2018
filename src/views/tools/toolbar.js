import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import ExpansionPanel, {
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';

class Toolbar extends React.Component {

  static contextTypes = {
    remove: PropTypes.func,
  }

  render() {
    const { remove } = this.context;
    const { classes, edit } = this.props;
    return (
      <ExpansionPanelActions>
          <Button
            raised
            dense
            color="accent"
            className={classes.button}
            onClick={remove}
          >
            REMOVE
          </Button>
          <Button
            raised
            dense
            color="accent"
            onClick={edit}
          >
            EDIT
          </Button>
        </ExpansionPanelActions>
    );
  }
}

export default Toolbar;