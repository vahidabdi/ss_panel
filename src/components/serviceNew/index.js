import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import { withRouter } from 'react-router';
import serviceMutation from 'src/graphql/mutations/service.gql';
import { WithContext as ReactTags } from 'react-tag-input';
import ServiceNewQuery from 'src/graphql/queries/service_new.gql';
import query from 'src/graphql/queries/latest_services.gql';

@graphql(serviceMutation)
@graphql(ServiceNewQuery)
class ServiceNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      isFeatured: false,
      activation: '',
      activationNumber: '',
      deactivation: '',
      picture: null,
      help: '',
      tags: [],
      price: '',
      expirate_date: '',
      category_id: '',
      operator_id: null,
      type_id: null,
      status: true,
      runmode: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        isFeatured: this.state.isFeatured,
        help: this.state.help,
        activation: this.state.activation,
        activationNumber: this.state.activationNumber,
        deactivation: this.state.deactivation,
        tags: this.state.tags.map(i => i.text),
        expirate_date: this.state.expirate_date,
        TypeId: this.state.type_id,
        picture: this.state.picture,
        CategoryId: this.state.category_id,
        OperatorId: this.state.operator_id,
        price: this.state.price,
        status: this.state.status,
        runmode: this.state.runmode,
      },
      refetchQueries: [{ query }],
    })
      .then(() => {
        this.props.history.push('/dashboard/service/#');
        window.scrollTo(0, 0);
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

  handleRadio(e) {
    // console.log(e.currentTarget.name);
    this.setState({ [`${e.currentTarget.name}`]: e.currentTarget.value });
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    const { tags } = this.state;
    return (
      <div>
        <div>
          <div className={sass.form}>
            <form onSubmit={this.submitForm}>
              <div className={sass.pd_10}>
                <label className={sass.block} htmlFor="f1">نام سرویس <span className={sass['form--nece']}>*</span></label>
                <div className={sass.flex}>
                  <div className={sass.item_8}>
                    <input
                      className={`${sass.block} ${sass.w90}`}
                      type="text"
                      name="name"
                      id="f1"
                      onChange={e => this.setState({ name: e.target.value })} />
                  </div>
                  <div className={`${sass.item_4} ${sass.pd_10}`}>
                    <label className={sass.pd_10} htmlFor="f2">
                      <input
                        type="checkbox"
                        name="isFeatured"
                        value
                        checked={this.state.isFeatured}
                        id="f2"
                        onChange={e => this.setState({ isFeatured: e.target.checked })} />
                      <span>فیچر</span>
                    </label>
                  </div>
                  <div className={`${sass.item_4} ${sass.pd_10}`}>
                    <label className={sass.pd_10} htmlFor="status">
                      <input
                        type="checkbox"
                        name="status"
                        value
                        checked={this.state.status}
                        id="status"
                        onChange={e => this.setState({ status: e.target.checked })} />
                      <span>وضعیت</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={sass.pd_10}>
                <label htmlFor="f3"> توضیحات  <span className={sass['form--nece']}>*</span></label>
                <textarea
                  className={`${sass.block} ${sass.pd_10} ${sass.form__textarea}`}
                  type="checkbox"
                  name="description"
                  id="f3"
                  onChange={e => this.setState({ description: e.target.value })} />
              </div>
              <div className={`${sass.flex} ${sass.flex_baseline}`}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>اپراتور </h4>
                  <div className={sass.pd_10} >
                    {data.operators.map(st => (
                      <label key={`operator_${st.id}`} htmlFor={`operator_${st.id}`}>
                        <input
                          id={`operator_${st.id}`}
                          type="radio"
                          name="operator_id"
                          checked={this.state.operator_id === st.id}
                          value={st.id}
                          onChange={this.handleRadio} />
                        <span>{st.name}</span>
                      </label>),
                    )}
                  </div>
                </div>
                <div className={sass.item_6}>
                  <h4 className={sass.form__title}>نوع سرویس  <span className={sass['form--nece']}>*</span></h4>
                  <div className={sass.pd_10}>
                    {data.serviceTypes.map(st => (
                      <label key={`serviceType_${st.id}`} htmlFor={`serviceType_${st.id}`}>
                        <input
                          id={`serviceType_${st.id}`}
                          type="radio"
                          name="type_id"
                          checked={this.state.type_id === st.id}
                          value={st.id}
                          onChange={this.handleRadio} />
                        <span>{st.name}</span>
                      </label>),
                    )}
                  </div>
                </div>
                <div className={sass.item_6}>
                  <h4 className={sass.form__title}>نوع اجرایی  <span className={sass['form--nece']}>*</span></h4>
                  <div className={sass.pd_10}>
                    <label htmlFor="runmodeSms">
                      <input
                        id="runmodeSms"
                        type="radio"
                        name="runmode"
                        value="sms"
                        onChange={this.handleRadio} />
                      <span>SMS</span>
                    </label>
                    <label htmlFor="runmodeUssd">
                      <input
                        id="runmodeUssd"
                        type="radio"
                        name="runmode"
                        value="ussd"
                        onChange={this.handleRadio} />
                      <span>USSD</span>
                    </label>
                    <label htmlFor="runmodeTelegram">
                      <input
                        id="runmodeTelegram"
                        type="radio"
                        name="runmode"
                        value="telegram"
                        onChange={this.handleRadio} />
                      <span>Telegram</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={sass.flex}>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>موضوع</h4>
                  <div>
                    <select
                      className={sass.w90}
                      name="categorie"
                      value={this.state.category_id}
                      onChange={e => this.setState({ category_id: e.target.value })} >
                      <option value=""> -- انتخاب کنید  -- </option>
                      {data.categories.map(st =>
                        <option key={`category_${st.id}`} value={st.id}>{st.name}</option>,
                      )}
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
                    <label className={`${sass.block} ${sass['form__label--green']}`} htmlFor="txt1">کدفعالسازی  <span className={sass['form--nece']}>*</span></label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block}  ${sass.w90} ${sass.form__ltr}`}
                      type="text"
                      name="activation"
                      id="txt1"
                      onChange={e => this.setState({ activation: e.target.value })} />
                  </div>
                </div>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <h4 className={sass.form__title}>
                    <label className={`${sass.block} ${sass['form__label--dng']}`}  htmlFor="txt2">کد غیرفعالسازی</label>
                  </h4>
                  <div>
                    <input
                      className={`${sass.block} ${sass.w90} ${sass.form__ltr}`}
                      type="text"
                      name="deactivation"
                      id="txt2"
                      onChange={e => this.setState({ deactivation: e.target.value })} />
                  </div>
                </div>
                <div className={`${sass.item_6} ${sass.pd_10}`}>
                  <div>
                    <h4 className={sass.form__title}>
                      <label className={`${sass.block} ${sass['form__label--blue']}`} htmlFor="txt13">شماره فعالسازی</label>
                    </h4>
                    <div>
                      <input
                        className={`${sass.block} ${sass.w90} ${sass.form__ltr}`}
                        type="text"
                        name="activationNumber"
                        id="txt13"
                        onChange={e => this.setState({ activationNumber: e.target.value })} />
                    </div>
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
                      onChange={e => this.setState({ help: e.target.value })} />
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
                      type="text"
                      name="price"
                      id="txt4"
                      onChange={e => this.setState({ price: e.target.value })} />
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

export default withRouter(ServiceNew);
