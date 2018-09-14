import React from 'react';
import * as actions from '../../actions/authenticationActions';
import { connect } from 'react-redux';
import SigninForm from '../../components/auth/SigninForm'

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          signin: {usernameOrEmail: '', password: ''},
           loading: false 
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.updateSigninState = this.updateSigninState.bind(this);
    }
    handleFormSubmit(event) {
        
        console.log(this.state.signin.usernameOrEmail+ this.state.password)
        if(this.state.signin.usernameOrEmail === '' || this.state.signin.password === ''){
            
        }
        else{
            event.preventDefault();
            this.setState({ loading: true });
            this.props.signinUser(this.state.signin)
        }
        
    }
    updateSigninState(event) {
       // event.preventDefault();
        const field = event.target.name;
        const signin = this.state.signin;
        console.log(field+event.target.value);
        signin[field] = event.target.value;
        return this.setState({signin: signin});
    }
    render() {
        return (
            <SigninForm
                spinner={this.state.loading}
                onSubmit={this.handleFormSubmit}
                onUpdate={this.updateSigninState}
                errorMessage= {this.props.errorMessage}
            />
        );
    }
}
const mapStateToProps = (state) => {
   return{
    errorMessage: state.auth.error 
    }
};
export default connect(mapStateToProps, actions) (Signin);
