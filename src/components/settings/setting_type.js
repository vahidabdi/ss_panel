import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/update_type.gql';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';

@graphql(mutation)
class SettingType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true,
      name: '',
      hasSubCat: false,
      hasOperator: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.state.name = this.props.service_type.name;
    this.state.hasSubCat = this.props.service_type.hasSubCat;
    this.state.hasOperator = this.props.service_type.hasOperator;
  }

  onSubmit() {
    this.props.mutate({
      variables: {
        type_id: this.props.service_type.id,
        name: this.state.name,
        hasSubCat: this.state.hasSubCat,
        hasOperator: this.state.hasOperator,
      },
    });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className={sass['card-d__itembox']}>
        <h3 className={sass['card-d__itemname']}>{this.props.service_type.name}</h3>
        <button onClick={this.handleOpenModal} className={`${sass['card-d__edit']} ${sass['icon-edit']}`}>ویرایش</button>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)' }, content: { backgroundColor: '#fff' } }}
          className="ReactModal__Content"
          contentLabel="Minimal Modal Example">
          <button onClick={this.handleCloseModal} className={sass['icon-cancel3']} />
          <div className={sass.form}>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="hasSubCat">
              subcat
                <input name="hasSubCat" className="checkbox" type="checkbox" id="hasSubCat" checked={this.state.hasSubCat} onChange={e => this.setState({ hasSubCat: e.target.checked })} />
              </label>
              <label htmlFor="hasOperator">
              operator
                <input name="hasOperator" className="checkbox" type="checkbox" id="hasOperator" checked={this.state.hasOperator} onChange={e => this.setState({ hasOperator: e.target.checked })} />
              </label>
              <label htmlFor="servicTypeName">
                <input className={sass.input} type="text" value={this.state.name} placeholder="name" onChange={e => this.setState({ name: e.target.value })} />
              </label>

              <button className={sass.btn__plus} type="submit">ارسال</button>

            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default SettingType;
