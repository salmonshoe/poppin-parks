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
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <Link className="navbar-brand text-white logoFont" to="/">
                Poppin' Parks
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item text-light">
                        <Link to="/profile"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/profile"
                                    ? "nav-link active text-light"
                                    : "nav-link"
                            }>
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item text-light">
                        <Link to="/park"
                            className={
                                window.location.pathname === "/park" ? "nav-link active text-light" : "nav-link"
                            }>
                            Parks
                        </Link>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-light" onClick={logoutBtn}>
                            Log Out
                        </button>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;