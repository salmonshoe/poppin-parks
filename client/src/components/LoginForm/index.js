import React, { Component } from 'react';
import './style.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        alert(`Welcome to Poppin' Parks ${this.state.name}`);

        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
        return (
            <div>
                <h3>Login to your Account!</h3>
                <form className="form">
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Password"
                    />
                </form>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
        );
    }
}

export default LoginForm;