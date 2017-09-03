import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import FeatureItem from 'src/components/featureItem';
import query from 'src/graphql/queries/service_types.gql';
// import config from 'kit/config';

@graphql(query)
class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ serviceType: nextProps.data.serviceTypes[0].id });
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
              {data.serviceTypes.map(st => (
                <li className={`${sass.nav__item} ${this.state.serviceType === st.id ? 'activeMenu' : ''}`}>
                  <button
                    key={st.id}
                    onClick={ e => this.setState({ serviceType: st.id })}>
                    {st.name}
                  </button>
                </li>
              ))}
            </div>
            <div className={sass.featuer}>
              <div className={sass.feature__box}>
                <FeatureItem serviceTypeId={this.state.serviceType} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
