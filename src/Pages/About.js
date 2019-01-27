import React, {Component} from "react";
import {Col} from "reactstrap";
import BarChart from "../Component/BarChart";
import PieChart from "../Component/PieChart";

const JSON = {
    am: {
        title: 'I work as',
        text: 'Front-end developer and UI/UX designer',
    },
    like: {
        title: 'I enjoy',
        text: 'Design and make things',
    },
    career: {
        title: 'I want to be',
        text: 'Interaction designer, Product designer'
    },
    interest: {
        title: 'I am interested in',
        text: 'Design, Technology, Art'
    },
    animal: {
        title: 'What inspires me',
        text: 'Traveling'
    },
    goal: {
        title: 'What motivates me',
        text: 'Curiosity'
    }
};

class About extends Component {
    render() {
        return (
            <div>
                <h2 className="title text-center m-4">What Would Unicorn Do<span role="img"
                                                                                    aria-label="unicorn">🦄</span></h2>
                <div className="row">
                    {Object.keys(JSON).map(key => (
                        <Col xs="12" sm="6" md="4" className={"p-4"}>
                            <h3 className="title">{JSON[key].title}</h3>
                            <p className="description">{JSON[key].text}</p>
                        </Col>
                    ))}
                </div>
                <div className="row">
                    <PieChart/>
                    <BarChart/>
                </div>
            </div>
        );
    }
}

export default About;