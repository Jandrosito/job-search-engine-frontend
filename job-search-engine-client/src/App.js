import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js'
import Navbar from './Navbar.js'
import Heading from './Header.js'

export default class App extends Component {
  state = {
    activeItem: 'search'
  }
  handleClick = (e, {name}) => this.setState({activeItem: name})
  render(){
    return (
      <div className="App">
        <Heading/>
        <Navbar handleClick = {this.handleClick} activeItem = {this.state.activeItem}/>
        <MainContainer activeItem = {this.state.activeItem}/>
      </div>
    )
  }
}