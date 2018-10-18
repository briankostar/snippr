import React, { Component } from 'react';
import PostView from '../views/Post'

class Post extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <PostView></PostView>
            </div>
        )
    }
}

export default Post;