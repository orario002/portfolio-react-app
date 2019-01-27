import React from "react";
import {Col} from "reactstrap";
import ModalPortfolio from "../../Component/ModalPortfolio"
import WorkData from "../../Data/WorkData"

class Work extends React.Component {
    render() {
        return (
            <div className="row">
                {Object.keys(WorkData).map(key => (
                    <Col sm="12" md="6">
                        <div>
                            <a href="#">
                                <ModalPortfolio isOpen={this.props.isModalOpen} toggle={this.toggle}
                                />
                                <img src={WorkData[key].portfolioImage} alt={WorkData[key].name} key={key}/>
                            </a>
                        </div>
                    </Col>
                ))}
            </div>
        );
    }
}


export default Work;