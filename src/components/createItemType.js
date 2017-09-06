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
      <form className={sass['card-d__form']} onSubmit={this.onSubmit}>
        <label htmlFor="hasSubCat">
        subcat
            <input className="checkbox" type="checkbox" id="hasSubCat" checked={this.state.hasSubCat} onChange={e => this.setState({ hasSubCat: e.target.checked })} />
        </label>
        <label htmlFor="servicTypeName" className={sass['icon-plus']}>
          <input className={sass.input} type="text" value={this.state.name} placeholder="name" onChange={e => this.setState({ name: e.target.value })} />
        </label>

        <button type="submit" />

      </form>
    );
  }
}
CreateItemType.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItemType;
