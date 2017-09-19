import React from 'react';
import sass from 'src/styles/index.scss';
import { Tooltip, Area, AreaChart, linearGradient, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Page A', 'پیامکی': 1000, pv: 2400, amt: 2400 },
  { name: 'Page B', 'پیامکی': 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', 'پیامکی': 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', 'پیامکی': 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', 'پیامکی': 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', 'پیامکی': 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', 'پیامکی': 3490, pv: 4300, amt: 2100 },
];
const SimpleLineChart = () => (
  <div className={sass.box_rechartd}>
    <h3 className={sass.section__title}>میزان بازدید هر دسته در ماه</h3>
    <div className={sass['view-service']}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="cc" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#11ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8fca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area className={sass.area} type="monotone" dataKey="پیامکی" stroke="#8884d8" fillOpacity={1} fill="url(#cc')" />
        <Area className={sass.area} type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        <Area className={sass.area} type="monotone" dataKey="amt" stroke="#f1ca9d" fillOpacity={1} fill="url(#colorAmt)" />
      </AreaChart>
    </div>
  </div>
);

export default SimpleLineChart;
