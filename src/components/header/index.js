import React from 'react';
import sass from 'src/styles/index.scss';
import { NavLink as Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import query from 'src/graphql/queries/latest_services.gql';

@graphql(query, { options: props => ({ search: props.search }) })
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <div className={sass.header__main} >
        <nav className={sass.header__nav}>
          <AmbiguousExample />
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
            value="ارسال"
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

export default Header;
const AmbiguousExample = () => (
  <ul>
    <li className={sass.header__nav_item}><Link to="/dashboard" exact activeClassName="active">صفحه اصلی</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/services" exact activeClassName="active">سرویس ها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/banner" exact activeClassName="active">بنرها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/feature" exact activeClassName="active">فیچر</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/setting" exact activeClassName="active">تنظیمات</Link></li>
  </ul>
);
