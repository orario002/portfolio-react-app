import React from 'react';
import {Col, Row} from 'reactstrap';

class ImageText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
// Conditional rendering https://reactjs.org/docs/conditional-rendering.html
        const imagePosition = this.props.imagePosition;
        const left = "left";
        const right = "right";
        const top = "top";
        const bottom = "bottom";

        if (imagePosition === left) {
            return (
                <div className="imageText">
                    <Row>
                        <Col xs={12} md={6}><img src={this.props.src} alt={this.props.name}/></Col>
                        <Col xs={12} md={6}>
                            <h3>{this.props.title}</h3>
                            <p className="pb-5">{this.props.description}</p></Col>
                    </Row>
                </div>
            )
        }
        if (imagePosition === right) {
            return (
                <div className="imageText">
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p></Col>
                        <Col xs={12} md={6}><img src={this.props.src} alt={this.props.name}/></Col>
                    </Row>
                </div>
            )
        }
        if (imagePosition === top) {
            return (
                <div className="imageText">
                    <Row>
                        <img src={this.props.src} alt={this.props.name}/></Row>
                    <Row>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </Row>
                </div>
            )
        }
        if (imagePosition === bottom) {
            return (
                <div className="imageText">
                    <Row>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p></Row>
                    <Row xs={12}><img src={this.props.src} alt={this.props.name}/></Row>
                </div>
            )
        }

    }
}

export default ImageText;