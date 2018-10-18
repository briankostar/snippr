import React, { Component } from 'react';
import List from './List'

class Lists extends Component {

    render() {
        return (
            <div>
                <div>{this.props.lists.sort((a, b) => b.votes - a.votes).map((list) => <List key={list.id} {...list} />)}</div>
            </div>
        )
    }
}

export default Lists;