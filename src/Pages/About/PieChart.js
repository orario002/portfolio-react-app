import React, {Component} from "react";
import * as d3 from "d3";

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
        const height = 400;
        const width = 400;
        const label = [
            {name: "UI/UX Designer", color: "#cc1e56"},
            {name: "Front-End Developer", color: "#da5460"},
            {name: "Graphic Designer", color: "#e88267"},];
        let pie = d3.pie()(data);

        return (
            <div className="col-6">
                <g>
                    {label.map((label, index) => {
                            return (
                                <text style={{display: "inline-flex", alignItems: "center"}}>
                                    <div className="mr-2" style={{backgroundColor: label.color, width: "30px", height: "30px"}}></div>
                                    <p className="mr-2">{label.name}</p>
                                </text>
                            )
                        }
                    )}
                </g>
                <svg height={height} width={width}>
                    <g transform={`translate(${width / 2},${height / 2})`}>
                        <Slice pie={pie}/>
                    </g>
                </svg>
            </div>
        );
    }
}


export default PieChart;