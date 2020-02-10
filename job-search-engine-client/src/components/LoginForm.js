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
        .then(users => users.forEach(user => user.username === this.state.username ? this.props.loginLoadStateSet() : this.newUserPostHandle(e)))
    }

    newUserPostHandle = e => {
        console.log("hi")
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                location: "Unknown"
            })
        })
        .then(res => res.json())
        .then(user => this.props.newuserSignupLoadStateSet(user.id))
        .then(user => this.props.signupLoadStateSet(user.id))
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