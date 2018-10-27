import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';


export default withAuth(class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        if (this.state.authenticated === null) return null;
        const authNav = this.state.authenticated ?
            <div className="buttons">
                <Link to="/profile" className="button is-primary navbar-item">
                    <strong>Profile</strong>
                </Link>
                {/* <Link to="/login" className="button is-light">Log Out</Link> */}
                <a href="javascript:void(0)" className="button is-light" onClick={this.props.auth.logout}>Logout</a>
            </div> :
            <div className="buttons">
                <Link to="/signup" className="button is-primary navbar-item">
                    <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">Log in</Link>
                {/* <a href="javascript:void(0)" onClick={this.props.auth.login}>Login</a> */}
            </div>
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
                    {/* <div className="navbar-start">
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
                    </div> */}

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {authNav}

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
});

// export default Navbar;