import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
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

        if (!this.state.firstName || !this.state.lastName || !this.state.email) {
            alert('Please fill out a first name, last name and email.');
        } else if (this.state.password.length < 6) {
            alert('Choose a more secure password');
        } else if (this.state.password !== this.state.confirmPassword) {
            alert('Your passwords do not match');
        } else {
            alert(`Welcome to Poppin' Parks ${this.state.firstName}`);
            API.saveUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
                .then((res) => {
                    if (res.data.success) {
                        localStorage.setItem('isLoggedIn', true)
                    }
                })
                .catch(err => console.log(err));
        }

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    render() {
        return (
            <div>
                <h3>Create an account!</h3>
                <h5>Your password must be more than 6 characters long.</h5>
                <p>Hello {this.state.firstName} {this.state.lastName} {this.state.email} </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
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
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;