import React, { Component } from 'react';
import Lists from '../views/Lists'

class Home extends Component {
    constructor(props) {
        super(props)
        this.tempData = [{ id: 1, votes: 1, link: 'test link 1' }, { id: 2, votes: 2, link: 'test link 2' }, { id: 3, votes: 3, link: 'test link 3' }];
    }
    render() {
        return (
            <div>
                <h1>Snipper</h1>
                <Lists lists={this.tempData}></Lists>
                {/* <div>{this.tempData.map((list) => <List key={list.id} {...list} />)}</div> */}
            </div>
        )
    }
}

export default Home;