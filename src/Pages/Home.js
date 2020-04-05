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
                    <h1 className="pb-3">Hi I’m <span className="brand">Sandy</span>, a digital product designer based
                        in London.</h1>
                    <h2 className="pb-3">Specialising in Experience Design and Visual Design.</h2>
                </div>
                <div class="content m-5 d-flex flex-column align-items-center">
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
                    <button className="btn btn-primary"><a href="./portfolio/design/">See my work</a></button>
                </div>
            </div>
        );
    }
}

export default Home;