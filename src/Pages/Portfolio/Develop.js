import React from "react";
import {Col, Container} from "reactstrap";
import DevelopData from "../../Data/DevelopData"

class Develop extends React.Component {
    render() {
        return (
            <Container className="d-flex row ml-auto mr-auto">
                {Object.keys(DevelopData).map(key => (
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center flex-column align-items-start">
                        <img className="img-coverphoto" src={DevelopData[key].portfolioImage}
                             alt={DevelopData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DevelopData[key].title}</h2><p>{DevelopData[key].description}</p>
                            <ul className="tags">{DevelopData[key].tags.map((value, index) => {
                                return <li className="tags" key={index}>{value}</li>
                            })}</ul>
                        </div>
                    </Col>
                ))}
            </Container>
        );
    }
}


export default Develop;