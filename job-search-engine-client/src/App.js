import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js'
import Navbar from './Navbar.js'
import Heading from './Header.js'

export default class App extends Component {
  state = {
    activeItem: 'search'
  }
  render(){
    return (
      <div className="App" style={{padding: '0 2rem'}}>
        <Heading/>
        <Navbar activeItem = {this.state.activeItem}/>
        <MainContainer activeItem = {this.state.activeItem}/>
      </div>
    )
  }
}