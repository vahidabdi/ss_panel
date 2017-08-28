import React from 'react';
import PropTypes from 'prop-types';
import sass from 'src/styles/index.scss';


class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name } = this.state;
    this.props.onSubmit(name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <form className={sass['card-d__form']} onSubmit={this.onSubmit}>
        <label htmlFor="ic1" className={sass['icon-plus']}>
          <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        </label>
        <button type="submit" />
      </form>
    );
  }
}
CreateItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItem;
