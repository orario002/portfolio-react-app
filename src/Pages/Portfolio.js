import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


//Design projects
import Design from "./Portfolio/Design";
import FormManager from "./Portfolio/Design/FormManager";
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
                            <Route exact path="/portfolio/design/FormManager" component={FormManager}/>
                            <Route exact path="/portfolio/design/Plugin" component={Plugin}/>
                            <Route exact path="/portfolio/design/SiteBuilder" component={SiteBuilder}/>
                            <Route path="/portfolio/development/" component={Dev}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;