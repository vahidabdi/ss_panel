import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/removeService.gql';
import query from 'src/graphql/queries/latest_services.gql';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

@graphql(mutation)
class ServiceParticulars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true,

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.removeService = this.removeService.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
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
          <Link to={`/dashboard/service/${this.props.x.id}`}>
            <div className={sass.table__img}>
              <img src={this.props.x.thumb1x} alt="describtion" />
            </div>
            <div className={sass.table__name}>{this.props.x.name}</div>
          </Link>
        </td>
        <td>{this.props.x.view}</td>
        <td>زمان تولید</td>
        <td>زمان انقضا</td>
        <td>
          <button className={sass.table__delete} onClick={this.handleOpenModal}><i className={sass['icon-delete']} /><span>حذف</span></button>
          <div className={sass.table__edit}><Link to={`/dashboard/service/${this.props.x.id}`}><i className={sass['icon-edit']} /><span>ویرایش</span></Link></div>
          <ReactModal
            isOpen={this.state.showModal}
            shouldCloseOnOverlayClick
            style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)' }, content: { backgroundColor: '#fff' } }}
            className="ReactModal__Content"
            contentLabel="Minimal Modal Example">
            <button onClick={this.handleCloseModal} className={sass['icon-cancel3']} />
            <div className={sass.form}>
              <form onSubmit={this.removeService}>
                <div className={sass.flex}>
                  <div className={`${sass.item_6} ${sass.pd_10}`}>
                    <h4 className={sass.form__title}> از حذف این سرویس اطمینان دارید؟</h4>
                  </div>
                </div>
                <div className={`${sass.form__submit} ${sass.pd_10}`}>
                  <input
                    className={sass.form__ok}
                    type="submit"
                    value=" بلی" />
                  <button
                    className={sass.form__no}
                    onClick={this.handleCloseModal}> نخیر، حذفش نکن!</button>
                </div>
              </form>
            </div>
          </ReactModal>
        </td>
        <td>
          <input
            type="checkbox"
            name="isFeatured"
            checked={this.props.x.isFeatured} />
        </td>

      </tr>
    );
  }
}
export default ServiceParticulars;
