import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm } from 'redux-form';
import { compose } from 'redux'
//Material Imports
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
const styles = theme =>( {
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
         margin:'10%'
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
  
  class SignupForm extends PureComponent {
  renderError() {
            if (this.props.errorMessage) {
                return (
                    <div className="alert alert-danger">
                        <Typography  variant="display1"color="error" >
                  <string>Oops! {this.props.errorMessage}</string>
                </Typography>
                    </div>
                );
            }
        }
        renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input className="form-control" {...input} placeholder={label} type={type} />
                    {touched && error && <span className="text-danger">{error}</span>}
                </div>
            </div>
        );
    
   
            render() {
            const { handleSubmit, submitting } = this.props;
            const { classes } = this.props;
            
            return (
                <div className={classes.root}>
                <Grid container spacing={24}>
              <Grid item xs={12} sm={8}>
              </Grid>
              <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                    
                        <CardContent>
                            <Typography variant="headline">
                                Sign up
                            </Typography>
                <form onSubmit={handleSubmit(this.props.onSubmit.bind(this))}>
                   
                    <TextField 
                        hintText="email"
                        floatingLabelText="Email"
                        name="email"
                        label="Email"
                        errorText= {this.props.errorText}
                        onChange={ this.props.onUpdate}
                        fullWidth
                    />
                   <TextField 
                        hintText="name"
                        floatingLabelText="Name"
                        name="name"
                        label="Name"
                        errorText= {this.props.errorText}
                        onChange={ this.props.onUpdate}
                        fullWidth
                    />
                    <TextField 
                        hintText="password"
                        floatingLabelText="password"
                        name="password"
                        label="password"
                        errorText= {this.props.errorText}
                        onChange={ this.props.onUpdate}
                        type="password"
                        fullWidth
                    />
                    <TextField 
                        hintText="passwordConfirmation"
                        floatingLabelText="passwordConfirmation"
                        name="passwordConfirmation"
                        label="passwordConfirmation"
                        errorText= {this.props.errorText}
                        onChange={ this.props.onUpdate}
                        type="password"
                        fullWidth
                    />
                    <TextField 
                        hintText="username"
                        floatingLabelText="username"
                        name="username"
                        label="username"
                        errorText= {this.props.errorText}
                        onChange={ this.props.onUpdate}
                        fullWidth
                    />
                    
                    {this.renderError()}
                    <CardActions>
                    {/* <Button variant="contained"  size="large" className={classes.button} color="primary" disabled={submitting} onClick={this.props.onSubmit}>Sign Up</Button> */}
                </CardActions>
                    <Loader fullPage loading={this.props.spinner} />
                </form>
                <Button  variant="raised"
                  color="primary" className={classes.submit} fullWidth disabled={submitting} onClick={this.props.onSubmit}>
                    SignUp
                </Button>
                 </CardContent>
             </Card>
            </Grid>
         </Grid>
        
        </div>
            );
        }
    }
    SignupForm.propTypes = {
 
        onSubmit: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        spinner: PropTypes.object.isRequired,
        errorMessage: PropTypes.object.isRequired
      };
      
      const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Please enter an name';
        }
        if (!values.username) {
            errors.username = 'Please enter an username';
        }
        if (!values.email) {
            errors.email = 'Please enter an email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
    
        if (!values.password) {
            errors.email = 'Please enter an password';
        }
    
        if (!values.passwordConfirmation) {
            errors.email = 'Please enter an password confirmation';
        }
    
        if (values.password !== values.passwordConfirmation) {
            errors.password = 'Password must match';
        }
    
        return errors;
    };
    
    
    export default compose( 
        reduxForm({
        form: 'signin',
    validate,
        
    }),
  withStyles(styles))(SignupForm);