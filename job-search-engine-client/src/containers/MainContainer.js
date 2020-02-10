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

    signupLoadStateSet = (id = null) => {
        this.setState({
            signupFormContainerLoad: !this.state.signupFormContainerLoad,
            userId: id
        })
    }

    render() {
        if (this.props.activeItem === 'sign in') {
            return(
                <div>
                {this.state.loginFormContainerLoad ? <LoginFormContainer activeItem={this.props.activeItem} loginLoadStateSet={this.loginLoadStateSet} signupLoadStateSet={this.signupLoadStateSet}/> : null}
                </div>
            )
        } else if (this.signupFormContainerLoad === true) {
            return (
                <div>
            {this.state.signupFormContainerLoad ? <SignupFormContainer signupLoadStateSet={this.signupLoadStateSet} userId={this.userId}/> : null}
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