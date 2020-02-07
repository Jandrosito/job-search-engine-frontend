import React, {Component} from 'react';
import {Header, Segment} from 'semantic-ui-react'

export default class Heading extends Component {
    render(){
        return(
            <Segment attached='top'>
                <Header as="h2" textAlign='center'>
                    Job Search App
                </Header>
            </Segment>
        )
    }
}