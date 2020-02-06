import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js'

class LoginFormContainer extends Component {

    render() {
        return (
            <LoginForm loginLoadStateSet={this.props.loginLoadStateSet}/>
        )
    }
}

export default LoginFormContainer