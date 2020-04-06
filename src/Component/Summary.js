import React from 'react';
import {Col, Row} from 'reactstrap';

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <strong>Overview</strong>
                        <p>{this.props.overview}</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} xs={12}>
                        <strong>Time</strong>
                        <p>{this.props.time}</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                {this.props.tools}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Role</strong>
                        <ul>
                            <li>
                                {this.props.role}
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Team</strong>
                        <ul>
                            <li>
                                {this.props.team}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default Summary;