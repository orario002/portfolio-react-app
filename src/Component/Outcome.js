import React from 'react';
import {Row, Col} from 'reactstrap';

class Outcome extends React.Component {
    render() {
        const deliveries = this.props.deliveries.map(function (delivery) {
            return <li> {delivery} </li>;
        });

        return (
            <div className="outcome container">
                <Row className="pb-3">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </Row>
                <Row className="pb-3">
                    <Col xs={12}>
                    <strong>Delivery</strong>
                    </Col>
                    <Col xs={12}>
                    <ul>{deliveries}</ul>
                    </Col>
                </Row>
                <Row className="pb-3">
                    <strong>Lesson learned</strong>
                    <p>{this.props.lesson}</p>
                </Row>
            </div>
        )
    };
}

export default Outcome;