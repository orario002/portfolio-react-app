import React from "react";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import data from "../../../Data/FormsManagerData";
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';

const next = "/portfolio/design/plugin";

class FormsManager extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="portfolio">
                <Banner title={data.banner.title} intro={data.banner.intro} img={data.banner.img}/>
                <Summary overview={data.summary.overview} time={data.summary.time} tools={data.summary.tools}
                         roles={data.summary.roles} teams={data.summary.teams}/>
                <ImageText imagePosition="left" src={data.process.src} alt={data.process.name}
                           title={data.process.title} description={data.process.description}/>
                <ImageText imagePosition="right" src={data.discovery.src} alt={data.discovery.name}
                           title={data.discovery.title} description={data.discovery.description}/>
                <ImageText imagePosition="left" src={data.research.src} alt={data.research.name}
                           title={data.research.title} description={data.research.description}/>
                <ImageText imagePosition="right" src={data.empathy.src} alt={data.empathy.name}
                           title={data.empathy.title} description={data.empathy.description}/>
                <ImageText imagePosition="left" src={data.journey.src} alt={data.journey.name}
                           title={data.journey.title} description={data.journey.description}/>
                <ImageText imagePosition="right" src={data.paperWireframe.src} alt={data.paperWireframe.name}
                           title={data.paperWireframe.title} description={data.paperWireframe.description}/>
                <ImageText imagePosition="left" src={data.wireframeFeatures.src} alt={data.wireframeFeatures.name}
                           title={data.wireframeFeatures.title}/>
                <ImageText imagePosition="right" src={data.wireframeSteps.src} alt={data.wireframeSteps.name}
                           description={data.wireframeFeatures.description}/>
                <ImageText imagePosition="left" src={data.style.src} alt={data.style.name} title={data.style.title}
                           description={data.style.description}/>
                <ImageText imagePosition="right" src={data.component.src} alt={data.component.name}
                           title={data.component.title} description={data.component.description}/>
                <Outcome title={data.outcome.title} description={data.outcome.description}
                         deliveries={data.outcome.deliveries} lesson={data.outcome.lesson}/>
                    <Link to={next} className="next-project">
                    <div><div>Next Project</div><div>Adobe Illustrator Plugin</div></div>
                    <div><FaArrowRight/></div>
                    </Link>
            </div>
        );
    }
}


export default FormsManager;