import React, {Component} from "react";
import {Col} from "reactstrap";

function BarGroup(props) {
    let barPadding = 5;
    let barColour = '#999';
    let widthScale = d => d * 4.5;

    let width = widthScale(props.d.value);
    let yMid = props.barHeight * 0.5;

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">{props.d.name}</text>
        <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour}/>
        <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle">{props.d.value}</text>
    </g>
}

class BarChart extends Component {
    state = {
        data: [
            {name: 'Photoshop', value: 70},
            {name: 'Adobe XD', value: 80},
            {name: 'Sketch', value: 60},
            {name: 'Illustrator', value: 40},
            {name: 'Zeplin', value: 30},
            {name: 'InDesign', value: 50},
        ]
    };

    render() {
        let barHeight = 45;

        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight}/>
        </g>);

        return <Col sm="12" md="6">
            <span className="d-flex justify-content-center"><svg width="500" height="450">
            <g className="container">
                <text className="title text-center" x="10" y="20">Design Tools</text>
                <g className="chart" transform="translate(100,60)">
                    {barGroups}
                </g>
            </g>
            </svg></span>
        </Col>
    }
}


export default BarChart;