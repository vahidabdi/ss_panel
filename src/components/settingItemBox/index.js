import React from 'react';
import sass from 'src/styles/index.scss';

const SettingItemBox = ({ x }) => (
  <div className={sass['card-d__itembox']}>
    <h3 className={sass['card-d__itemname']}>{x.name}</h3>
    <span className={`${sass['card-d__edit']} ${sass['icon-edit']}`}>ویرایش</span>
  </div>
);

export default SettingItemBox;
