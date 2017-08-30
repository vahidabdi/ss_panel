import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/queries/getService.gql';
import { withRouter } from 'react-router';
import updateServiceMutation from 'src/graphql/mutations/updateService.gql';
import sass from 'src/styles/index.scss';
import ServiceStatics from 'src/components/serviceStatics';
import { WithContext as ReactTags } from 'react-tag-input';

@graphql(updateServiceMutation)
@graphql(query, { options: props => ({ variables: { ID: props.match.params.service_id } }) })
class ServiceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.service_id,
      name: '',
      description: '',
      isFeatured: false,
      activation: '',
      activation_number: '',
      deactivation: '',
      picture: {},
      help: '',
      expirate_date: '',
      tags: [],
      price: '',
      categoryId: '',
      operatorId: null,
      typeId: null,
      status: true,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading) {
      const { name, description, isFeatured, status, activation, activationNumber, deactivation, help, price, typeId, tags, operatorId, categoryId } = nextProps.data.service;
      const newTags = tags.map((v, i) => (
        { id: i, text: v }
      ));
      this.setState({ name, description, isFeatured, status, activation, activationNumber, deactivation, help, price, typeId, tags: newTags, operatorId, categoryId });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        id: this.state.id,
        name: this.state.name,
        description: this.state.description,
        isFeatured: this.state.isFeatured,
        help: this.state.help,
        activation: this.state.activation,
        activation_number: this.state.activation_number,
        deactivation: this.state.deactivation,
        tags: this.state.tags.map(i => i.text),
        expirate_date: this.state.expirate_date,
        typeId: this.state.typeId,
        picture: this.state.picture,
        categoryId: this.state.categoryId,
        operatorId: this.state.operatorId,
        price: this.state.price,
        status: this.state.status,
      },
      refetchQueries: [{ query }],
    })
      .then(this.props.history.push('/dashboard'));
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
      return null;
    }
    const { tags } = this.state;
    const { service } = this.props.data;
    return (
      <div className={`${sass.section} ${sass.services} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <h3 className={sass.section__title}> سرویس مهارت گفتن و شنیدن </h3>
            <div className={sass.flex}>
              <div className={`${sass.item_4} ${sass.mr_0}`}>
                <ServiceStatics count={service.view} title="دفعات بازدید سرویس" icon={sass.icon_eye} />
              </div>
              <div className={sass.item_4}>
                <ServiceStatics count={12} title=" تعداد دفعات اجرای سرویس " icon={sass.icon_check} />
              </div>
              <div className={sass.item_4}>
                <ServiceStatics count={service.like} title="تعداد لایک" icon={sass.icon_cancel2} />
              </div>
            </div>
            <div>
              <div className={sass.form}>
                <form onSubmit={this.submitForm}>
                  <div className={sass.pd_10}>
                    <label className={sass.block} htmlFor="nameGet">نام سرویس</label>
                    <div className={sass.flex}>
                      <div className={sass.item_8}>
                        <input
                          className={`${sass.block} ${sass.w90}`}
                          type="text"
                          name="name"
                          id="nameGet"
                          value={this.state.name}
                          onChange={e => this.setState({ name: e.target.value })} />
                      </div>
                      <div className={`${sass.item_4} ${sass.pd_10}`}>
                        <label className={sass.pd_10} htmlFor="isFeatureGet">
                          <input
                            type="checkbox"
                            name="isFeatured"
                            value
                            checked={this.state.isFeatured}
                            id="isFeatureGet"
                            onChange={e => this.setState({ isFeatured: e.target.checked })} />
                          <span>فیچر</span>
                        </label>
                      </div>
                      <div className={`${sass.item_4} ${sass.pd_10}`}>
                        <label className={sass.pd_10} htmlFor="status">
                          <input
                            type="checkbox"
                            name="status"
                            checked={this.state.status}
                            id="status"
                            onChange={e => this.setState({ status: e.target.checked })} />
                          <span>وضعیت</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={sass.pd_10}>
                    <label htmlFor="descriptionGet"> توضیحات</label>
                    <textarea
                      className={`${sass.block} ${sass.pd_10} ${sass.form__textarea}`}
                      type="checkbox"
                      name="description"
                      value={this.state.description}
                      id="descriptionGet"
                      onChange={e => this.setState({ description: e.target.value })} />
                  </div>
                  <div className={`${sass.flex} ${sass.flex_baseline}`}>
                    <div className={`${sass.item_6} ${sass.pd_10}`}>
                      <h4 className={sass.form__title}>اپراتور</h4>
                      <div className={sass.pd_10} >
                        {data.operators.map(st => (
                          <label key={`operator_${st.id}`} htmlFor={`operator_${st.id}`}>
                            <input
                              id={`operator_${st.id}`}
                              type="radio"
                              name="operator_id"
                              checked={this.state.operatorId === st.id}
                              value={st.id}
                              onChange={this.handleRadio} />
                            <span>{st.name}</span>
                          </label>),
                        )}
                      </div>
                    </div>
                    <div className={sass.item_6}>
                      <h4 className={sass.form__title}>نوع سرویس</h4>
                      <div className={sass.pd_10}>
                        {data.serviceTypes.map(st => (
                          <label key={`serviceType_${st.id}`} htmlFor={`serviceType_${st.id}`}>
                            <input
                              id={`serviceType_${st.id}`}
                              type="radio"
                              name="type_id"
                              checked={this.state.typeId === st.id}
                              value={st.id}
                              onChange={this.handleRadio} />
                            <span>{st.name}</span>
                          </label>),
                        )}
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
                          <option selected> -- انتخاب کنید  -- </option>
                          {data.categories.map(st =>
                            <option key={`category_${st.id}`} selected={this.state.categoryId === st.id} value={st.id}>{st.name}</option>,
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
                        <label className={sass.block} htmlFor="activationGet">کدفعالسازی</label>
                      </h4>
                      <div>
                        <input
                          className={`${sass.block} ${sass.w90}`}
                          type="text"
                          name="activation"
                          id="activationGet"
                          value={this.state.activation}
                          onChange={e => this.setState({ activation: e.target.value })} />
                      </div>
                    </div>
                    <div className={`${sass.item_6} ${sass.pd_10}`}>
                      <h4 className={sass.form__title}>
                        <label className={sass.block} htmlFor="deactivationGet">کد غیرفعالسازی</label>
                      </h4>
                      <div>
                        <input
                          className={`${sass.block} ${sass.w90}`}
                          type="text"
                          name="deactivation"
                          id="deactivationGet"
                          value={this.state.deactivation}
                          onChange={e => this.setState({ deactivation: e.target.value })} />
                      </div>
                    </div>
                    {(true) ? (
                      <div className={`${sass.item_6} ${sass.pd_10}`}>
                        <div>
                          <h4 className={sass.form__title}>
                            <label className={sass.block} htmlFor="activationNumGet">شماره فعالسازی</label>
                          </h4>
                          <div>
                            <input
                              className={`${sass.block} ${sass.w90}`}
                              type="text"
                              name="activation_number"
                              id="activationNumGet"
                              value={this.state.activation_number}
                              onChange={e => this.setState({ activation_number: e.target.value })} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <h2 />
                    )}
                  </div>

                  <div className={sass.flex}>
                    <div className={`${sass.item_6} ${sass.pd_10}`}>
                      <h4 className={sass.form__title}>
                        <label className={sass.block} htmlFor="helpGet">راهنما</label>
                      </h4>
                      <div>
                        <textarea
                          className={`${sass.block}  ${sass.form__textarea}`}
                          type="textarea"
                          name="help"
                          id="helpGet"
                          value={this.state.help}
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
                          value={this.state.price}
                          onChange={e => this.setState({ price: e.target.value })} />
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
        </div>
      </div>
    );
  }
}
export default withRouter(ServiceEdit);
