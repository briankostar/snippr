import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props)
        // this.state = { post: {} }
    }

    componentDidMount() {
        console.log('mounted2')
    }
    componentWillReceiveProps() {
        console.log('got new data', this.props)
    }
    componentWillUpdate() {

        console.log('componentWillUpdate', this.props)
    }

    render() {
        return (
            <div>
                {/* {this.props.post} */}
                Post
            </div>
        )
    }
}

export default Post;