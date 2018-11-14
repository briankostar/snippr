import React, { Component } from 'react';
import Lists from '../views/Lists'
import Banner from '../views/Banner'

class Home extends Component {
    constructor(props) {
        super(props)
        this.tempData = [{ id: 1, votes: 1560, link: 'Awesome List' }, { id: 2, votes: 2014, link: 'React' }, { id: 3, votes: 302, link: 'Scary Movies' }];
    }
    render() {
        return (
            <div>
                <Banner></Banner>
                <div className="container">
                    <Lists lists={this.tempData}></Lists>
                </div>
            </div>
        )
    }
}

export default Home;