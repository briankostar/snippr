import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Level } from 'react-bulma-components';

class Post extends Component {
    componentDidMount() {
    }
    componentWillReceiveProps() {
    }
    componentWillUpdate() {
    }

    render() {
        return (
            <div>
                <Level.Side align="left">
                    {this.props.post.votes}
                    <Link to={`/post/${this.props.post.id}`} className="navbar-item">
                        {this.props.post.link}
                    </Link>
                </Level.Side>
            </div>
        )
    }
}

export default Post;