import React, {Component} from "react";
import {Col} from "reactstrap";
import BarChart from "./About/BarChart";

const JSON = {
    am: {
        title: 'I am',
        text: 'Front-end developer and UI/UX designer',
    },
    like: {
        title: 'I enjoy',
        text: 'UI design, UX design, Graphic design, ',
    },
    want: {
        title: 'I want to be',
        text: 'Interaction designer, Product designer'
    },
    interest: {
        title: 'I am interested in',
        text: 'Design, Technology, Art, Photography'
    },
    animal: {
        title: 'What would I be if I were an animal',
        text: 'Unicorn, Koala, Sloth'
    }
}

class About extends Component {
  render() {
    return (
        <div>
            <div className="">
            <BarChart />
            </div>
          <div className="row">
              {Object.keys(JSON).map(key => (
                  <Col xs="12" sm="6" md="4">
                      <h3>{JSON[key].title}</h3>
                          <p>{JSON[key].text}</p>
                  </Col>
              ))}
          </div>
        </div>
    );
  }
}

export default About;