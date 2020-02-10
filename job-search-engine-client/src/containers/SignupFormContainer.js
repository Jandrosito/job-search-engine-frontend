import React, {Component} from 'react';
import SignupForm from '../components/SignupForm'

class SignupFormContainer extends Component {
    
    render() {
        return (
            <SignupForm signupLoadStateSet={this.props.signupLoadStateSet} />
        )
    }
}

export default SignupFormContainer