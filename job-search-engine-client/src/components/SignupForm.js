import React, {Component} from 'react'

class SignupForm extends Component {
    state = {
        location: ""
    }

    signupHandle = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    signupFormSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/users/${this.props.userId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                location: this.state.location
            })
        })
        this.props.singupLoadStateSet()
    }

    redner() {
        return (
            <form onSubmit={event => this.signupFormSubmit(event)}>
                <label>Enter your Location</label>
                <input name="location" value={this.state.location} onChange={event => this.signupHandle(event)}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default SignupForm