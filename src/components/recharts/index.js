import React from 'react';
import sass from 'src/styles/index.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'پیامکی', views: 1000, nameEng: 'dasdsa' },
];

const SimpleLineChart = () => (
  <div className={sass.box_rechartd}>
    <h3 className={sass.section__title}>میزان بازدید هر دسته در ماه</h3>
    <div className={sass['view-service']}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </div>
);

export default SimpleLineChart;
