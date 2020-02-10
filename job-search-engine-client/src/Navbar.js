import React, {Component} from 'react';
import {Menu, Modal, Form, Button} from 'semantic-ui-react'

export default class Navbar extends Component {

  state = {username: '', password: '', open: false}

  handleSubmit = () => {
    console.log(this.state.username, this.state.password)
    this.setState({
      username: '',
      password: ''
    })
    this.handleClick()
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render(){
    const { username, password } = this.state
    return (
      // <Menu size='large' attached>
      // </Menu>
      //   <Menu.Item 
      //   name = "search" active = {this.props.activeItem === 'search'}
      //   onClick = {this.props.handleClick}
      //   >
      //     Search
      //   </Menu.Item>
      //   <Menu.Item 
      //   name = "history" active = {this.props.activeItem === 'history'}
      //   onClick = {this.props.handleClick}
      //   >
      //     History
      //   </Menu.Item> 
      <div>
        <Button floated='left' 
            name = "sign in" active = {this.props.activeItem === 'sign in'}
            onClick = {this.handleClick}>
            Sign In</Button>
        <Modal size = 'tiny' closeIcon onClose = {this.handleClick} open = {this.state.open}>
          <Modal.Content>
            <Modal.Header>Log In</Modal.Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input onChange = {this.handleChange} label = 'Username' placeholder='Username' name = 'username' value = {username}/>
              <Form.Input onChange = {this.handlePChange} label = 'Password' placeholder = 'Disabled' disabled name = 'password' value = {password}/>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}