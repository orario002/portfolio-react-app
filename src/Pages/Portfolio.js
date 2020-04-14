import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


//Design projects
import Design from "./Portfolio/Design";
import FormsManager from "./Portfolio/Design/FormsManager";
import Plugin from "./Portfolio/Design/Plugin";
import SiteBuilder from "./Portfolio/Design/SiteBuilder";

//Dev projects
import Dev from "./Portfolio/Dev"


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
                            <NavLink activeClassName="selected" to="/portfolio/development/">Development</NavLink>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            <Route exact path="/portfolio/design/" component={Design}/>
                            <Route path="/portfolio/design/formsmanager" component={FormsManager}/>
                            <Route path="/portfolio/design/plugin" component={Plugin}/>
                            <Route path="/portfolio/design/sitebuilder" component={SiteBuilder}/>
                            <Route exact path="/portfolio/development/" component={Dev}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;