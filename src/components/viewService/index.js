import React from 'react';
import Trend from 'react-trend';
import sass from 'src/styles/index.scss';


const ViewService = () => (
  <div>
    <h3 className={sass.section__title}>میزان بازدید هر دسته در ماه</h3>
    <div className={sass['view-service']}>
      <div className={sass['view-service__box-trend']}>
        <Trend
          smooth
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          data={[0, 100, 190, 205, 350, 366, 390, 410, 430, 460, 500, 520, 560, 600, 650]}
          gradient={['#42b3f4']}
          radius={12.7}
          strokeWidth={1.5}
          strokeLinecap={'butt'} />
        <Trend
          gradient={['#0FF', '#F0F', '#FF0']}
          smooth radius={20} strokeWidth={4}
          data={[0, 200, 190, 205, 350, 366, 400, 500, 430, 460, 500, 520, 560, 600, 400]} />
      </div>
    </div>
  </div>
);


export default ViewService;
