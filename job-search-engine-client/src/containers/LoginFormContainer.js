import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js'

class LoginFormContainer extends Component {

    render() {
        return (
            <LoginForm loginLoadStateSet={this.props.loginLoadStateSet} newuserSignupLoadStateSet={this.props.newuserSignupLoadStateSet}/>
        )
    }
}

export default LoginFormContainer