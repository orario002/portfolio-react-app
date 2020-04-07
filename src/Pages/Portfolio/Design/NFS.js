import React from "react";
import {Col, Row} from "reactstrap";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import NfsData from "../../../Data/NfsData"


class NFS extends React.Component {
    render() {
        return (
            <Row className="container">
                <Banner title={NfsData.hero.title} intro={NfsData.hero.intro} img={NfsData.hero.img}/>
                <Summary overview={NfsData.summary.overview} time={NfsData.summary.time} tools={NfsData.summary.tools} roles={NfsData.summary.roles} teams={NfsData.summary.teams}/>
                <button className="btn btn-primary"><a href="/portfolio/design/adobe">Next</a></button>
            </Row>
        );
    }
}


export default NFS;