import React, { Component } from 'react';
import List from './List'
import { Columns } from 'react-bulma-components';

class Lists extends Component {

    render() {
        return (
            <div>
                <Columns>{this.props.lists.sort((a, b) => b.votes - a.votes).map((list) => <List key={list.id} {...list} />)}</Columns>
            </div>
        )
    }
}

export default Lists;