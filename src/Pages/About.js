import React, {Component} from "react";
import {Col} from "reactstrap";
import AboutData from "../Data/AboutData"

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Col className="col-6 col-xs-12"><img className="profile rounded-circle"
                                                          src={AboutData.profile.myImage}/>
                    </Col>
                    <Col className="col-6 col-xs-12">
                        {Object.keys(AboutData).map(key => (
                            <p className="description">{AboutData[key].paragraph}</p>
                        ))}
                    </Col>
                </div>
                <img src={AboutData.profile.myJourney}/>
            </div>
        );
    }
}

export default About;