import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import ServiceParticulars from 'src/components/serviceParticulars';
import latestServices from 'src/graphql/queries/latest_services.gql';

/* eslint no-unused-vars: ["error", { "args": "none" }] */

@graphql(latestServices, { options: props => ({ variables: {
  typeId: props.typeId,
  operatorId: props.operatorId,
  page: parseInt(props.match.params.page_id, 10),
} }) })
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      typeId: null,
      operatorId: null,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentWillMount() {
    this.setState({ page: parseInt(this.props.match.params.page_id, 10) });
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
    this.props.history.push(`/dashboard/services/${this.state.page + 1}`);
  }
  prevPage = () => {
    if (!(this.state.page === 1)) {
      this.props.history.push(`/dashboard/services/${this.state.page - 1}`);
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
                  <button onClick={this.nextPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__next}`}>بعدی</button>
                  <button onClick={this.prevPage} className={`${sass['pageLanding__box-item']} ${sass.pageLanding__prev}`}>قبلی</button>
                  <div className={sass['pageLanding__number-box']}>
                    <span>صفحه</span>
                    <span className={sass['pageLanding__number-item']}>{this.state.page}</span>
                  </div>
                </div>

              </div>
              <nav className={`${sass.nav} ${sass.item_8}`}>
                <ul>
                  <li className={`${sass.nav__item} ${!this.state.typeId && !this.state.operatorId ? 'activeMenu' : ''}`}>
                    <button
                      onClick={e => this.setState({ operatorId: null, typeId: null, page: 1 })}>
                   همه
                    </button>
                  </li>
                  <li className={`${sass.nav__item} ${sass.dropdown}`}>
              اپراتور
                    <ul className={sass['dropdown__item-box']}>
                      {data.operators.map(st => (
                        <li key={`operator_${st.id}`} className={sass.dropdown__item}>
                          <button
                            onClick={
                              e => this.setState({ operatorId: st.id, page: 1 })
                            }>
                            {st.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {data.serviceTypes.map(st => (
                    <li key={`serviceType_${st.id}`} className={`${sass.nav__item} ${this.state.typeId === st.id ? 'activeMenu' : ''}`}>
                      <button
                        onClick={e => this.setState({ typeId: st.id, page: 1 })}>
                        {st.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

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
                  {data.latestServices.map(st =>
                    <ServiceParticulars key={st.id} x={st} />,
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

export default Services;
