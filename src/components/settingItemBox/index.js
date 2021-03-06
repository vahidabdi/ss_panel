import React from 'react';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';

class SettingItemBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true,

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
        <h3 className={sass['card-d__itemname']}>{this.props.name}</h3>
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
                <input className="checkbox" type="checkbox" id="hasSubCat" checked={this.state.hasSubCat} onChange={e => this.setState({ hasSubCat: e.target.checked })} />
              </label>
              <label htmlFor="hasOperator">
              operator
                <input className="checkbox" type="checkbox" id="hasOperator" checked={this.state.hasOperator} onChange={e => this.setState({ hasOperator: e.target.checked })} />
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

export default SettingItemBox;
