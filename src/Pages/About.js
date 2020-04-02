import React, {Component} from "react";
import {Col} from "reactstrap";
import InterestsData from "../Data/InterestsData";
import AboutData from "../Data/AboutData";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-5">
                    <Col className="col-6 col-xs-12"><img className="profile rounded-circle"
                                                          src={AboutData.profile.myImage}/>
                    </Col>
                    <Col className="col-6 col-xs-12">
                        {Object.keys(AboutData).map(key => (
                            <div>
                                <p>{AboutData[key].paragraph}</p>
                            </div>
                        ))}
                    </Col>
                </div>
                <h2 className="mb-5">Some of my Interests</h2>
                <div class="row">
                        {Object.keys(InterestsData).map(key => (
                            <Col className="col-4 col-xs-12">
                                <img class="img-crop mb-2" src={InterestsData[key].image} width={500} height={250} alt=""/>
                                <h3 className="title mb-2"><strong>{InterestsData[key].title}</strong></h3>
                                <p>{InterestsData[key].content}</p>
                            </Col>
                        ))}
                </div>
            </div>
        );
    }
}

export default About;