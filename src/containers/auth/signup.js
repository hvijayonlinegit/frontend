import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/authenticationActions';
import { connect } from 'react-redux';
import { compose } from 'redux'
import SignupForm from '../../components/auth/SignupForm'

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
    render() {
        return (
            <SignupForm
                spinner={this.state.loading}
                onSubmit={this.handleFormSubmit}
                onUpdate={this.updateSignUpState}
                errorMessage= {this.props.errorMessage}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

export default compose( 
    reduxForm({
    form: 'signin',
    //validate,
    
}),
)(connect(mapStateToProps, actions)(Signup));


