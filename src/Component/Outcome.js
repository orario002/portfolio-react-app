import React from 'react';
import {Row, Col} from 'reactstrap';

class Outcome extends React.Component {
    render() {
        const deliveries = this.props.deliveries.map(function (delivery) {
            return <li> {delivery} </li>;
        });

        return (
            <div className="outcome p-5">
                <Row>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </Row>
                <Row>
                    <Col xs={12}>
                    <strong>Delivery</strong>
                    </Col>
                    <Col xs={12}>
                    <ul>{deliveries}</ul>
                    </Col>
                </Row>
                <Row>
                    <strong>Lesson learned</strong>
                    <p>{this.props.lesson}</p>
                </Row>
            </div>
        )
    };
}

export default Outcome;