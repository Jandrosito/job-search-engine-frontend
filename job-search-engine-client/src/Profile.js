import React, {Component} from 'react';
import {Menu, Modal, Form, Button, Item} from 'semantic-ui-react'

export default class Profile extends Component {
    render(){
        return(
            <div>
                <Button floated='left' 
                name = "profile" active = {this.props.activeItem === 'sign in'}
                onClick = {this.props.changeActiveItem}>
                Profile</Button>
                <Item header='User' description = 'This is my description text.' meta = 'this is my most common search' />
            </div>
        )
    }
}