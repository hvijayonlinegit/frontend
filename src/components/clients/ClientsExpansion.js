import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Paper className={classes.root}>
      {this.props.clients.map(n => {
        return (
              <ExpansionPanel key={n.id} expanded={expanded === 'panel'+{n}} onChange={this.handleChange('panel'+{n})}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.heading}>{n.account_name} </div>
                  <div className={classes.secondaryHeading}> Type:  {n.account_type}</div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <div className={classes.root}>
                  <Grid container spacing={24}>
                    <Grid item xs={6}>
                      <div>
                         Id: {n.id}
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        Phone#: {n.account_phone}
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                      Team: {n.account_team}
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                         Requirement : {n.text}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                          Address:
                         {n.account_address}
                        </div>
                    </Grid>
                  </Grid>
                </div>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
          );
        })}
      </Paper>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
