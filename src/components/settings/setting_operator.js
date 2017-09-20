import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/update_operator.gql';
import sass from 'src/styles/index.scss';
import ReactModal from 'react-modal';

@graphql(mutation)
class SettingOperator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true,
      name: '',
      payBill: '',
      buyCharge: '',
      internetCharge: '',
      credit: '',
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.state.name = this.props.operator.name;
    this.state.buyCharge = this.props.operator.buyCharge;
    this.state.credit = this.props.operator.credit;
    this.state.internetCharge = this.props.operator.internetCharge;
    this.state.payBill = this.props.operator.payBill;
  }

  onSubmit() {
    this.props.mutate({
      variables: {
        operatorId: this.props.operators.id,
        name: this.state.name,
        buyCharge: this.state.buyCharge,
        credit: this.state.credit,
        internetCharge: this.state.internetCharge,
        payBill: this.state.payBill,

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
        <h3 className={sass['card-d__itemname']}>{this.props.operator.name}</h3>
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
              <label htmlFor="servicTypeName">
                <input className={sass.input} type="text" value={this.state.name} placeholder="name" onChange={e => this.setState({ name: e.target.value })} />
              </label>
              <label htmlFor="buyCharge">
                <input className={`${sass.input} ${sass.ltr}`} type="text" id="operatorName" value={this.state.buyCharge} placeholder="creaخرید شارژ" onChange={e => this.setState({ buyCharge: e.target.value })} />
              </label>
              <label htmlFor="internetCharge">
                <input className={`${sass.input} ${sass.ltr}`} type="text" id="internetCharge" value={this.state.internetCharge} placeholder="شارژ اینترنت" onChange={e => this.setState({ internetCharge: e.target.value })} />
              </label>
              <label htmlFor="payBill">
                <input className={`${sass.input} ${sass.ltr}`} type="text" id="payBill" value={this.state.payBill} placeholder="پرداخت قبض" onChange={e => this.setState({ payBill: e.target.value })} />
              </label>
              <label htmlFor="credit">
                <input className={`${sass.input} ${sass.ltr}`} type="text" id="credit" value={this.state.credit} placeholder="اعلام موجودی" onChange={e => this.setState({ credit: e.target.value })} />
              </label>

              <button className={sass.btn__plus} type="submit">ارسال</button>

            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default SettingOperator;
