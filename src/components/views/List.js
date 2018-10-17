import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
        return (
            <div>
                Votes: {this.props.votes}
                <Link to={`/post/${this.props.id}`} className="navbar-item">
                    {this.props.link}
                </Link>
            </div>
        )
    }
}

export default List;