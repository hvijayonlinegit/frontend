import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/authenticationActions';
import { connect } from 'react-redux';
import { compose } from 'redux'
//Material Imports
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
const styles = {
    card: {
      maxWidth: '50%',
      margin: '35%',
      marginTop: '5%',

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
        margin: 20,
        
        fontSize: 14,
      },
    pos: {
      marginBottom: 20,
    },
  };
class Signup extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { 
            errorText: '', 
            signup: {email: '',name:'',password: '',username: '', },
            loading: false
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.updateSignUpState = this.updateSignUpState.bind(this);
    }
    updateSignUpState(event) {
        const field = event.target.name;
        const signup = this.state.signup;
        console.log(field+event.target.value);
        signup[field] = event.target.value;
        return this.setState({signup: signup});
    }
    handleFormSubmit() {
        this.setState({ loading: true });
        console.log(this.state.signup.email);
        this.props.signupUser(this.state.signup);
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

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <string>Oops! {this.props.errorMessage}</string>
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Sign up
                        </Typography>
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {/* <fieldset className="form-group">
                    <Field
                        name="email"
                        label="Email"
                        component={this.renderField}
                        type="text" />
                </fieldset> 
                
                 <fieldset className="form-group">
                    <Field
                        name="name"
                        label="Name"
                        component={this.renderField}
                        type="text" />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        name="password"
                        label="Password"
                        component={this.renderField}
                        type="password" />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        name="passwordConfirmation"
                        label="Password Confirmation"
                        component={this.renderField}
                        type="password" />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        name="username"
                        label="Username"
                        component={this.renderField}
                        type="text" />
                </fieldset>*/}
                <TextField 
                    hintText="email"
                    floatingLabelText="Email"
                    name="email"
                    label="Email"
                    errorText= {this.state.errorText}
                    onChange={ this.updateSignUpState}
                    fullWidth
                />
               <TextField 
                    hintText="name"
                    floatingLabelText="Name"
                    name="name"
                    label="Name"
                    errorText= {this.state.errorText}
                    onChange={ this.updateSignUpState}
                    fullWidth
                />
                <TextField 
                    hintText="password"
                    floatingLabelText="password"
                    name="password"
                    label="password"
                    errorText= {this.state.errorText}
                    onChange={ this.updateSignUpState}
                    type="password"
                    fullWidth
                />
                <TextField 
                    hintText="passwordConfirmation"
                    floatingLabelText="passwordConfirmation"
                    name="passwordConfirmation"
                    label="passwordConfirmation"
                    errorText= {this.state.errorText}
                    onChange={ this.updateSignUpState}
                    type="password"
                    fullWidth
                />
                <TextField 
                    hintText="username"
                    floatingLabelText="username"
                    name="username"
                    label="username"
                    errorText= {this.state.errorText}
                    onChange={ this.updateSignUpState}
                    fullWidth
                />
                
                {this.renderError()}
                <CardActions  className={classes.button}>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Sign Up</button>
                </CardActions>
                <Loader fullPage loading={this.state.loading} />
            </form>
        </CardContent>
        </Card>
    </div>
        );
    }
}

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

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

export default compose( 
    reduxForm({
    form: 'signin',
    validate,
    
}),
withStyles(styles)
)(connect(mapStateToProps, actions)(Signup));
