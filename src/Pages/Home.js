import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import SkillsData from "../Data/SkillsData";
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        document.body.classList.add("home");
    }

    componentWillUnmount() {
        document.body.classList.remove("home");
    }

    render() {
        const portfolio = "./portfolio/design/";
        return (
            <div className="container">
                <div className="header m-5">
                    <h1 className="pb-3">Hi I’m <span className="brand">Sandy</span>, a digital product designer based
                        in London.</h1>
                    <h2 className="pb-3">Specialising in Experience Design and Visual Design.</h2>
                </div>
                <div className="content m-5 d-flex flex-column align-items-center">
                    <Row className="pb-5">
                        {Object.keys(SkillsData).map(key => (
                            <Col lg={3} sm={12}>
                                <div className="d-flex justify-content-center">
                                    <img className="icon" alt={SkillsData[key].title} src={SkillsData[key].icon}
                                         width={200} height={100}/></div>
                                <h3 className="title text-center">{SkillsData[key].title}</h3>
                                <p>{SkillsData[key].content}</p>
                            </Col>
                        ))}
                    </Row>
                    <Link to={portfolio} className="btn btn-primary">See my work</Link>
                </div>
            </div>
        );
    }
}

export default Home;