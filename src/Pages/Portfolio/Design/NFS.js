import React from "react";
import {Col, Row} from "reactstrap";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import NfsData from "../../../Data/NfsData";


class NFS extends React.Component {
    render() {
        return (
            <Row className="container">
                <Banner title={NfsData.banner.title} intro={NfsData.banner.intro} img={NfsData.banner.img}/>
                <Summary overview={NfsData.summary.overview} time={NfsData.summary.time} tools={NfsData.summary.tools}
                         roles={NfsData.summary.roles} teams={NfsData.summary.teams}/>
                <ImageText imagePosition="left" src={NfsData.process.src} alt={NfsData.process.name} title={NfsData.process.title} description={NfsData.process.description}/>
                <ImageText imagePosition="right" src={NfsData.discovery.src} alt={NfsData.discovery.name} title={NfsData.discovery.title} description={NfsData.discovery.description}/>
                <ImageText imagePosition="left" src={NfsData.research.src} alt={NfsData.research.name} title={NfsData.research.title} description={NfsData.research.description}/>
                <ImageText imagePosition="right" src={NfsData.empathy.src} alt={NfsData.empathy.name} title={NfsData.empathy.title} description={NfsData.empathy.description}/>
                <ImageText imagePosition="left" src={NfsData.journey.src} alt={NfsData.journey.name} title={NfsData.journey.title} description={NfsData.journey.description}/>
                <ImageText imagePosition="right" src={NfsData.style.src} alt={NfsData.style.name} title={NfsData.style.title} description={NfsData.style.description}/>
                <ImageText imagePosition="left" src={NfsData.component.src} alt={NfsData.component.name} title={NfsData.component.title} description={NfsData.component.description}/>
                <Outcome title={NfsData.outcome.title} description={NfsData.outcome.description} deliveries={NfsData.outcome.deliveries} lesson={NfsData.outcome.lesson}/>
                <button className="btn btn-primary"><a href="/portfolio/design/adobe">Next</a></button>
            </Row>
        );
    }
}


export default NFS;