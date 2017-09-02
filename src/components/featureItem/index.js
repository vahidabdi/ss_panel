import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/queries/featuredServices.gql';
import sass from 'src/styles/index.scss';
import config from 'kit/config';

@graphql(query, { options: props => ({ variables: { TypeId: props.serviceTypeId } }) })
class featureItem extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div >
        {data.featuredServices.map(fs => (
          <div key={fs.id} className={sass.feature__item}>
            <div className={sass.feature__img}>
              <img src={`${config.graphQLEndpoint}/${fs.thumb}`} alt={fs.name} />
            </div>
            <h2 className={sass.feature__name}>
              {fs.name}
            </h2>
            <button className={`${sass.feature__icon} ${sass['icon-delete']}`} />
            <button className={`${sass.feature__icon} ${sass['icon-edit']}`} />
          </div>
        ))}
      </div>
    );
  }
}

export default featureItem;
