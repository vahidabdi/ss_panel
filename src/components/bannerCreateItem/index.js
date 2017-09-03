import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';
import bannerMutation from 'src/graphql/mutations/banner.gql';
import query from 'src/graphql/queries/banners.gql';

@graphql(bannerMutation)
class BannerCreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      picture: {},
      serviceId: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        picture: this.state.picture,
        serviceId: this.state.serviceId,
      },
      refetchQueries: [{ query }],
    })
      .then(this.props.history.push('/dashboard/banner'));
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className={`${sass['card-c']} ${sass.plus}`}>
        <button onClick={this.handleOpenModal} className="ReactModal__button" >
          <div className={sass['card-c__plus-box']}>
            <i className={sass['icon-plus']} />
            <ReactModal
              isOpen={this.state.showModal}
              style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)' }, content: { backgroundColor: '#fff' } }}
              className="ReactModal__Content"
              contentLabel="Minimal Modal Example">
              <button onClick={this.handleCloseModal} className={sass['icon-cancel3']} />
              <div className={sass.form}>
                <form onSubmit={this.submitForm}>
                  <div className={sass.flex}>
                    <div className={`${sass.item_6} ${sass.pd_10}`}>
                      <h4 className={sass.form__title}> انتخاب عکس</h4>
                      <div>
                        <input
                          className={sass.w90}
                          type="file"
                          name="picture"
                          accept={'image/jpeg,image/png,image/jpg'}
                          onChange={e => this.setState({ picture: e.target.files[0] })} />
                      </div>
                    </div>
                    <div className={`${sass.item_6} ${sass.pd_10}`}>
                      <h4 className={sass.form__title}>شناسه سرویس</h4>
                      <div>
                        <input
                          className={sass.w90}
                          type="text"
                          name="serviceId"
                          onChange={e => this.setState({ serviceId: e.target.value })} />
                      </div>
                    </div>
                  </div>
                  <div className={`${sass.form__submit} ${sass.pd_10}`}>
                    <input
                      className={sass.w90}
                      type="submit"
                      value="ارسال" />
                  </div>
                </form>
              </div>
            </ReactModal>
          </div>
        </button>
      </div>
    );
  }
}

export default withRouter(BannerCreateItem);
