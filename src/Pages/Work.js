import React from "react";
import {Col} from "reactstrap";
import Sandy from "../Assets/mockup/mockup-sandychiu-co-uk.png";
import Olivet from "../Assets/mockup/mockup-olivet.png";
import Wedding from "../Assets/mockup/mockup-sandyandstephen.png";
import Solo from "../Assets/mockup/mockup-solomeworld.png";

const JSON = {
    Sandy: {
        name: 'sandy',
        portfolioImage: `${Sandy}`,
        link: 'http://sandychiu.co.uk'
    },
    Olivet: {
        name:'olivet',
        portfolioImage: `${Olivet}`,
        link: 'http://olivet.me',
    },
    Wedding: {
        name: 'sandyandstephen',
        portfolioImage: `${Wedding}`,
        link: 'http://sandyandstephen.com'
    },
    Solo: {
        name: 'solomeworld',
        portfolioImage: `${Solo}`,
        link: 'http://cchiu02.wdd1516.bbkweb.org/wdd4-web-project/',
    }
};

class Work extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(JSON).map(key => (
                    <Col sm="12" md="6">
                        <p>{JSON[key].link}</p>
                        <div>
                        <img src={JSON[key].portfolioImage} alt={JSON[key].name} key={key} />
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Work;