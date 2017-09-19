import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import CommentsLatest from 'src/components/commentLatest';
import query from 'src/graphql/queries/comments.gql';

/* eslint no-unused-vars: ["error", { "args": "none" }] */

// @graphql(query, { options: props => ({ variables: {
//   typeId: props.typeId, operatorId: props.operatorId, page: props.page } }) })

@graphql(query, { options: props => ({ variables: {
  page: parseInt(props.match.params.page_id, 10),
} }) })
class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentWillMount() {
    this.setState({ page: parseInt(this.props.match.params.page_id, 10) });
  }

  nextPage = () => {
    this.props.history.push(`/dashboard/comments/${this.state.page + 1}`);
  }
  prevPage = () => {
    if (!(this.state.page === 1)) {
      this.props.history.push(`/dashboard/comments/${this.state.page - 1}`);
    }
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    return (
      <div className={`${sass.section} ${sass.comments} ${sass.nooverflow} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div className={`${sass.flex}  ${sass.flex_baseline}`}>
              <div className={`${sass.pageLanding} ${sass.item_4}`}>
                <div>
                  <button onClick={this.nextPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__next}`}>بعدی</button>
                  <button onClick={this.prevPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__prev}`}>قبلی</button>
                  <div className={sass['pageLanding__number-box']}>
                    <span>صفحه</span>
                    <span className={sass['pageLanding__number-item']}>{this.state.page}</span>
                  </div>
                </div>

              </div>

            </div>
            <div className={sass.table__box}>
              <table className={sass.table}>
                <thead>
                  <tr className={sass.table__head}>
                    <th>شناسه </th>
                    <th>نام سرویس </th>
                    <th> نام کاربر</th>
                    <th>متن نظر</th>
                    <th>تایید</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comments.map(st =>
                    <CommentsLatest key={st.id} x={st} />,
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={sass.pageLanding__bottom}>
            <button onClick={this.nextPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__next}`}>بعدی</button>
            <button onClick={this.prevPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__prev}`}>قبلی</button>
            <div className={sass['pageLanding__number-box']}>
              <span>صفحه</span>
              <span className={sass['pageLanding__number-item']}>{this.state.page}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
