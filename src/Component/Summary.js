import React from 'react';
import {Col, Row} from 'reactstrap';

class Summary extends React.Component {
    render() {
        const tools = this.props.tools.map(function (tool) {
            return <li> {tool} </li>;
        });
        const roles = this.props.roles.map(function (role) {
            return <li> {role} </li>;
        });
        const teams = this.props.teams.map(function (team) {
            return <li> {team} </li>;
        });

        return (
            <div className="summary p-5">
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
                        <ul>{tools}</ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Role</strong>
                        <ul>{roles}</ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Team</strong>
                        <ul>{teams}</ul>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default Summary;