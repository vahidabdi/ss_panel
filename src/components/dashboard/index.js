import React from 'react';
import sass from 'src/styles/index.scss';
import Header from 'src/components/header';

const Dashboard = () => (
  <div className={`${sass['page-wrap']} ${sass['dashboard-page']}`}>
    <header className={`${sass.section} ${sass.header}`}>
      <div className={sass.section__wrap}>
        <Header />
      </div>
    </header>
  </div>
);

export default Dashboard;
