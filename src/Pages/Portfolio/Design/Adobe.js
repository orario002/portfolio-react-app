import React from "react";
import {Col} from "reactstrap";

class Adobe extends React.Component {
    render() {
        return (
            <div className="row container">
                <h1>Adobe B2B</h1>
                <button className="btn btn-primary"><a href="/portfolio/design/nfs">Previous</a></button>
                <button className="btn btn-primary"><a href="/portfolio/design/puma">Next</a></button>
            </div>
        );
    }
}


export default Adobe;