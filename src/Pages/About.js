import React, {Component} from "react";
import {Col} from "reactstrap";
import BarChart from "../Component/BarChart";
import PieChart from "../Component/PieChart";
import AboutData from "../Data/AboutData"

class About extends Component {
    render() {
        return (
            <div>
                {/*<h2 className="title text-center m-4">I am a Designer and Developer based in London.<span role="img"*/}
                                                                                    {/*aria-label="unicorn">🦄</span></h2>*/}

                <div className="row">
                    {Object.keys(AboutData).map(key => (
                        <Col xs="12" md="3" className={"p-3 text-center"}>
                            <h3 className="title">{AboutData[key].title}</h3>
                            <p className="description">{AboutData[key].text}</p>
                        </Col>
                    ))}
                </div>

                <div className="row justify-content-center align-items-center mt-4">
                    <BarChart/>
                    <PieChart/>
                </div>

            </div>
        );
    }
}

export default About;