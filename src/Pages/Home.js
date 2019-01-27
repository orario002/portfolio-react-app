import React, {Component} from "react";

class Home extends Component {
    componentDidMount() {
        document.body.classList.add("home");
    }

    componentWillUnmount() {
        document.body.classList.remove("home");
    }

    render() {
        return (
            <div>
                <h1>
                    <div>Sandy Chiu</div>
                    <div>UI Designer and Developer</div></h1>
            </div>
        );
    }
}

export default Home;