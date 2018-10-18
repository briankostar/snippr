import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

class List extends Component {

    render() {
        return (
            <div>
                <Columns.Column>
                    {this.props.votes}
                    <Link to={`/post/${this.props.id}`} className="navbar-item">
                        {this.props.link}
                    </Link>
                </Columns.Column>
            </div>
        )
    }
}

export default List;