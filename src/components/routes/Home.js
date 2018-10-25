import React, { Component } from 'react';
import Lists from '../views/Lists'

class Home extends Component {
    constructor(props) {
        super(props)
        this.tempData = [{ id: 1, votes: 1560, link: 'Awesome List' }, { id: 2, votes: 2014, link: 'React' }, { id: 3, votes: 302, link: 'Scary Movies' }];
    }
    render() {
        return (
            <div className="container">
                {/* <h1 className="is-size-3">Snipper</h1> */}
                <Lists lists={this.tempData}></Lists>
            </div>
        )
    }
}

export default Home;