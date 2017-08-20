import React from 'react';
import sass from 'src/styles/index.scss';
import ServiceStatics from 'src/components/serviceStatics';
import { WithContext as ReactTags } from 'react-tag-input';

const ServiceEdit = () => (


  
  <div>
    <h3 className={sass.section__title}> سرویس مهارت گفتن و شنیدن </h3>
    <div className={sass.flex}>
      <div className={`${sass.item_4} ${sass.mr_0}`}>
        <ServiceStatics x={{ view: 800 }} title="دفعات بازدید سرویس" icon={sass.icon_eye} />
      </div>
      <div className={sass.item_4}>
        <ServiceStatics x={{ view: 800 }} title=" تعداد دفعات اجرای سرویس " icon={sass.icon_check} />
      </div>
      <div className={sass.item_4}>
        <ServiceStatics x={{ view: 800 }} title="دفعات لغو سرویس" icon={sass.icon_cancel2} />
      </div>
    </div>
    <div>
      <div className={sass.form}>
        <form >
          <div className={sass.pd_10}>
            <label className={sass.block} htmlFor="f1">نام سرویس</label>
            <div className={sass.flex}>
              <div className={sass.item_8}>
                <input className={`${sass.block}  ${sass.w90}`} type="text" name="name" id="f1" />
              </div>
              <div className={`${sass.item_4}  ${sass.pd_10}`}>
                <input type="checkbox" name="ficher" value="ficher" id="f2" />
                <label className={sass.pd_10} htmlFor="f2">فیچر</label>

              </div>
            </div>
          </div>
          <div className={sass.pd_10}>
            <label htmlFor="f3"> توضیحات</label>
            <textarea className={`${sass.block} ${sass.pd_10} ${sass.form__textarea}`} type="checkbox" name="discribtion" id="f3" />
          </div>
          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>اپراتور</h4>
              <div className={sass.pd_10}>
                <input id="rb1" type="radio" name="operator" value="irancell" />  <label htmlFor="rb1">ایرانسل</label><br />
                <input id="rb2" type="radio" name="operator" value="hamrahaval" />  <label htmlFor="rb2">همراه اول</label><br />
                <input id="rb3" type="radio" name="operator" value="rightell" />   <label htmlFor="rb3">رایتل</label><br />
                <input id="rb4" type="radio" name="operator" value="tallia" />   <label htmlFor="rb4">تالیا</label>
              </div>
            </div>
            <div className={sass.item_6}>
              <h4 className={sass.form__title}>نوع سرویس</h4>
              <div className={sass.pd_10}>
                <input id="rb21" type="radio" name="typeService" value="payment" />  <label htmlFor="rb21">payment</label><br />
                <input id="rb22" type="radio" name="typeService" value="telegram" />  <label htmlFor="rb22">telegram</label><br />
                <input id="rb23" type="radio" name="typeService" value="USSD" />   <label htmlFor="rb23">USSD</label><br />
                <input id="rb24" type="radio" name="typeService" value="SMS" />   <label htmlFor="rb24">SMS</label>
              </div>
            </div>
          </div>
          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>موضوع</h4>
              <div>
                <select className={sass.w90}>
                  <option value="">آموزشی</option>
                  <option value="">غیر آموزشی</option>
                </select>
              </div>
            </div>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}> انتخاب عکس</h4>
              <div>
                <input className={sass.w90} type="file" name="pic" accept="image/*" />
              </div>
            </div>
          </div>
          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                <label className={sass.block} htmlFor="txt1">کدفعالسازی</label>
              </h4>
              <div>
                <input className={`${sass.block}  ${sass.w90}`} type="text" name="name" id="txt1" />
              </div>
            </div>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                <label className={sass.block} htmlFor="txt2">کد غیرفعالسازی</label>
              </h4>
              <div>
                <input className={`${sass.block} ${sass.w90}`} type="text" name="name" id="txt2" />
              </div>
            </div>
          </div>

          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                <label className={sass.block} htmlFor="txt3">راهنما</label>
              </h4>
              <div>
                <textarea className={`${sass.block}  ${sass.form__textarea}`} type="checkbox" name="help" id="txt3" />
              </div>
            </div>
          </div>
          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                برچسب ها
              </h4>
              <div>
                <ReactTag />
              </div>
            </div>
          </div>
          <div className={sass.flex}>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                <label className={sass.block} htmlFor="txt4">قیمت</label>
              </h4>
              <div>
                <input className={`${sass.block}  ${sass.w90}`} type="number" name="name" id="txt4" />
              </div>
            </div>
            <div className={`${sass.item_6} ${sass.pd_10}`}>
              <h4 className={sass.form__title}>
                <label className={sass.block} htmlFor="txt5">تاریخ انقضا</label>
              </h4>
              <div>
                <input className={`${sass.block}  ${sass.w90}`} type="text" name="name" id="txt5" />
              </div>
            </div>
          </div>
          <div className={`${sass.form__submit} ${sass.pd_10}`}>
            <input className={sass.w90} type="submit" value="ارسال" />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ServiceEdit;
