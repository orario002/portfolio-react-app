import React from "react";
import {Col} from "reactstrap";
import DevelopData from "../../Data/DevelopData"

class Develop extends React.Component {
    render() {
        return (
            <div className="row container">
                {Object.keys(DevelopData).map(key => (
                    <Col sm="12" md="4" className="d-flex justify-content-center flex-column align-items-start">
                        <img className="img-coverphoto" src={DevelopData[key].portfolioImage}
                             alt={DevelopData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DevelopData[key].title}</h2><p>{DevelopData[key].description}</p>
                            <ul className="tags">{DevelopData[key].tags.map((value, index) => {
                                return <li className="tags" key={index}>{value}</li>
                            })}</ul>
                        </div>
                        {/*<button className="btn btn-primary"><a href={DevelopData[key].link}>Read*/}
                            {/*more</a></button>*/}
                    </Col>
                ))}
            </div>
        );
    }
}


export default Develop;