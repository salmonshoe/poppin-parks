import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Poppin' Parks
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/profile"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/profile"
                                    ? "nav-link active"
                                    : "nav-link"
                            }>
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/park"
                            className={
                                window.location.pathname === "/park" ? "nav-link active" : "nav-link"
                            }>
                            Parks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={window.location.pathname === "/sign" ? "nav-link active" : "nav-link"}> 
                            Signout
                            {/* A dead link as of now. Eventually a logout button or route to sign users out */}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;