import React from 'react';
import PropTypes from 'prop-types';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';


class CreateItemType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameEng: '',
      hasSubCat: false,
      hasOperator: false,
      showModal: false,
      closeModal: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, nameEng, hasSubCat, hasOperator } = this.state;
    this.props.onSubmit(name, nameEng, hasSubCat, hasOperator);
    this.setState({ name: '', nameEng: '', hasSubCat: false, hasOperator: false });
    this.setState({ showModal: false });
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className={` ${sass['icon-plus']} ${sass.btn__plus}`} />
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
              <label htmlFor="servicTypeNameEng">
                <input className={sass.input} type="text" value={this.state.nameEng} placeholder="nameEnglish" onChange={e => this.setState({ nameEng: e.target.value })} />
              </label>

              <button className={sass.btn__plus} type="submit">ارسال</button>

            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
CreateItemType.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItemType;
