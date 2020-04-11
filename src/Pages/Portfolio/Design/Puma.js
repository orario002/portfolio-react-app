import React from "react";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import data from "../../../Data/PumaData";
import {Button} from 'reactstrap';

const prev = "/portfolio/design/adobe";
const next = "/portfolio/design/nfs";

class Puma extends React.Component {
    render() {
        return (
            <div>
                <h1>Puma</h1>
                <Banner title={data.banner.title} intro={data.banner.intro} img={data.banner.img}/>
                <div className="d-flex justify-content-between">
                    <Button color="primary"><a href={prev}>Previous</a></Button>
                    <Button color="primary"><a href={next}>Next</a></Button>
                </div>
                <Summary overview={data.summary.overview} time={data.summary.time} tools={data.summary.tools}
                         roles={data.summary.roles} teams={data.summary.teams}/>
                <ImageText imagePosition="left" src={data.process.src} alt={data.process.name}
                           title={data.process.title} description={data.process.description}/>
                <ImageText imagePosition="right" src={data.persona.src} alt={data.persona.name}
                           title={data.persona.title} description={data.persona.description}/>
                <ImageText imagePosition="left" src={data.flow.src} alt={data.flow.name} title={data.flow.title}
                           description={data.flow.description}/>
                <ImageText imagePosition="right" src={data.wireframe.src} alt={data.wireframe.name}
                           title={data.wireframe.title} description={data.wireframe.description}/>
                <ImageText imagePosition="left" src={data.prototype.src} alt={data.prototype.name}
                           title={data.prototype.title} description={data.prototype.description}/>
                <ImageText imagePosition="right" src={data.annotation.src} alt={data.annotation.name}
                           title={data.annotation.title} description={data.annotation.description}/>
                <Outcome title={data.outcome.title} description={data.outcome.description}
                         deliveries={data.outcome.deliveries} lesson={data.outcome.lesson}/>
            </div>
        );
    }
}


export default Puma;
