import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import ServiceTypeMenu from 'src/components/serviceTypeMenu';
import ServiceParticulars from 'src/components/serviceParticulars';
import latestServices from 'src/graphql/queries/latest_services.gql';

@graphql(latestServices)
class Services extends React.Component {
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
              <ServiceTypeMenu />
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
                  </tr>
                </thead>
                <tbody>
                  {data.latestServices.map(st =>
                    <ServiceParticulars key={st.id} x={st} />
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
