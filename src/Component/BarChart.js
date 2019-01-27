import React, {Component} from "react";
import {Col} from "reactstrap";

function BarGroup(props) {
    let barPadding = 5;
    let barColour = '#999';
    let widthScale = d => d * 5;

    let width = widthScale(props.d.value);
    let yMid = props.barHeight * 0.5;

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
        <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
        <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
}

class BarChart extends Component {
    state = {
        data: [
            { name: 'Photoshop', value: 60 },
            { name: 'Adobe XD', value: 70 },
            { name: 'Sketch', value: 50 },
            { name: 'Illustrator', value: 35 },
            { name: 'Zeplin', value: 30 },
            { name: 'InDesign', value: 25 }
        ]
    };

    render() {
        let barHeight = 50;

        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight} />
        </g>);

        return <Col sm="12" md="6" ><svg width="800" height="300">
            <g className="container">
                <text className="title" x="10" y="30">Design Tools</text>
                <g className="chart" transform="translate(100,60)">
                    {barGroups}
                </g>
            </g>
        </svg></Col>
    }
}


export default BarChart;