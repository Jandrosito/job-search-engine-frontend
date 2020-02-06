import React, {Component} from 'react';


class LoginForm extends Component {
    state = {
        username: ""
    }
    

    loginFormHandle = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    loginSubmitHandle = e => {
        e.preventDefault()
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => users.forEach(user => user.username === this.state.username ? this.props.loginLoadStateSet() : this.newUserPostHandle()))
    }

    newUserPostHandle = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                username: this.state.username
            })
        })
        this.props.loginLoadStateSet()
    }

    render() {
        return (
            <form onSubmit={event => this.state.loginSubmitHandle(event)}>
                <label>Enter Username </label>
                <input type="text" name="username" value ={this.state.username} onChange={event => this.loginFormHandle(event)}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default LoginForm