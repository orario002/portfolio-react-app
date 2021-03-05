import React from "react";
import {Col, Container} from "reactstrap";
import DevData from "../../Data/DevData"

class Dev extends React.Component {
    render() {
        return (
            <Container className="d-flex row ml-auto mr-auto">
                {Object.keys(DevData).map(key => (
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center flex-column align-items-start">
                        <img className="img-coverphoto" src={DevData[key].portfolioImage}
                             alt={DevData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DevData[key].title}</h2><p>{DevData[key].description}</p>
                            <ul className="tags">{DevData[key].tags.map((value, index) => {
                                return <li className="tags" key={index}>{value}</li>
                            })}</ul>
                        </div>
                    </Col>
                ))}
            </Container>
        );
    }
}


export default Dev;