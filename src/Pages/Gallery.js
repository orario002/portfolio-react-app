import React from "react";
import {Col} from "reactstrap";
import Amis from "../Assets/drawing/drawing-amis.jpg";
import Bagel from "../Assets/drawing/drawing-bagel.jpg";
import Bike from "../Assets/drawing/drawing-bike.jpg";
import CabinCrew from "../Assets/drawing/drawing-cabin-crew.jpg";
import Cactus from "../Assets/drawing/drawing-cactus.jpg";


const JSON = {
    Amis: {
        name: 'amis',
        portfolioImage: `${Amis}`,
    },
    Bagel: {
        name:'bagel',
        portfolioImage: `${Bagel}`,
    },
    Bike: {
        name: 'bike',
        portfolioImage: `${Bike}`,
    },
    CabinCrew: {
        name: 'cabin crew',
        portfolioImage: `${CabinCrew}`,
    },
    Cactus: {
        name: 'cactus',
        portfolioImage: `${Cactus}`,
    },
};

class Gallery extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(JSON).map(key => (
                    <Col xs="12" sm="6" md="3">
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

export default Gallery;