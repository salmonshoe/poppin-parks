import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

function Login() {
    return (
        <>
            <Container>
                <LoginForm />
            </Container>
            <hr />
            <h6>Not a member? Sign Up already!</h6>
            <button className="btn btn-outline-primary">
                <Link to='/signup'>
                    Sign Up
            </Link>
            </button>
        </>
    );
}

export default Login;