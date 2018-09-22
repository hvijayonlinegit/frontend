import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Lock from '@material-ui/icons/Lock'
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  card: {
    marginTop: '30%',
    marginRight: '10%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  button: {
    backgroundColor: 'lightBlue',
    margin: '10%'
  },
  pos: {
    marginBottom: 12,
  },
  root: {

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  submit: {
    marginTop: '10%',
    marginBottom: '10%'
  }
});

class SigninForm extends React.Component {
  renderError() {

    if (this.props.errorMessage) {

      return (
        <div className="alert alert-danger">
          <Typography variant="display1" color="error" >
            <string>Oops! {this.props.errorMessage}</string>
          </Typography>
        </div>
      );
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              
              <CardContent>
                
                <Typography variant="headline" >
                <Lock></Lock>  Login
                </Typography>
                <Typography color="textSecondary">
                  Don't have account? <Button variant="text" color="textPrimary" gutterBottom={true} size="small" mini="true" href="/Signup"> Click Here </Button>
                </Typography>
                <form className={classes.form} autoComplete="off">
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">UserName or Email Address</InputLabel>
                    <Input name="usernameOrEmail" autoComplete="email" onChange={this.props.onUpdate} autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      name="password"
                      type="password"

                      onChange={this.props.onUpdate}
                      autoComplete="current-password"
                    />
                  </FormControl>
                  {this.renderError()}
                  <Button
                    type="submit"
                    fullWidth
                    variant="raised"
                    color="primary"
                    className={classes.submit}
                    onClick={this.props.onSubmit}
                  >
                    Sign in
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SigninForm.propTypes = {

  onSubmit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  spinner: PropTypes.object.isRequired,
  errorMessage: PropTypes.object.isRequired
};

export default withStyles(styles)(SigninForm);
