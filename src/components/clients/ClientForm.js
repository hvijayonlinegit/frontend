import React from 'react';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '10%',
    marginRight: '10%',

  },
  menu: {
    width: 200,
  },
  header: {
    marginLeft: '5%',
    marginRight: '20%',
    width: 400,
  },
  paper: {
    align: 'center',
  },
  button: {
   marginLeft: '5%',
   float: 'right',
 },
});
class ClientForm extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <form className={classes.container} noValidate autoComplete="off">
            <h2 className={classes.header}>Add a Client</h2>
            <TextField
             margin="dense"
             placeholder="Enter Client name"
             name="account_name"
             label="name"
             fullWidth
             className={classes.textField}
             defaultValue={ this.props.client.account_name }
             onChange={ this.props.onChange} />
            <TextField
             margin="dense"
             placeholder="Enter Client type"
             name="account_type"
             label="Type"
             fullWidth
             className={classes.textField}
             defaultValue={ this.props.client.account_type }
             onChange={ this.props.onChange} />

            <TextField
             margin="dense"
             placeholder="Enter Client phone"
             name="account_phone"
             label="Phone"
             fullWidth
             className={classes.textField}
             defaultValue={ this.props.client.account_phone }
             onChange={ this.props.onChange} />
            <TextField
             margin="dense"
             placeholder="Enter Client team"
             name="account_team"
             label="Team"
             fullWidth
             className={classes.textField}
             defaultValue={ this.props.client.account_team }
             onChange={ this.props.onChange} />
            <TextField
             margin="dense"
             placeholder="Enter Client Address"
             name="account_address"
             label="Address"
             fullWidth
             className={classes.textField}
             defaultValue={ this.props.client.account_address }
             onChange={ this.props.onChange} />

        </form>
        <div>
         <Button variant="contained"  disabled={this.props.saving} size="large" value={this.props.saving ? 'Saving...' : 'Save'} color="primary" className={classes.button} onClick={this.props.onSave}>
           Save
         </Button>
       </div>
      </Paper>
  );
  }
}

ClientForm.propTypes = {
  client: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default withStyles(styles)(ClientForm);
