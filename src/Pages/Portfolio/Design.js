import React from "react";
import {Col} from "reactstrap";
import ModalPortfolio from "../../Component/ModalPortfolio"
import DesignData from "../../Data/DesignData"

class Design extends React.Component {
    render() {
        return (
            <div className="row container">
                {Object.keys(DesignData).map(key => (
                    <Col sm="12" md="4" className="d-flex justify-content-center flex-column align-items-start">
                        <img className="img-coverphoto" src={DesignData[key].portfolioImage}
                             alt={DesignData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DesignData[key].title}</h2><p>{DesignData[key].description}</p>
                            <ul className="tags">{DesignData[key].tags.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}</ul>
                        </div>
                        <button className="btn btn-primary"><a href={DesignData[key].link}>Read
                            more</a></button>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Design;