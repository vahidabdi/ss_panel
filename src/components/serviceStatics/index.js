import React from 'react';
import PropTypes from 'prop-types';
import sass from 'src/styles/index.scss';

const ServiceStatics = ({ count, title, icon }) => (
  <div className={sass['card-b']}>
    <span className={icon} />
    <div className={sass['card-b__box']}>
      <div className={sass['card-b__number']}>{count}</div>
      <div className={sass['card-b__title']}>{title}</div>
    </div>
  </div>
);

ServiceStatics.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ServiceStatics;
