import React from 'react';
import sass from 'src/styles/index.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className={sass.header__main} >
    <nav className={sass.header__nav}>
      <AmbiguousExample />
    </nav>
    <div className={sass.header__searchbox} >
      <i className={sass['icon-search']} />
      <input type="text" name="search" placeholder="جستجو" />
    </div>
    <div className={sass.header__btn} >
      <Link className={sass.btn} to="/dashboard/service">
        <i className={sass['icon-plus']} />
ایجاد سرویس
      </Link>
    </div>
  </div>
);

export default Header;
const AmbiguousExample = () => (
  <ul>
    <li className={sass.header__nav_item}><Link to="/dashboard">صفحه اصلی</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/services">سرویس ها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/banner">بنرها</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/feature">فیچر</Link></li>
    <li className={sass.header__nav_item}><Link to="/dashboard/setting">تنظیمات</Link></li>
    <li className={sass.header__nav_item}><Link to="/login">خروج</Link></li>
  </ul>
);
