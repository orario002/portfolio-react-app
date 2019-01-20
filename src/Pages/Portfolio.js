import React, {Component} from "react";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Work from "./Work"
import Gallery from "./Gallery"

class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/portfolio/work/">Work</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/gallery/">Gallery</Link>
                        </li>
                    </ul>
                    <main>
                        <Route path="/portfolio/work/" component={Work}/>
                        <Route path="/portfolio/gallery/" component={Gallery}/>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;