import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
                  Login
                </Typography>
                <Typography color="textSecondary">
                  Don't have account? <Button variant="text" color="textPrimary" gutterBottom={true} size="small" mini="true" href="/Signup"> Click Here </Button>
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                  {/*<form onSubmit={this.props.onSubmit(this.props.onSubmit.bind(this))}>*/}
                  <TextField
                    margin="dense"
                    placeholder=" enter username or email"
                    name="usernameOrEmail"
                    label="Username or email"
                    onChange={this.props.onUpdate}
                    fullWidth />
                  <TextField
                    margin="dense"
                    placeholder=" enter password"
                    name="password"
                    label="Password"
                    type="password"
                    onChange={this.props.onUpdate}
                    fullWidth />
                  {this.renderError()}
                  <CardActions>
                  </CardActions>
                  
                  
                  <Loader fullPage loading={this.props.spinner} />
                </form>
                <Button  variant="raised"
                  color="primary" className={classes.submit} fullWidth  onClick={this.props.onSubmit}>
                    SignIn
                </Button>
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
