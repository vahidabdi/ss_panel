import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import BannerItem from 'src/components/bannerItem';
import BannerCreateItem from 'src/components/bannerCreateItem';
import banners from 'src/graphql/queries/banners.gql';
import mutation from 'src/graphql/mutations/banner.gql';

@graphql(banners)
@graphql(mutation)
class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ picture, serviceId }) {
    this.props.mutate({
      variables: { picture, serviceId },
      refetchQueries: [{ banners }],
    });
  }
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    return (
      <div className={`${sass.section} ${sass.banner} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div className={sass.flex}>
              <div className={sass.item_4}>
                {data.banners.map(st =>
                  <BannerItem key={st.id} x={st} />,
                )}
                {(data.banners.length < 6) ? (
                  <BannerCreateItem onSubmit={this.onSubmit} />
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
