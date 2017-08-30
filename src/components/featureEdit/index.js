import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceTypeMenu from 'src/components/serviceTypeMenu';
import FeatureItem from 'src/components/featureItem';
import { graphql } from 'react-apollo';
// import config from 'kit/config';
import guery from 'src/graphql/queries/featuredServices.gql';

@graphql(guery, { options: props => ({ variables: { ID: props.match.params.type_id } }) })
class FeatureEdit extends React.Component {
  render() {
    const { type_id } = this.props.match.params;
    return (
      <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div>
              <ServiceTypeMenu />
            </div>
            <div className={sass.featuer}>
              <div className={sass.feature__box}>
                <FeatureItem service={{ name: { type_id } }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureEdit;
