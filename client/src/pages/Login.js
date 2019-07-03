import React from 'react';

function Login() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label for="exampleEmail">Email Address</label>
                    <input type="email" className="form-control" id="exampleEmailInput" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label for="examplePassword">Password</label>
                    <input type="password" className="form-control" id="examplePassword" placeholder="Enter password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Login;