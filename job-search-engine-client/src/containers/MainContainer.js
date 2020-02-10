import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer.js'
import Searchbox from '../components/Search.js'
import History from '../components/History.js'
import {Segment, Grid} from 'semantic-ui-react'
import SignupFormContainer from './SignupFormContainer.js'

class MainContainer extends Component {

    render() {
        return(
            <Grid columns = {2} divided>
                <Grid.Column>
                    <Searchbox/>
                </Grid.Column>
                <Grid.Column>
                    <History/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainContainer