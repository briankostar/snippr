import React, { Component } from 'react';

import axios from 'axios'
import Post from '../views/Post'

class PostRoute extends Component {
    constructor(props) {
        super(props)
        this.state = { post: {} }
    }

    componentDidMount = () => {
        axios.get('/data/posts.json')
            .then(res => {
                this.setState({ post: res.data[0] })
            })
    }

    render() {
        console.log('render called')
        return (
            <div>
                <Post post={this.state.post}></Post>
            </div>
        )
    }
}

export default PostRoute;