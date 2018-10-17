import React, { Component } from 'react';
import PostView from '../views/Post'

class Post extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Post</h2>
                <PostView></PostView>
            </div>
        )
    }
}

export default Post;