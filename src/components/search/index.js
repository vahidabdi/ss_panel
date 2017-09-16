import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import ServiceParticulars from 'src/components/serviceParticulars';
import search from 'src/graphql/queries/search.gql';

/* eslint no-unused-vars: ["error", { "args": "none" }] */


@graphql(search, { options: props => ({ variables: { search: props.match.params.search } }) })
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      page: 1,
      typeId: null,
      operatorId: null,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }


  componentWillUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      nextProps.data.refetch({
        typeId: nextState.typeId,
        operatorId: nextState.operatorId,
        page: nextState.page,
      });
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }
  prevPage = () => {
    if (!(this.state.page === 1)) {
      this.setState({ page: this.state.page - 1 });
    }
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    return (
      <div className={`${sass.section} ${sass.services} ${sass.nooverflow} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div className={`${sass.flex}  ${sass.flex_baseline}`}>
              <div className={`${sass.pageLanding} ${sass.item_4}`}>
                <div>
                  <button className={`${sass['pageLanding__box-item']} ${sass['pageLanding__next-d']}`} />
                  <button onClick={this.nextPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__next}`} />
                  <button onClick={this.prevPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__prev}`} />
                  <button className={`${sass['pageLanding__box-item']} ${sass['pageLanding__prev-d']}`} />
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
                    <th>شناسه</th>
                    <th>نام سرویس</th>
                    <th>میزان بازدید</th>
                    <th>زمان ایجاد</th>
                    <th>تاریخ انقضاء</th>
                    <th>حذف/ویرایش</th>
                    <th>فیچر</th>
                  </tr>
                </thead>
                <tbody>
                  {(data.search.length === 0) ? <span>سرویسی یافت نشد </span> :
                    (data.search.map(st =>
                      <ServiceParticulars key={st.id} x={st} />,
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={sass.pageLanding__bottom}>
            <button className={`${sass['pageLanding__box-item']} ${sass['pageLanding__next-d']}`} />
            <button onClick={this.nextPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__next}`} />
            <button onClick={this.prevPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__prev}`} />
            <button className={`${sass['pageLanding__box-item']} ${sass['pageLanding__prev-d']}`} />
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

export default Services;
