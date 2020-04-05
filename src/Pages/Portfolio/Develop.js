import React from "react";
import {Col} from "reactstrap";
import DevelopData from "../../Data/DevelopData"

class Develop extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(DevelopData).map(key => (
                    <Col sm="12" md="4">
                        <div>
                            <a target="_blank" href={DevelopData[key].link}>
                                <img className="img-coverphoto" src={DevelopData[key].portfolioImage} alt={DevelopData[key].name} key={key} height={500}/>
                                <h2>{DevelopData[key].title}</h2>
                                <p>{DevelopData[key].description}</p>
                            </a>
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Develop;