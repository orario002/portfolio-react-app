import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Design from "./Portfolio/Design"
import Develop from "./Portfolio/Develop"

class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="m-4 pb-2 sub-nav">
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/design/">Design</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/develop/">Development</NavLink>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            <Route exact path="/portfolio/design/" component={Design}/>
                            <Route path="/portfolio/develop/" component={Develop}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;