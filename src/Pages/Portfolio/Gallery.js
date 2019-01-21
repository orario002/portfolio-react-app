import React from "react";
import {Col} from "reactstrap";
import Amis from "../../Assets/drawing/drawing-amis.jpg";
import Bagel from "../../Assets/drawing/drawing-bagel.jpg";
import Bike from "../../Assets/drawing/drawing-bike.jpg";
import CabinCrew from "../../Assets/drawing/drawing-cabin-crew.jpg";
import Cactus from "../../Assets/drawing/drawing-cactus.jpg";
import Koala from "../../Assets/drawing/drawing-koala.jpg";
import TaiwaneseFood from "../../Assets/drawing/drawing-taiwanese-food.jpg";
import Suitcase from "../../Assets/drawing/sketch-what_is_in_my_suitcase_draft.jpg";
import Workbag from "../../Assets/drawing/sketch-what_is_in_my_workbag_draft.jpg";


const JSON = {
    Cactus: {
        name: 'cactus',
        portfolioImage: `${Cactus}`,
    },
    Koala: {
        name: 'koala',
        portfolioImage: `${Koala}`,
    },
    Bike: {
        name: 'bike',
        portfolioImage: `${Bike}`,
    },
    Amis: {
        name: 'amis',
        portfolioImage: `${Amis}`,
    },
    Bagel: {
        name:'bagel',
        portfolioImage: `${Bagel}`,
    },
    CabinCrew: {
        name: 'cabin crew',
        portfolioImage: `${CabinCrew}`,
    },
    TaiwaneseFood: {
        name: 'taiwanese food',
        portfolioImage: `${TaiwaneseFood}`,
    },
    Suitcase: {
        name: 'suitcase',
        portfolioImage: `${Suitcase}`,
    },
    Workbag: {
        name: 'workbag',
        portfolioImage: `${Workbag}`,
    },
};

class Gallery extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(JSON).map(key => (
                    <Col xs="12" sm="6" md="4">
                        <p>{JSON[key].link}</p>
                        <div className="m-2">
                            <img src={JSON[key].portfolioImage} alt={JSON[key].name} key={key} />
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}

export default Gallery;