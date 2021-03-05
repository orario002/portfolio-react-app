import React from "react";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import data from "../../../Data/SiteBuilderData";
import {Media} from 'reactstrap';
import {Link} from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';

const next = "/portfolio/design/formsmanager";

class SiteBuilder extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="portfolio">
                <Banner title={data.banner.title} intro={data.banner.intro} img={data.banner.img}/>
                <Summary className="summary container" overview={data.summary.overview} time={data.summary.time}
                         tools={data.summary.tools}
                         roles={data.summary.roles} teams={data.summary.teams}/>
                <ImageText imagePosition="left" src={data.process.src} alt={data.process.name}
                           title={data.process.title} description={data.process.description}/>
                <ImageText imagePosition="right" src={data.interview.src} alt={data.interview.name}
                           title={data.interview.title} description={data.interview.description}/>
                <ImageText imagePosition="left" src={data.user.src} alt={data.user.name} title={data.user.title}
                           description={data.user.description}/>
                <ImageText imagePosition="right" src={data.flow.src} alt={data.flow.name} title={data.flow.title}
                           description={data.flow.description}/>
                <ImageText imagePosition="left" src={data.wireframe.src} alt={data.wireframe.name}
                           title={data.wireframe.title} description={data.wireframe.description}/>
                <ImageText imagePosition="right" src={data.annotation.src} alt={data.annotation.name}
                           title={data.annotation.title} description={data.annotation.description}/>
                <ImageText imagePosition="left" src={data.theme.src} alt={data.theme.name} title={data.theme.title}
                           description={data.theme.description}/>
                <Media object alt={data.screens.name} src={data.screens.src} />
                <Outcome className="outcome container" title={data.outcome.title} description={data.outcome.description}
                         deliveries={data.outcome.deliveries} lesson={data.outcome.lesson}/>
                <Link to={next} className="next-project">
                    <div><div>Next Project</div><div>Digital Forms Manager</div></div>
                    <div><FaArrowRight/></div>
                </Link>
            </div>
        );
    }
}


export default SiteBuilder;