import React, {Component} from "react";
import {Media, Row} from "reactstrap";
import Sandy from "../Assets/mockup/mockup-sandychiu-co-uk.png";
import Olivet from "../Assets/mockup/mockup-olivet.png";
import Wedding from "../Assets/mockup/mockup-sandyandstephen.png";
import Solo from "../Assets/mockup/mockup-solomeworld.png";

class Work extends Component {
    render() {
        return (
            <div>
                <Media list>
                    <Row>
                        <Media tag="li">
                            <Media body href="http://olivet.me">
                                <Media heading>
                                    Olivet.me
                                </Media>
                                <Media object src={Olivet} alt="Olivet image"/>
                            </Media>
                        </Media>

                        <Media tag="li">
                            <Media body href="#">
                                <Media heading>
                                    Sandychiu.co.uk
                                </Media>
                                <Media object src={Sandy} alt="Sandychiu.co.uk image"/>
                            </Media>
                        </Media>
                    </Row>

                    <Row>
                        <Media tag="li">
                            <Media body href="http://sandyandstephen.com">
                                <Media heading>
                                    Sandy and stephen
                                </Media>
                                <Media object src={Wedding} alt="Sandy and stephen image"/>
                            </Media>
                        </Media>

                        <Media tag="li">
                            <Media body href="http://cchiu02.wdd1516.bbkweb.org/wdd4-web-project/">
                                <Media heading>
                                    Solo me world
                                </Media>
                                <Media object src={Solo} alt="Solo me world image"/>
                            </Media>
                        </Media>
                    </Row>
                </Media>
            </div>
        );
    }
}

export default Work;