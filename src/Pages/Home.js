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
                <h1 className="mb-2">
                    <div>Sandy Chiu</div>
                    <div>Product Designer</div>
                </h1>
                <h2 className="mb-5">Experience Design & Visual Design</h2>
                <Col className="row">
                    {Object.keys(SkillsData).map(key => (
                        <div className="col-3 col-xs-12">
                            <div>
                                <img className="icon" src={SkillsData[key].icon} width={200} height={100}/></div>
                            <h3 className="title">{SkillsData[key].title}</h3>
                            <p>{SkillsData[key].content}</p>
                        </div>
                    ))}
                </Col>
            </div>
        );
    }
}

export default Home;