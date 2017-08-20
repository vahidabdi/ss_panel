import React from 'react';
import sass from 'src/styles/index.scss';

const ServiceTypesItem = ({ x }) => (
  <li className={sass['avlbe-service__item-box']}>
    <span className={sass['avlbe-service__name']}>{x.name}</span>
    <span className={sass['avlbe-service__number']}>{x.count}</span>
  </li>
);

export default ServiceTypesItem;
