import React from 'react';
import {Col, Row} from "reactstrap";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <img class="banner__hero" src={this.props.img} alt={this.props.name}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.intro}</p>
            </div>
        )
    };
}

export default Banner;