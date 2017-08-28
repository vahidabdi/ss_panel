import React from 'react';
import sass from 'src/styles/index.scss';

const featureItem = () => (
  <div className={sass.feature__item}>
    <div className={sass.feature__img}>
      <img src="http://192.168.1.19:4000///uploads/pictures/21248de5-62d3-4ed1-b0fc-4769a8abcf8c/thumb.jpg?v=63671049428" alt="feature" />
    </div>
    <h2 className={sass.feature__name}>
    khlllll
    </h2>
    <button className={`${sass.feature__icon} ${sass['icon-delete']}`} />
    <button className={`${sass.feature__icon} ${sass['icon-edit']}`} />
  </div>
);

export default featureItem;
