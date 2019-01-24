import React, {Component} from "react";
import {Col} from "reactstrap";
import BarChart from "./About/BarChart";

const JSON = {
    am: {
        title: 'I work as',
        text: 'Front-end developer and UI/UX designer',
    },
    like: {
        title: 'I enjoy',
        text: 'Design and make things, Traveling',
    },
    career: {
        title: 'Career path',
        text: 'Interaction designer, Product designer'
    },
    interest: {
        title: 'I am interested in',
        text: 'Design, Technology, Art, Entrepreneurship'
    },
    animal: {
        title: 'What would I be if I were an animal',
        text: 'Unicorn + Koala + Sloth'
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
            <BarChart />
          <div className="row">
              {Object.keys(JSON).map(key => (
                  <Col xs="12" sm="6" md="4" className={"p-4"}>
                      <h3 className="title">{JSON[key].title}</h3>
                          <p className="description">{JSON[key].text}</p>
                  </Col>
              ))}
          </div>
        </div>
    );
  }
}

export default About;