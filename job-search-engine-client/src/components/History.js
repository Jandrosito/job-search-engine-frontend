import React, {Component} from 'react';
import {List, Segment} from 'semantic-ui-react'

export default class History extends Component {
    state = {
        historyList: []
    }

    componentWillMount() {
        console.log(this.props.historyItem)
        this.setState({
            historyList: [...this.state.historyList, this.props.historyItem]
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.historyItem !== prevProps.historyItem) {
            this.setState({
                historyList: [...this.state.historyList, this.props.historyItem]
            })
        }
    }

    removeItem = (search) => {
        this.setState({
            historyList: this.state.historyList.filter(hist => hist != search)
        })
    }

    render(){
        console.log(this.state.historyList)
        return(
            <List divided relaxed size='big'>
                {
                    this.state.historyList.map(search => 
                        <List.Item onClick={() => this.removeItem(search)}>
                            <List.Content>
                                <List.Header>{search.title}</List.Header>
                                    <List.Description>{search.company}</List.Description>
                                    <a href={search.url} target="_blank">Link</a>
                            </List.Content> 
                        </List.Item>
                    )
                }
            </List>

        )
    }
}