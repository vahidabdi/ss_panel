import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/queries/featuredServices.gql';
import mutation from 'src/graphql/mutations/updateService.gql';
import sass from 'src/styles/index.scss';
import { Link } from 'react-router-dom';

@graphql(mutation)
@graphql(query, { options: props => ({ variables: { TypeId: props.serviceTypeId } }) })
class featureItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeFeature = this.removeFeature.bind(this);
  }

  removeFeature(serviceId) {
    this.props.mutate({
      variables: {
        id: serviceId,
        isFeatured: false,
      },
      refetchQueries: [{ query }],
    });
  }
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
              <img src={fs.thumb1x} alt={fs.name} />
            </div>
            <h2 className={sass.feature__name}>
              {fs.name}
            </h2>
            <button onClick={e => this.removeFeature(fs.id)} className={`${sass.feature__icon} ${sass['icon-delete']}`} />
            <Link to={`/dashboard/service/${fs.id}`}>  <span className={`${sass.feature__icon} ${sass['icon-edit']}`} /></Link>
          </div>
        ))}
      </div>
    );
  }
}

export default featureItem;
