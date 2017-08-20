import React from 'react';
import sass from 'src/styles/index.scss';

const LatestServicesItem = ({ x }) => (
  <li className={sass['card-a__item-box']}>
    <div className={sass['card-a__img']}>
      <img src={x.picture} alt="describtion" />
    </div>
    <div className={sass['card-a__name']}>{x.name}</div>
    <div className={sass['card-a__type']}>{x.type.name}</div>
    <div className={sass['card-a__view']}><span>{x.view}</span> بازدید</div>
    <div className={sass['card-a__delete']}><i className={sass['icon-delete']} /><span>حذف</span></div>
    <div className={sass['card-a__edit']}><i className={sass['icon-edit']} /><span>ویرایش</span> </div>
  </li>
);

export default LatestServicesItem;
