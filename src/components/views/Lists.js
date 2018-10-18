import React, { Component } from 'react';
import List from './List'
import { Container } from 'react-bulma-components';

class Lists extends Component {

    render() {
        return (
            <div>
                <Container>{this.props.lists.sort((a, b) => b.votes - a.votes).map((list) => <List key={list.id} {...list} />)}</Container>
            </div>
        )
    }
}

export default Lists;