import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import ServiceParticulars from 'src/components/serviceParticulars';
import latestServices from 'src/graphql/queries/latest_services.gql';

/* eslint no-unused-vars: ["error", { "args": "none" }] */

@graphql(latestServices, { options: props => ({ variables: {
  typeId: props.typeId, operatorId: props.operatorId } }) })
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: null,
      operatorId: null,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      nextProps.data.refetch({
        typeId: nextState.typeId,
        operatorId: nextState.operatorId,
      });
    }
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div className={`${sass.section} ${sass.services} ${sass.nooverflow} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div>
              <nav className={sass.nav}>
                <ul>
                  <li className={`${sass.nav__item} ${!this.state.typeId && !this.state.operatorId ? 'activeMenu' : ''}`}>
                    <button
                      onClick={e => this.setState({ operatorId: null, typeId: null })}>
                   همه
                    </button>
                  </li>
                  <li className={`${sass.nav__item} ${sass.dropdown}`}>
              اپراتور
                    <ul className={sass['dropdown__item-box']}>
                      {data.operators.map(st => (
                        <li key={`operator_${st.id}`} className={sass.dropdown__item}>
                          <button
                            onClick={e => this.setState({ operatorId: st.id, typeId: null })}>
                            {st.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {data.serviceTypes.map(st => (
                    <li key={`serviceType_${st.id}`} className={`${sass.nav__item} ${this.state.typeId === st.id ? 'activeMenu' : ''}`}>
                      <button
                        onClick={e => this.setState({ typeId: st.id, operatorId: null })}>
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
        </div>
      </div>
    );
  }
}

export default Services;
