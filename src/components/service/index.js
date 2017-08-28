import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceEdit from 'src/components/serviceEdit';
import ServiceNew from 'src/components/serviceNew';


const Service = ({ match }) => (
  <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div>{match.params.service_id}</div>
        {!(match.params.service_id == null) ? (
          <ServiceEdit srv={match.params.service_id} />
        ) : (
          <ServiceNew />
        )}


      </div>
    </div>
  </div>
);

export default Service;
