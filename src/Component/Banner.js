import React from 'react';
import {Col, Row} from "reactstrap";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <img class="banner__hero" src={this.props.img} alt={this.props.name}/>
                <div className="intro p-5">
                <h1 className="pb-2">{this.props.title}</h1>
                <p className="pb-2">{this.props.intro}</p>
                </div>
            </div>
        )
    };
}

export default Banner;