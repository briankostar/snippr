import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item is-size-3" >
                        snippr
                    </Link>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>

                        <a className="navbar-item">Documentation</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About</a>
                                <a className="navbar-item">
                                    Jobs</a>
                                <a className="navbar-item">
                                    Contact</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/signup" className="button is-primary navbar-item">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to="/login" className="button is-light">
                                    Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;