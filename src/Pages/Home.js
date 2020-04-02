import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import SkillsData from "../Data/SkillsData";

class Home extends Component {
    componentDidMount() {
        document.body.classList.add("home");
    }

    componentWillUnmount() {
        document.body.classList.remove("home");
    }

    render() {
        return (
            <div>
                <div class="header m-5">
                    <h1 className="mb-2 text-center">
                        <div>Sandy Chiu</div>
                        <div>Product Designer</div>
                    </h1>
                    <h2 className="mb-5 text-center">Experience Design & Visual Design</h2>
                </div>
                <div class="content">
                   <Row>
                        {Object.keys(SkillsData).map(key => (
                            <Col lg={3} sm={12}>
                                <div className="d-flex justify-content-center">
                                    <img className="icon" src={SkillsData[key].icon} width={200} height={100}/></div>
                                <h3 className="title text-center">{SkillsData[key].title}</h3>
                                <p>{SkillsData[key].content}</p>
                            </Col>
                        ))}
                   </Row>
                </div>
            </div>
        );
    }
}

export default Home;