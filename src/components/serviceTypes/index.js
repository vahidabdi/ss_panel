import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import serviceTypes from 'src/graphql/queries/service_types.gql';
import ServiceTypesItem from 'src/components/serviceTypeItems';

@graphql(serviceTypes)
class ServiceTypes extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    const total = data.serviceTypes.reduce((acc, obj) => (obj.count + acc), 0);
    return (
      <div>
        <h3 className={sass.section__title}>تعداد سرویس های موجود در هر دسته</h3>
        <ul className={sass['avlbe-service']}>
          <li className={sass['avlbe-service__item-box']}>
            <span className={sass['avlbe-service__name']}>همه</span>
            <span className={sass['avlbe-service__number']}>{total}</span>
          </li>
          {data.serviceTypes.map(st =>
            <ServiceTypesItem key={st.id} x={st} />,
          )}
        </ul>
      </div>
    );
  }
}

export default ServiceTypes;
