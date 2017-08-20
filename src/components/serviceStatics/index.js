import React from 'react';
import sass from 'src/styles/index.scss';

const ServiceStatics = ({ x, title, icon }) => (
  <div className={sass['card-b']}>
    <span className={icon} />
    <div className={sass['card-b__box']}>
      <div className={sass['card-b__number']}>{x.view}</div>
      <div className={sass['card-b__title']}>{title}</div>
    </div>
  </div>
);

export default ServiceStatics;
