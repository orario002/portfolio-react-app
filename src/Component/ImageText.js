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
                <Row className="imageText imageText--wrapper">
                    <Col xs={12} md={6} className="img-wrapper"><img src={this.props.src} alt={this.props.name}/></Col>
                    <Col xs={12} md={6} className="text-wrapper">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p></Col>
                </Row>
            )
        }
        if (imagePosition === right) {
            return (
                <Row className="imageText imageText--wrapper">
                        <Col xs={12} md={6} className="text-wrapper">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p></Col>
                        <Col xs={12} md={6} className="img-wrapper"><img src={this.props.src}
                                                                         alt={this.props.name}/></Col>
                </Row>
            )
        }
        if (imagePosition === top) {
            return (
                <Row className="imageText imageText--wrapper">
                    <Col xs={12} className="img-wrapper">
                        <img src={this.props.src} alt={this.props.name}/></Col>
                    <Col xs={12} className="text-wrapper">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </Col>
                </Row>
            )
        }
        if (imagePosition === bottom) {
            return (
                <Row className="imageText imageText--wrapper">
                    <Col xs={12} className="text-wrapper">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p></Col>
                    <Col xs={12}><img src={this.props.src} alt={this.props.name}/></Col>
                </Row>
            )
        }

    }
}

export default ImageText;