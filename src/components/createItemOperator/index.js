import React from 'react';
import PropTypes from 'prop-types';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      buyCharge: '',
      credit: '',
      internetCharge: '',
      operatorId: null,
      payBill: '',
      showModal: false,
      closeModal: true,

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, buyCharge, credit, internetCharge, operatorId, payBill } = this.state;
    this.props.onSubmit(name, buyCharge, credit, internetCharge, operatorId, payBill);
    this.setState({ name: '', buyCharge: '', credit: '', internetCharge: '', operatorId: null, payBill });
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
                <label htmlFor="operatorName">
                نام اپراتور
                  <input className={sass.input} type="text" id="operatorName" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </label>
                <label htmlFor="buyCharge">
                خرید شارژ
                  <input className={`${sass.input} ${sass.ltr}`} type="text" id="buyCharge" value={this.state.buyCharge} onChange={e => this.setState({ buyCharge: e.target.value })} />
                </label>
                <label htmlFor="internetCharge">
                خرید اینترنت
                  <input className={`${sass.input} ${sass.ltr}`} type="text" id="internetCharge" value={this.state.internetCharge} onChange={e => this.setState({ internetCharge: e.target.value })} />
                </label>
                <label htmlFor="payBill">
                پرداخت قبض
                  <input className={`${sass.input} ${sass.ltr}`} type="text" id="payBill" value={this.state.payBill} onChange={e => this.setState({ payBill: e.target.value })} />
                </label>
                <label htmlFor="credit">
                اعلام موجودی
                  <input className={`${sass.input} ${sass.ltr}`} type="text" id="credit" value={this.state.credit} onChange={e => this.setState({ credit: e.target.value })} />
                </label>

                <button className={sass.btn__plus} type="submit">ارسال</button>

              </form>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}
CreateItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItem;
