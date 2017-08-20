import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import serviceMutation from 'src/graphql/mutations/service.gql';
import serviceTypes from 'src/graphql/queries/service_types.gql';
import { WithContext as ReactTags } from 'react-tag-input';

// @graphql(serviceTypes)
@graphql(serviceMutation)
class ServiceNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      feature: false,
      activation_code: '',
      picture: '',
      deactivation_code: '',
      help: '',
      tags: [],
      tags_val: [],
      price: '',
      expirate_date: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: 'this.state.description',
        feature: this.state.feature,
        help: this.state.help,
        actiovation_code: this.state.activation_code,
        deactiovation_code: this.state.deactivation_code,
        tags: this.state.tags.map(i => i.text),
        expirate_date: this.state.expirate_date,
        TypeId: 2,
        picture: this.state.picture,
      },
    });
  }

  handleDelete(i) {
    const tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition(tag) {
    const tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag,
    });
    this.setState({ tags });
  }

  handleDrag(tag, currPos, newPos) {
    const tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);
    // re-render
    this.setState({ tags });
  }

  render() {
    const { tags } = this.state;
    return (
      <div>
        <div>
          <div className={sass.form}>
            <form onSubmit={this.submitForm}>
              <div className={sass.pd_10}>
                <label className={sass.block} htmlFor="f1">نام سرویس</label>
                <div className={sass.flex}>
                  <div className={sass.item_8}>
                    <input
                      className={`${sass.block}  ${sass.w90}`}
                      type="text"
                      name="name"
                      id="f1"
                      onChange={e => this.setState({ name: e.target.value })} />
                  </div>
                  <div className={`${sass.item_4}  ${sass.pd_10}`}>
                    <input
                      type="checkbox"
                      name="feature"
                      value
                      id="f2"
                      onChange={e => this.setState({ feature: e.target.checked })} />
                    <label className={sass.pd_10} htmlFor="f2">فیچر</label>
                  </div>
                </div>
              </div>
              <div className={sass.pd_10}>
                <label htmlFor="f3"> توضیحات</label>
                <textarea
                  className={`${sass.block} ${sass.pd_10} ${sass.form__textarea}`}
                  type="checkbox"
                  name="description"
                  id="f3"
                  onChange={e => this.setState({ description: e.target.value })} />
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
                    <input
                      className={sass.w90}
                      type="file"
                      name="picture"
                      accept={'image/jpeg,image/png,image/jpg'}
                      onChange={e => this.setState({ picture: e.target.files[0] })} />
                  </div>
                </div>
              </div>
              <div className={sass.flex}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={sass.block} htmlFor="txt1">کدفعالسازی</label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block}  ${sass.w90}`}
                      type="text"
                      name="actiovation_code"
                      id="txt1"
                      onChange={e => this.setState({ actiovation_code: e.target.value })} />
                  </div>
                </div>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={sass.block} htmlFor="txt2">کد غیرفعالسازی</label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block} ${sass.w90}`}
                      type="text"
                      name="deactiovation_code"
                      id="txt2"
                      onChange={e => this.setState({ deactiovation_code: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className={sass.flex}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={sass.block} htmlFor="txt3">راهنما</label>
                  </h4>
                  <div>
                    <textarea
                      className={`${sass.block}  ${sass.form__textarea}`}
                      type="textarea"
                      name="help"
                      id="txt3"
                      onChange={e => this.setState({ help: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className={sass.flex}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    برچسب ها
                  </h4>
                  <div>
                    <ReactTags
                      tags={tags}
                      placeholder="برچسب"
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      handleDrag={this.handleDrag}
                      autofocus={false} />
                  </div>
                </div>
              </div>
              <div className={sass.flex}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={sass.block} htmlFor="txt4">قیمت</label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block}  ${sass.w90}`}
                      type="number"
                      name=""
                      id="txt4" />
                  </div>
                </div>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={sass.block} htmlFor="txt5">تاریخ انقضا</label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block} ${sass.w90}`}
                      type="text"
                      name="expirate_date"
                      id="txt5"
                      onChange={e => this.setState({ expirate_date: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className={`${sass.form__submit} ${sass.pd_10}`}>
                <input
                  className={sass.w90}
                  type="submit"
                  value="ارسال" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceNew;
