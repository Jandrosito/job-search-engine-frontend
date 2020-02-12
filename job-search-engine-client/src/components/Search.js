import React, {Component} from 'react';
import {Search} from 'semantic-ui-react'

const initialState = {isLoading: false, results: [], value: ''}

let topicList = []
  
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
        setTimeout(() => {
            if(this.state.value.length < 1) return this.setState(initialState)
            this.setState({
            isLoading: false,
            results: matches
            })
        }, 300)
    }

    render(){
        const { isLoading, value, results } = this.state
        return(
          <div style={{display: 'flex', alignItems: 'center'}}>
              <Search 
              loading = {isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange = {this.handleSearchChange}
              results = {results}
              value = {value}
              onKeyPress={event => this.props.keyWordSet(event, this.state.value)}
              />
            </div>
        )}
}