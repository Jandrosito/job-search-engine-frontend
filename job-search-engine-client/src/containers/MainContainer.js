import React, {Component} from 'react';
import Searchbox from '../components/Search.js'
import History from '../components/History.js'
import SearchResult from '../components/SearchResults.js'
import {Grid, Loader} from 'semantic-ui-react'



class MainContainer extends Component {
    state = {
        keyWord: "",
        historyLoad: false,
        historyItem: []
    }

    keyWordSet = (e, word) => {
        if (e.key === 'Enter') {
        this.setState({
            keyWord: word
        })
    }
    }

    addToHistory = (item) => {
        console.log(item)
        this.setState({
            historyItem: item,
            historyLoad: true
        })
        console.log(this.state.historyItem)
    }

    render() {
        return(
            <div>
                <div style={{marginBottom: '5rem'}}>
                    <Searchbox keyWordSet={this.keyWordSet}/>
                </div>
                <Grid columns = {2} divided>
                    {this.state.keyWord !== "" ? <Grid.Column>
                        <SearchResult keyWord={this.state.keyWord} addToHistory={this.addToHistory}/>
                    </Grid.Column> : null}
                    {this.state.historyLoad ?<Grid.Column>
                        <History historyItem={this.state.historyItem}/>
                    </Grid.Column> : null}
                </Grid>
            </div>
        )
    }
}

export default MainContainer