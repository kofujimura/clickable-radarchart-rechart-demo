import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Tooltip,
  PolarAngleAxis
} from "recharts";

const areas = {
  input: 30,
  "1": [0, 29],
  "2": [30, 59],
  "3": [60, 89],
  "4": [90, 119],
  "5": [120, 150]
};

const subjects = {
  感動度: 0,
  スープ: 1,
  麺: 2,
  トッピング: 3,
  お店の雰囲気: 4,
  提供スピード: 5
};

const data = Object.keys(subjects).map((x) => {
  const axis = Object.assign({ subject: x }, areas);
  return axis;
});

const initialState = { data };

let currentScore = 0;
let currentLabel = "";

const CustomTooltip = ({ active, payload, label }) => {
  currentLabel = label;
  if (active && payload && payload.length) {
    return <div>{`${label} : ${currentScore}`}</div>;
  }
  return null;
};

export default class Demo extends Component<any, any> {
  static displayName = "RadarChartDemo";

  constructor(props: any) {
    super(props);
    this.state = initialState;
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    initialState.data[subjects[currentLabel]].input = 30 * currentScore;
    this.setState({ initialState });
  }

  handleMouseEnter(props: any) {
    currentScore = parseInt(props.dataKey, 10);
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>ラーメンの評価を入力してください</h1>
        <RadarChart
          cx={250}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis dataKey="subject" />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="input"
            dataKey="input"
            stroke="#ff84d8"
            fill="#ff84d8"
            fillOpacity={0.7}
          />
          <Radar
            name="E"
            dataKey="1"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            onMouseEnter={this.handleMouseEnter}
            onClick={this.handleOnClick}
          />
          <Radar
            name="D"
            dataKey="2"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            onMouseEnter={this.handleMouseEnter}
            onClick={this.handleOnClick}
          />
          <Radar
            name="C"
            dataKey="3"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            onMouseEnter={this.handleMouseEnter}
            onClick={this.handleOnClick}
          />
          <Radar
            name="B"
            dataKey="4"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            onMouseEnter={this.handleMouseEnter}
            onClick={this.handleOnClick}
          />
          <Radar
            name="A"
            dataKey="5"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            onMouseEnter={this.handleMouseEnter}
            onClick={this.handleOnClick}
          />
        </RadarChart>
      </div>
    );
  }
}
