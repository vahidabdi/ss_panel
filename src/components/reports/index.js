import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getType from 'src/graphql/queries/service_types.gql';
import sass from 'src/styles/index.scss';
import Charts from 'src/components/charts';


@graphql(getType)
class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeId: 1,
    };
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div>
        <nav className={`${sass.nav} ${sass.item_8} ${sass.nav__chart}`}>
          <ul>
            <li className={`${sass.nav__item} ${sass.dropdown}`}>
              <ul className={sass['dropdown__item-box']}>
                {data.serviceTypes.map(t => (
                  <li key={`type_${t.id}`} className={sass.dropdown__item}>
                    <button
                      onClick={
                        e => this.setState({ typeId: t.id })
                      }>
                      {t.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        <Charts type_id={this.state.typeId} />
      </div>
    );
  }
}

export default Reports;
