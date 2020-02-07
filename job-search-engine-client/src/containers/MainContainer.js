import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer.js'
import SignupFormContainer from './SignupFormContainer.js'

class MainContainer extends Component {
        state = {
            loginFormContainerLoad: true,
            signupFormContainerLoad: false,
            userId: 0
        }
    

    loginLoadStateSet = () => {
        this.setState({
            loginFormContainerLoad: !this.state.loginFormContainerLoad
        })
    }

    signupLoadStateSet = () => {
        this.setState({
            signupLoadStateSet: !this.state.signupLoadStateSet
        })
    }

    newuserSignupLoadStateSet = (id) => {
        this.setState({
            userId: id
        })
    }

    render() {
        return (
            <div>
            {this.state.loginFormContainerLoad ? <LoginFormContainer loginLoadStateSet={this.loginLoadStateSet} newuserSignupLoadStateSet={this.newuserSignupLoadStateSet}/> : null}
            {this.state.signupFormContainerLoad ? <SignupFormContainer signupLoadStateSet={this.signupLoadStateSet} userId={this.userId}/> : null}
            </div>
        )
    }
}

export default MainContainer