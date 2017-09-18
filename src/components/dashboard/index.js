import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceTypes from 'src/components/serviceTypes';
import LatestServices from 'src/components/latestServices';
import ViewService from 'src/components/recharts';

const Dashboard = () => (
  <div className={`${sass.section} ${sass.graph}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div className={sass.item_4}>
          <ServiceTypes />
        </div>
        <div className={` ${sass.item_8} ${sass['graph-container']}`}>
          <ViewService />
        </div>
      </div>
      <div className={`${sass.section__main} ${sass['mr-b']}`}>
        <div className={sass.item_6}>
          <LatestServices />
        </div>
        <div className={sass.item_6}>
          <div className={sass.section__main}>
            <div className={sass.item_6}>
              <ServiceTypes />
            </div>
            <div className={sass.item_6}>
              <ServiceTypes />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
