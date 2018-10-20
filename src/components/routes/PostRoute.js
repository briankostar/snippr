import React, { Component } from 'react';

import axios from 'axios'
import Post from '../views/Post'

class PostRoute extends Component {
    constructor(props) {
        super(props)
        this.state = { post: { "uh": 31 } }
    }
    componentDidMount = () => {
        console.log('mounted')
        //acting server call
        // this.setState({ post: { "test": 12 } })
        // axios.get('/data/posts.json')
        //     .then(res => {
        //         this.setState({ post: res.data[0] })
        //         console.log('data', this.state)
        //     })

        fetch('/data/posts.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ post: { "test": 12 } })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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