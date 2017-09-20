import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/queries/reports.gql';
import sass from 'src/styles/index.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

@graphql(query, { options: props => ({ variables: {
  typeId: props.type_id,
} }) })
class Charts extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    const datax = data.reports.map(x => (
      { name: x.reportDate, "بازدید": x.views }
    ));

    return (
      <div className={sass.box_rechartd}>
        <h3 className={sass.section__title}>میزان بازدید هر دسته در ماه</h3>
        <div className={sass['view-service']}>
          <LineChart
            width={600}
            height={300}
            data={datax}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="بازدید" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Charts;
