import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function logoutBtn(event) {
    event.preventDefault()
    alert('Until next time!');

    if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
        localStorage.setItem('isLoggedIn', false)
    }
}

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
                        <button className="btn btn-light" onClick={logoutBtn}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;