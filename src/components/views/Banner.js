import React, { Component } from 'react';

class Banner extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary is-medium is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Medium title
                            </h1>
                            <h2 className="subtitle">
                                Medium subtitle
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Banner;