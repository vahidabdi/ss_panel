import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import ServiceTypeMenu from 'src/components/serviceTypeMenu';
import FeatureItem from 'src/components/featureItem';
import query from 'src/graphql/queries/service_types.gql';
// import config from 'kit/config';

@graphql(query)
class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div>
              <ServiceTypeMenuItem key={data.serviceTypes.id} x={data.serviceTypes} />
            </div>
            <div className={sass.featuer}>
              <div className={sass.feature__box}>
                <FeatureItem service={{ name: 'hassab' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;

const ServiceTypeMenuItem = ({ x }) => (
  <li className={sass.nav__item}>{x.name}</li>
);
