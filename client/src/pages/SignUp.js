import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

function SignUp() {
    return (
        <>
            <Container>
                <SignUpForm />
            </Container>
            <hr />
            <h6>Already a member? Login then!</h6>
            <button className="btn btn-outline-primary">
                <Link to='/login'>
                    Login
                </Link>
            </button>
        </>
    );
}

export default SignUp;