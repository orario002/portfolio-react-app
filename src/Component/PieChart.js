import React, {Component} from "react";
import * as d3 from "d3";
import {Col} from "reactstrap";

const data = [1, 2, 3];
const Slice = props => {
    let {pie} = props;

    let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length - 1));
        return <path d={arc(slice)} fill={sliceColor}/>
    });
};


class PieChart extends Component {

    render() {
        const height = 300;
        const width = 200;
        const label = [
            {name: "UI/UX Designer", color: "#cc1e56"},
            {name: "Front-End Developer", color: "#da5460"},
            {name: "Graphic Designer", color: "#f4ac6f"},];
        let pie = d3.pie()(data);

        return (
            <Col sm="12" md="6">
                <g className="d-flex justify-content-center">
                    {label.map((label, index) => {
                            return (
                                <text style={{display: "inline-flex"}}>
                                    <div className="mr-2"
                                         style={{backgroundColor: label.color, width: "30px", height: "30px"}}></div>
                                    <p className="mr-2">{label.name}</p>
                                </text>
                            )
                        }
                    )}
                </g>
                <span className="d-flex justify-content-center align-items-center">
                <svg height={height} width={width}>
                    <g transform={`translate(${width / 2},${height / 2})`}>
                        <Slice pie={pie}/>
                    </g>
                </svg>
                </span>
            </Col>
        );
    }
}


export default PieChart;