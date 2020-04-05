import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Work from "./Portfolio/Work"
import Develop from "./Portfolio/Develop"
// import Photography from "./Portfolio/Photography"

class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="m-4 sub-nav">
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/work/">Design</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/develop/">Development</NavLink>
                        </li>
                        {/*<li>*/}
                            {/*<NavLink activeClassName="selected" to="/portfolio/photography/">Photography</NavLink>*/}
                        {/*</li>*/}
                    </ul>
                    <main>
                        <Switch>
                            <Route exact path="/portfolio/work/" component={Work}/>
                            <Route path="/portfolio/develop/" component={Develop}/>
                            {/*<Route path="/portfolio/photography/" component={Photography}/>*/}
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;