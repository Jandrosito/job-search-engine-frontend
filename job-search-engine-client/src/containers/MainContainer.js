import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer.js'
import Searchbox from '../components/Search.js'
import History from '../components/History.js'

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
        if (this.props.activeItem === 'sign in') {
            return(
                <div>
                {/* {this.state.loginFormContainerLoad ? <LoginFormContainer loginLoadStateSet={this.loginLoadStateSet}/> : null} */}
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