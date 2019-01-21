import React from "react";
import {Col} from "reactstrap";
import BlackGull from "../../Assets/photography/photo-black-gull.jpg";
import Book1 from "../../Assets/photography/photo-book1.jpg";
import Book2 from "../../Assets/photography/photo-book2.jpg";
import Chinatown from "../../Assets/photography/photo-chinatown.jpg";
import Costa from "../../Assets/photography/photo-costa.jpg";
import Icecream from "../../Assets/photography/photo-icecream.jpg";
import Phoenix from "../../Assets/photography/photo-phoenix.jpg";
import Pub1 from "../../Assets/photography/photo-pub1.jpg";
import Pub2 from "../../Assets/photography/photo-pub2.jpg";
import Pub3 from "../../Assets/photography/photo-pub3.jpg";
import Sandwich from "../../Assets/photography/photo-sandwich.jpg";
import Alan from "../../Assets/photography/photo-alan.jpg";

const JSON = {
    BlackGull: {
        name: 'black gull',
        portfolioImage: `${BlackGull}`,
    },
    Book1: {
        name: 'book1',
        portfolioImage: `${Book1}`,
    },
    Book2: {
        name: 'book2',
        portfolioImage: `${Book2}`,
    },
    Chinatown: {
        name: 'chinatown',
        portfolioImage: `${Chinatown}`,
    },
    Costa: {
        name: 'costa',
        portfolioImage: `${Costa}`,
    },
    Icecream: {
        name: 'ice-cream',
        portfolioImage: `${Icecream}`,
    },
    Phoenix: {
        name: 'phoenix',
        portfolioImage: `${Phoenix}`,
    },
    Pub1: {
        name: 'pub1',
        portfolioImage: `${Pub1}`,
    },
    Pub2: {
        name: 'pub2',
        portfolioImage: `${Pub2}`,
    },
    Pub3: {
        name: 'pub3',
        portfolioImage: `${Pub3}`,
    },
    Sandwich: {
        name: 'sandwich',
        portfolioImage: `${Sandwich}`,
    },
    Alan: {
        name: 'alan',
        portfolioImage: `${Alan}`,
    }
};

class Photography extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(JSON).map(key => (
                    <Col xs="12" sm="6" md="3">
                        <div className="m-2">
                            <img src={JSON[key].portfolioImage} alt={JSON[key].name} key={key} />
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Photography;