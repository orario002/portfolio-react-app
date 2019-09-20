import React from "react";
import {Col} from "reactstrap";
import GalleryData from "../../Data/GalleryData"



class Gallery extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(GalleryData).map(key => (
                    <Col xs="12" sm="6" md="4">
                        <p>{GalleryData[key].link}</p>
                        <div className="m-2">
                            <img src={GalleryData[key].portfolioImage} alt={GalleryData[key].name} key={key} />
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}

export default Gallery;