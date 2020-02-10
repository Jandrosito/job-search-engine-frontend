import React, {Component} from 'react';
import Searchbox from '../components/Search.js'
import History from '../components/History.js'


class MainContainer extends Component {

    render() {
        if (this.props.activeItem === 'search') {
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