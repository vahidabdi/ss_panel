import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/serviceCategory_new.gql';
import query from 'src/graphql/queries/categories.gql';
import ReactModal from 'react-modal';
import sass from 'src/styles/index.scss';

@graphql(mutation)
class CreateServiceCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      closeModal: true,
      name: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.mutate({
      variables: { name: this.state.name },
      refetchQueries: [{ query }],
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
                <label htmlFor="categoryName">
                  <input className={sass.input} type="text" id="categoryName" value={this.state.name} placeholder="نام اپراتور" onChange={e => this.setState({ name: e.target.value })} />
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

export default CreateServiceCategory;
