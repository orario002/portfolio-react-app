import React from "react";
import {Col, Modal} from "reactstrap";
import PhotographyData from "../../Data/PhotographyData"

class Photography extends React.Component {
    state = {isOpen: false};

    handleShowDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
        console.log('cliked');
    };

    render() {
        return (
            <div className="row">
                {Object.keys(PhotographyData).map(key => (
                    <Col xs="12" sm="6" md="3">
                        <div className="m-2">
                            <img src={PhotographyData[key].portfolioImage} alt={PhotographyData[key].name} key={key}
                                 onClick={this.handleShowDialog}/>
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}



export default Photography;