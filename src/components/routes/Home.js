import React, { Component } from 'react';
import List from '../views/List'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Snipper</h1>
                <List></List>
            </div>
        )
    }
}

export default Home;