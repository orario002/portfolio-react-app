import React from "react";
import {Col} from "reactstrap";
import WorkData from "../../Data/WorkData"

class Develop extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(WorkData).map(key => (
                    <Col sm="12" md="4">
                        <div>
                            <a target="_blank" href={WorkData[key].link}>
                                <img className="img-coverphoto" src={WorkData[key].portfolioImage} alt={WorkData[key].name} key={key} height={500}/>
                                <h2>{WorkData[key].title}</h2>
                                <p>{WorkData[key].description}</p>
                            </a>
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Develop;