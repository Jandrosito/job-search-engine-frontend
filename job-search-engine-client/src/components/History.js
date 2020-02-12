import React, {Component} from 'react';
import {List, Segment} from 'semantic-ui-react'

const searches = [
    {
        time: 'Saturday, December 1',
        content: 'Coders NYC Meetup'
    },
    {
        time: 'Saturday, December 1',
        content: 'Coders NYC Meetup'
    },
    {
        time: 'Saturday, December 1',
        content: 'Coders NYC Meetup'
    }
]

export default class History extends Component {
    render(){
        return(<div>
            <div></div>
                <Segment>
                    <List divided relaxed size='big'>
                        <List.Header>Past Results</List.Header>
                        {
                            searches.map(search => 
                                <List.Item>
                                    <List.Content>
                                        <List.Header>{search.time}</List.Header>
                                            <List.Description>{search.content}</List.Description>
                                    </List.Content> 
                                </List.Item>
                            )
                        }
                    </List>
                </Segment>
            </div>
        )
    }
}