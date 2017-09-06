import React from 'react';
import PropTypes from 'prop-types';
import sass from 'src/styles/index.scss';


class CreateItemType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hasSubCat: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, hasSubCat } = this.state;
    this.props.onSubmit(name, hasSubCat);
    this.setState({ name: '', hasSubCat: false });
  }

  render() {
    return (
      <form className={sass.form} onSubmit={this.onSubmit}>
        <input type="text" placeholder="fa name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <label htmlFor="hasSubCat">
          <input type="checkbox" id="hasSubCat" checked={this.state.hasSubCat} onChange={e => this.setState({ hasSubCat: e.target.checked })} />
        subcat</label>
        <button className={sass.form__submit} type="submit" />
      </form>
    );
  }
}
CreateItemType.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItemType;
