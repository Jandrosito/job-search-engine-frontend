import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'

export default class Navbar extends Component {
      render(){
        return (
          <Menu size='large' attached>
            <Menu.Item 
            name = "search" active = {this.props.activeItem === 'search'}
            onClick = {this.props.handleClick}
            >
              Search
            </Menu.Item>
            <Menu.Item 
            name = "history" active = {this.props.activeItem === 'history'}
            onClick = {this.props.handleClick}
            >
              History
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item 
                name = "sign in" active = {this.props.activeItem === 'sign in'}
                onClick = {this.props.handleClick}
                >
                Sign In
                </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
      }
    }