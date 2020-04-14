import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


//Design projects
import Design from "./Portfolio/Design";
import FormManager from "./Portfolio/Design/FormManager";
import Plugin from "./Portfolio/Design/Plugin";
import SiteBuilder from "./Portfolio/Design/SiteBuilder";

//Develop projects
import Develop from "./Portfolio/Develop"


class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="m-4 pb-2 sub-nav">
                        <li className="mr-3">
                            <NavLink activeClassName="selected" to="/portfolio/design/">Design</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/develop/">Development</NavLink>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            <Route exact path="/portfolio/design/" component={Design}/>
                            <Route exact path="/portfolio/design/NFS" component={FormManager}/>
                            <Route exact path="/portfolio/design/Puma" component={Plugin}/>
                            <Route exact path="/portfolio/design/Adobe" component={SiteBuilder}/>
                            <Route path="/portfolio/develop/" component={Develop}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;