import React from 'react';
import Button from 'material-ui/Button';
import ExpansionPanel, {
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';

class Toolbar extends React.Component {

  render() {
    const { classes, remove, edit } = this.props;
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