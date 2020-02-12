import React, {Component} from 'react';
import {Card, Image, Icon, Grid} from 'semantic-ui-react'
import '../index.css'

export default class SearchResults extends Component {
    state = {
        searchResults: []
    }
    
    componentWillMount() {
        this.urlPost()
    }

    urlPost = () => {
    fetch("http://localhost:3000/searches", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
            body: JSON.stringify({keyword: this.props.keyWord})
        })
        .then(res => res.json())
        .then(results => {
            console.log(results)
            this.setState({searchResults: [...this.state.searchResults, results]})
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.keyWord !== prevProps.keyWord) {
            console.log("y paq que")
            this.urlPost()
            this.setState({
                searchResults: []
            })
        }
    }
    

    render() {
        // this.state.searchResults.map(result => console.log(result))
        if (this.state.searchResults.length >= 1) {
        return(
            <Card.Group>
            {this.state.searchResults[0].map(result => {
                    if (result == undefined) {
                        
                    }
                   return <Card onClick={() => this.props.addToHistory(result)} style={{maxWidth: '125px', maxHeight: '200px'}}>
                    <Image src={result.image} wrapped ui={false} style={{maxWidth: '80px', maxHeight: '100px'}}/>
                    <Card.Content>
                    <Card.Header style={{fontSize: '10px'}}>{result.title}</Card.Header>
                    <Card.Description style={{fontSize: '10px'}}>
                        {result.company}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{fontSize: '10px'}}>
                    <a>
                        <Icon icon="map" />
                        {result.location}
                    </a>
                    </Card.Content>
                </Card>
            })}
            </Card.Group>
        )
            } else if (this.state.searchResults.length < 1) {
                return (
                    null
                )
            }
    }
}
