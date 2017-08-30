import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import config from 'kit/config';
import mutation from 'src/graphql/mutations/removeService.gql';
import query from 'src/graphql/queries/latest_services.gql';
import { Link } from 'react-router-dom';

@graphql(mutation)
class ServiceParticulars extends React.Component {
  constructor(props) {
    super(props);
    this.removeService = this.removeService.bind(this);
  }

  removeService() {
    this.props.mutate({
      variables: { id: this.props.x.id },
      refetchQueries: [{ query }],
    });
  }
  render() {
    return (
      <tr className={sass.table__row}>
        <td>{this.props.x.id}</td>
        <td>
          <div className={sass.table__img}>
            <img src={`${config.graphQLEndpoint}/${this.props.x.thumb}`} alt="describtion" />
          </div>
          <div className={sass.table__name}>{this.props.x.name}</div>
        </td>
        <td>{this.props.x.view}</td>
        <td>زمان تولید</td>
        <td>زمان انقضا</td>
        <td>
          <button className={sass.table__delete} onClick={this.removeService}><i className={sass['icon-delete']} /><span>حذف</span></button>
          <div className={sass.table__edit}><Link to={`/dashboard/service/${this.props.x.id}`}><i className={sass['icon-edit']} /><span>ویرایش</span></Link></div>
        </td>

      </tr>
    );
  }
}
export default ServiceParticulars;
