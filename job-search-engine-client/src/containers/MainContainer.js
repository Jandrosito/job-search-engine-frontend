import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer.js'
import Searchbox from '../components/Search.js'
import History from '../components/History.js'
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
        if (this.props.activeItem === 'sign in') {
            return(
                <div>
                {this.state.loginFormContainerLoad ? <LoginFormContainer loginLoadStateSet={this.loginLoadStateSet}/> : null}
                </div>
            )
        } else if (this.props.activeItem === 'search') {
            return(
                <div>
                    <Searchbox />
                </div>
            )
        } else if (this.props.activeItem === 'history') {
            return(
                <div>
                    <History />
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default MainContainer