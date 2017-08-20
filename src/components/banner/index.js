import React from 'react';
import sass from 'src/styles/index.scss';
import BannerItem from 'src/components/bannerItem';


const Banner = () => (
  <div className={`${sass.section} ${sass.banner} ${sass['section--sm']}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div className={sass.flex}>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
        </div>
        <div className={sass.flex}>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
          <div className={sass.item_4}>
            <BannerItem />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
