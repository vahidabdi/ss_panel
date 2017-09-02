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
          data={[0, 2, 5, 9, 0, 10, 1, 10, 0, 10, 0, 8, 0, 9, 0]}
          gradient={['#42b3f4']}
          radius={12.7}
          strokeWidth={1.5}
          strokeLinecap={'butt'} />
      </div>
    </div>
  </div>
);


export default ViewService;