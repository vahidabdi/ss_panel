import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceTypeMenu from 'src/components/serviceTypeMenu';


const Services = () => (
  <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
    <div className={sass.section__wrap}>
      <div className={sass.section__main}>
        <div>
          <ServiceTypeMenu />
        </div>
        <div className={sass.table__box}>
          <table className={sass.table}>
            <tr className={sass.table__head}>
              <th>ردیف</th>
              <th>شناسه</th>
              <th>نام سرویس</th>
              <th>میزان بازدید</th>
              <th>زمان ایجاد</th>
              <th>تاریخ انقضاء</th>
              <th>حذف/ویرایش</th>
              <th>
                <input type="checkbox" name="ficher" value="ficher" id="ficher" />
                <label className={sass.pd_10} htmlFor="ficher">فیچر</label>
              </th>
            </tr>
          <ServiceParticulars />
          </table>
        </div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
        <div>hahahahahahahahha</div>
      </div>
    </div>
  </div>
);

export default Services;
