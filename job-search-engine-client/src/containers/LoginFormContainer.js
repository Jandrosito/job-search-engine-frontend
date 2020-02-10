import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js'

class LoginFormContainer extends Component {

    render() {
        return (
            <LoginForm activeItem={this.props.activeItem} loginLoadStateSet={this.props.loginLoadStateSet} signupLoadStateSet={this.props.signupLoadStateSet}/>
        )
    }
}

export default LoginFormContainer