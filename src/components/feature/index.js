import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceTypeMenu from 'src/components/serviceTypeMenu';
import FeatureItem from 'src/components/featureItem';
// import config from 'kit/config';

const Feature = () => (
  <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div>
          <ServiceTypeMenu />
        </div>
        <div className={sass.featuer}>
          <div className={sass.feature__box}>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feature;
