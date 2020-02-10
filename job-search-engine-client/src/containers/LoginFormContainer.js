import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js'

class LoginFormContainer extends Component {

    render() {
        return (
//             <LoginForm loginLoadStateSet={this.props.loginLoadStateSet} newuserSignupLoadStateSet={this.props.newuserSignupLoadStateSet}/>
            <LoginForm activeItem={this.props.activeItem} loginLoadStateSet={this.props.loginLoadStateSet} signupLoadStateSet={this.props.signupLoadStateSet}/>
        )
    }
}

export default LoginFormContainer