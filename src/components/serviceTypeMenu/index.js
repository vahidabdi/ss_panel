import React from 'react';
import sass from 'src/styles/index.scss';


const ServiceTypeMenu = () => (
  <nav className={sass.nav}>
    <ul>
      <li className={sass.nav__item}>
    همه
      </li>
      <li className={`${sass.nav__item} ${sass.dropdown}`}>
  اپراتور
        <ul className={sass['dropdown__item-box']}>
          <Operator x={{ operator: 'ایرانسل' }} />
          <Operator x={{ operator: 'ایرانسل' }} />
          <Operator x={{ operator: 'ایرانسل' }} />
          <Operator x={{ operator: 'ایرانسل' }} />
          <Operator x={{ operator: 'ایرانسل' }} />
        </ul>
      </li>
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
      <ServiceTypeMenuItem x={{ typeService: 'آموزشی' }} />
    </ul>
  </nav>
);

export default ServiceTypeMenu;

const ServiceTypeMenuItem = ({ x }) => (
  <li className={sass.nav__item}>{x.typeService}</li>
);


const Operator = ({ x }) => (
  <li className={sass.dropdown__item}>
    {x.operator}
  </li>
);
