import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import remove from 'src/graphql/mutations/removeComment.gql';
import update from 'src/graphql/mutations/updateComment.gql';
import query from 'src/graphql/queries/comments.gql';
import ReactModal from 'react-modal';

@graphql(remove, { name: 'remove' })
@graphql(update, { name: 'update' })
class CommentLastest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true,
      showModalComment: false,
      closeModalComment: true,
      approved: null,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModalComment = this.handleOpenModalComment.bind(this);
    this.handleCloseModalComment = this.handleCloseModalComment.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  componentWillMount() {
    this.setState({ approved: this.props.x.approved });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ approved: nextProps.x.approved });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleOpenModalComment() {
    this.setState({ showModalComment: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleCloseModalComment() {
    this.setState({ showModalComment: false });
  }
  removeComment() {
    this.props.remove({
      variables: { CommentId: this.props.x.id },
      refetchQueries: [{ query }],
    });
  }
  updateComment() {
    this.props.update({
      variables: { commentId: this.props.x.id, approved: !this.state.approved },
      refetchQueries: [{ query, fetchPolicy: 'network-only' }],
    });
  }

  render() {
    return (
      <tr className={`${sass.table__row} ${(this.props.x.approved ? 'feature' : 'noFeature')}`}>
        <td>{this.props.x.id}</td>
        <td>
          <div className={sass.table__img}>
            <img src={this.props.x.service.thumb1x} alt="describtion" />
          </div>
          <div className={sass.table__name}>{this.props.x.service.name}</div>
        </td>
        <td>
          <div className={sass.table__name}>{this.props.x.user.name}</div>
        </td>
        <td>
          <div className={sass.table__name}>
            <button onClick={this.handleOpenModalComment}>{this.props.x.comment}</button>
          </div>
        </td>
        <td>
          <input
            type="checkbox"
            name="approved"
            onChange={this.updateComment}
            checked={this.state.approved} />
        </td>
        <td>
          <button className={sass.table__delete} onClick={this.handleOpenModal}><i className={sass['icon-delete']} /><span>حذف</span></button>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)' }, content: { backgroundColor: '#fff' } }}
            className="ReactModal__Content"
            contentLabel="Minimal Modal Example">
            <button onClick={this.handleCloseModal} className={sass['icon-cancel3']} />
            <div className={sass.form}>
              <form onSubmit={this.removeComment}>
                <div className={sass.flex}>
                  <div className={`${sass.item_6} ${sass.pd_10}`}>
                    <h4 className={sass.form__title}> از حذف این نظر اطمینان دارید؟</h4>
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
          <ReactModal
            isOpen={this.state.showModalComment}
            onRequestClose={this.handleCloseModalComment}
            style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)' }, content: { backgroundColor: '#fff' } }}
            className="ReactModal__Content"
            contentLabel="Minimal Modal Example">
            <button onClick={this.handleCloseModalComment} className={sass['icon-cancel3']} />
            <div className={sass.form}>
              <form onSubmit={this.removeComment}>
                <div className={sass.flex}>
                  <div className={`${sass.item_6} ${sass.pd_10}`}>
                    <h4 className={sass.form__title}>{this.props.x.comment}</h4>
                  </div>
                </div>
                <div className={`${sass.form__submit} ${sass.pd_10}`}>
                  <input
                    className={sass.form__ok}
                    type="submit"
                    value=" حذفش کن" />
                  <button
                    className={sass.form__no}
                    onClick={this.handleCloseModalComment}> خروج</button>
                </div>
              </form>
            </div>
          </ReactModal>
        </td>


      </tr>
    );
  }
}
export default CommentLastest;
