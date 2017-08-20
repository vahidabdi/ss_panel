import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import latestServices from 'src/graphql/queries/latest_services.gql';
import LatestServicesItem from 'src/components/latestServicesItem';

@graphql(latestServices)
class LatestServices extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div>
        <h3 className={sass.section__title}>آخرین سرویس های اضافه شده</h3>
        <ul className={sass['card-a']}>
          {data.latestServices.map(st =>
            <LatestServicesItem key={st.id} x={st} />,
          )}
        </ul>
      </div>
    );
  }
}

export default LatestServices;
