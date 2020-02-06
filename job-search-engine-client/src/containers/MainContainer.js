import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer.js'

class MainContainer extends Component {
        state = {
            loginFormContainerLoad: true
        }
    

    loginLoadStateSet = () => {
        this.setState({
            loginFormContainerLoad: !this.state.loginFormContainerLoad
        })
    }

    render() {
        return (
            <div>
            {this.state.loginFormContainerLoad ? <LoginFormContainer loginLoadStateSet={this.loginLoadStateSet}/> : null}
            </div>
        )
    }
}

export default MainContainer