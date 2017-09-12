import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import ServiceNewQuery from 'src/graphql/queries/service_new.gql';

@graphql(ServiceNewQuery)
class ServiceTypeMenu extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    return (
      <nav className={sass.nav}>
        <ul>
          <li className={sass.nav__item}>
        همه
          </li>
          <li className={`${sass.nav__item} ${sass.dropdown}`}>
      اپراتور
            <ul className={sass['dropdown__item-box']}>
              {data.operators.map(st =>
                <Operator key={st.id} x={st} />,
              )}
            </ul>
          </li>
          {data.serviceTypes.map(st =>
            <ServiceTypeMenuItem key={st.id} x={st} />,
          )}
        </ul>
      </nav>
    );
  }
}

export default ServiceTypeMenu;

const ServiceTypeMenuItem = ({ x }) => (
  <li className={sass.nav__item}>{x.name}</li>
);


const Operator = ({ x }) => (
  <li className={sass.dropdown__item}>
    {x.name}
  </li>
);
