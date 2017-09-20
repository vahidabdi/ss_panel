import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceTypes from 'src/components/serviceTypes';
import LatestServices from 'src/components/latestServices';
// import ViewService from 'src/components/recharts';
import Reports from 'src/components/reports';

const Dashboard = () => (
  <div className={`${sass.section} ${sass.graph}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div className={sass.item_5}>
          <ServiceTypes />
        </div>
        <div className={` ${sass.item_7} ${sass['graph-container']}`}>
          <Reports />
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
