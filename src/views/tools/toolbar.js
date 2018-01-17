import React from 'react';
import Button from 'material-ui/Button';
import ExpansionPanel, {
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';

const Toolbar = ({
  primaryLabel,
  secondaryLabel,
  primaryAction,
  secondaryAction,
  classes,
}) => (
  <ExpansionPanelActions>
      <Button
        raised
        dense
        color="accent"
        className={classes.button}
        onClick={secondaryAction}
      >
        {secondaryLabel}
      </Button>
      <Button
        raised
        dense
        color="accent"
        onClick={primaryAction}
      >
        {primaryLabel}
      </Button>
    </ExpansionPanelActions>
);

export default Toolbar;