import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Level } from 'react-bulma-components';

class List extends Component {

    render() {
        return (
            <Level.Side align="left">
                {this.props.votes}
                <Link to={`/post/${this.props.id}`} className="navbar-item">
                    {this.props.link}
                </Link>
            </Level.Side>
        )
    }
}

export default List;