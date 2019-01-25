import React, {Component} from "react";
import * as d3 from "d3";

const data = [1, 2, 3, 4];
const label = ["Designer", "Developer", "Developer"];
const Slice = props => {
    let {pie} = props;

    let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length - 1));
        return <path d={arc(slice)} fill={sliceColor}><text label={label}/></path>;
    });
};


class SimplePieChart extends Component {

    render() {
        const height = 400;
        const width = 400;
        const label = ["Designer", "Developer", "Day Dreamer"];
        let pie = d3.pie()(data);

        return (
            <svg className="col-6" height={height} width={width}>
                <g><text>{label}</text></g>
                <g transform={`translate(${width / 2},${height / 2})`}>
                    <Slice pie={pie}/>
                </g>
            </svg>
        );
    }
}


export default SimplePieChart;