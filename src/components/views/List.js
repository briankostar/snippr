import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div>
                List [{this.props.votes} - {this.props.link}]]
            </div>
        )
    }
}

export default List;