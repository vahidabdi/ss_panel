import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import mutation from 'src/graphql/mutations/removeBanner.gql';
import query from 'src/graphql/queries/banners.gql';

@graphql(mutation)
class BannerItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeBanner = this.removeBanner.bind(this);
  }

  removeBanner() {
    this.props.mutate({
      variables: { BannerId: this.props.x.id },
      refetchQueries: [{ query }],
    });
  }
  render() {
    return (
      <div className={sass['card-c']}>
        <div className={sass['card-c__img-box']}>
          <img src={this.props.x.thumb} alt="panel" />
        </div>
        <div className={sass['card-c__hover']}>
          <button className={`${sass['card-c__icon']} ${sass['icon-edit']}`} />
          <button onClick={this.removeBanner} className={`${sass['card-c__icon']} ${sass['icon-delete']}`} />
        </div>
      </div>

    );
  }
}

export default BannerItem;
