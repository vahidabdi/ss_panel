import React from 'react';
import sass from 'src/styles/index.scss';

const BannerItem = () => (
  <div className={sass['card-c']}>
    <div className={sass['card-c__img-box']}>
      <img src="http://localhost:8080/static/images/pic20.jpg" alt="describtion" />
    </div>
    <h2 className={sass['card-c__name']}>
      سرویس تکنیکهای ثروتمند شدن
    </h2>
    <button className={`${sass['card-c__icon']} ${sass['icon-edit']}`} />
    <button className={`${sass['card-c__icon']} ${sass['icon-delete']}`} />
  </div>
);

export default BannerItem;
