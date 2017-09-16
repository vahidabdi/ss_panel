import React from 'react';
import sass from 'src/styles/index.scss';
import { NavLink as Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state.search);
    this.props.history.push(`/dashboard/search/${this.state.search}`);
  }
  render() {
    return (
      <div className={sass.header__main} >
        <nav className={sass.header__nav}>
          <HeaderNav />
        </nav>
        <form onSubmit={this.submitForm} className={sass.header__searchbox}>
          <i className={sass['icon-search']} />
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="جستجو" />
          <input
            type="submit"
            value=""
          />
        </form>
        <div className={sass.header__btn} >
          <Link className={sass.btn} to="/dashboard/service">
            <i className={sass['icon-plus']} />
    ایجاد سرویس
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
const HeaderNav = () => (
  <ul>
    <li className={sass.header__nav_item}><Link to="/dashboard" exact activeClassName="active">صفحه اصلی</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/services" exact activeClassName="active">سرویس ها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/banner" exact activeClassName="active">بنرها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/feature" exact activeClassName="active">فیچر</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/setting" exact activeClassName="active">تنظیمات</Link></li>
  </ul>
);
