import React, {Component} from 'react';
import {Search, Grid, Segment, Header} from 'semantic-ui-react'

const initialState = {isLoading: false, results: [], value: ''}

let topicList = []

const categories = [
    {
      "title": "Fadel - Pollich",
      "description": "Phased asymmetric matrices",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/SlaapMe/128.jpg",
      "price": "$4.35"
    },
    {
      "title": "Farter, Mohr and Zemlak",
      "description": "Organized stable Graphic Interface",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg",
      "price": "$45.00"
    },
    {
      "title": "Bartell and Sons",
      "description": "Face to face demand-driven function",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/afusinatto/128.jpg",
      "price": "$74.13"
    },
    {
      "title": "Hansen, Bayer and Hirthe",
      "description": "Mandatory bifurcated initiative",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/karalek/128.jpg",
      "price": "$42.85"
    },
    {
      "title": "Pagac and Sons",
      "description": "Stand-alone 6th generation moderator",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg",
      "price": "$56.39"
    }
  ]
  
export default class Searchbox extends Component {

    state = initialState

    handleResultSelect = (e, { result }) => {
        this.setState({
            value: result.title
        })
    }

    componentDidMount() {
    fetch("http://localhost:3000/interests")
    .then(res => res.json())
    .then(topics => topicList.push(topics))
  }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value})
        let matches = topicList[0].filter(cat => cat.title.slice(0,value.length).toLowerCase() === value.toLowerCase())
        console.log(matches)
        setTimeout(() => {
            if(this.state.value.length < 1) return this.setState(initialState)
            this.setState({
            isLoading: false,
            results: matches
            })
        }, 300)
        console.log(matches)
    }

    render(){
        const { isLoading, value, results } = this.state
        console.log(results)
        console.log(value)
        return(
            <Search aligned = 'left'
            
            loading = {isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange = {this.handleSearchChange}
            results = {results}
            value = {value}
            />
        )}
}