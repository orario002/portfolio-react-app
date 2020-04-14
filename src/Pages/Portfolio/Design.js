import React from "react";
import {Col, Container} from "reactstrap";
import {Link} from "react-router-dom";
import DesignData from "../../Data/DesignData"

class Design extends React.Component {
    render() {
        return (
            <Container className="d-flex row ml-auto mr-auto">
                {Object.keys(DesignData).map(key => (
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center flex-column align-items-start">
                        <img className="img-coverphoto"
                             src={DesignData[key].portfolioImage}
                             alt={DesignData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DesignData[key].title}</h2><p>{DesignData[key].description}</p>
                            <ul className="tags">{DesignData[key].tags.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}</ul>
                        </div>
                        <Link to={DesignData[key].link} className="btn btn-primary">Read
                            more</Link>
                    </Col>
                ))}
            </Container>
        );
    }
}


export default Design;