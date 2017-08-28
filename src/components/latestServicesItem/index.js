import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import config from 'kit/config';
import mutation from 'src/graphql/mutations/removeService.gql';
import query from 'src/graphql/queries/latest_services.gql';
import { BrowserRouter as Router, Link } from 'react-router-dom';


@graphql(mutation)
class LatestServicesItem extends React.Component {
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
      <li className={sass['card-a__item-box']}>
        <div className={sass['card-a__img']}>
          <img src={`${config.graphQLEndpoint}/${this.props.x.thumb}`} alt="describtion" />
        </div>
        <div className={sass['card-a__name']}>{this.props.x.name}</div>
        <div className={sass['card-a__type']}>{this.props.x.type.name}</div>
        <div className={sass['card-a__view']}><span>{this.props.x.view}</span> بازدید</div>
        <button onClick={this.removeService} className={sass['card-a__delete']}>
          <i className={sass['icon-delete']} />
          <span>حذف</span>
        </button>
        <div className={sass['card-a__edit']}><Link to={`/dashboard/service/${this.props.x.id}`}><i className={sass['icon-edit']} /><span>ویرایش</span></Link> </div>
      </li>
    );
  }
}


export default LatestServicesItem;
