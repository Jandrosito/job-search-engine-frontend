import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js'
import Navbar from './Navbar.js'
import Heading from './Header.js'
import Profile from './Profile.js'


export default class App extends Component {
  state = {
    activeItem: 'search',
    username: ''
  }
  changeActiveItem = () => {
    if(this.state.activeItem === 'search'){
      this.setState({
        activeItem: 'profile'
      })
    } else {
      this.setState({
        activeItem: 'search'
      })
    }
  }



  render(){
    return (
      this.state.activeItem === 'search' ? 
      <div className="App">
        <Heading/>
        <Navbar activeItem = {this.state.activeItem} changeActiveItem = {this.changeActiveItem}/>
        <MainContainer activeItem = {this.state.activeItem}/>
      </div> : <Profile activeItem = {this.state.activeItem} changeActiveItem = {this.changeActiveItem} username = {this.state.username}/>
    )
  }
}