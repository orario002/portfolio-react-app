import React, {Component} from "react";
import {Col} from "reactstrap";
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
                <h1>
                    <div>Sandy Chiu</div>
                    <div>Product Designer</div>
                    <div>Experience Design & Visual Design</div>
                </h1>
                <Col className="row">
                    {Object.keys(SkillsData).map(key => (
                        <div className="col-3 col-xs-12">
                            <div className="icon-large">
                                <img src={SkillsData[key].icon}/></div>
                            <p className="title">{SkillsData[key].title}</p>
                            <p>{SkillsData[key].content}</p>
                        </div>
                    ))}
                </Col>
            </div>
        );
    }
}

export default Home;