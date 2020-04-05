import React from "react";
import {Col} from "reactstrap";
import ModalPortfolio from "../../Component/ModalPortfolio"
import DesignData from "../../Data/DesignData"

class Design extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(DesignData).map(key => (
                    <Col sm="12" md="4">
                        <div>
                            <a target="_blank" href={DesignData[key].link}>
                                <img className="img-coverphoto" src={DesignData[key].portfolioImage} alt={DesignData[key].name} key={key} height={500}/>
                                <h2>{DesignData[key].title}</h2>
                                <p>{DesignData[key].description}</p>
                            </a>
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Design;