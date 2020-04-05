import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import InterestsData from "../Data/InterestsData";
import AboutData from "../Data/AboutData";

class About extends Component {
    render() {
        return (
            <div>
                <Row className="m-5">
                    <Col xs={12} md={4}><img className="profile rounded-circle"
                                             src={AboutData.profile.myImage}/>
                    </Col>
                    <Col xs={12} md={8}>
                        {Object.keys(AboutData).map(key => (
                            <div>
                                <p>{AboutData[key].paragraph}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col xs={12} className="mb-2"><h2 className="mb-5">Some of my Interests</h2></Col>
                    {Object.keys(InterestsData).map(key => (
                        <Col xs={12} lg={4}>
                            <img class="img-crop mb-2" src={InterestsData[key].image} width={500} height={250} alt=""/>
                            <h3 className="title mb-2"><strong>{InterestsData[key].title}</strong></h3>
                            <p>{InterestsData[key].content}</p>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default About;