import React from 'react';
import sass from 'src/styles/index.scss';
import { graphql } from 'react-apollo';
import ServiceNewQuery from 'src/graphql/queries/service_new.gql';
// import OperatorNew from 'src/graphql/mutations/operator_new.gql';
import SettingItemBox from 'src/components/settingItemBox';
import CreateOperator from 'src/components/createOperator';
import CreateServiceCategory from 'src/components/createServiceCategory';
import CreateServiceType from 'src/components/createServiceType';

@graphql(ServiceNewQuery)
// @graphql(OperatorNew)
class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator_name: '',
      type_name: '',
      category_name: '',
    };

    // this.submitForm = this.submitForm.bind(this);
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    
    return (
      <div className={`${sass.section} ${sass.setting}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div className={sass.item_4}>
              <div className={sass['card-d']}>
                <h2 className={sass['card-d__title']}>لیست محتوا</h2>
                {data.categories.map(cat =>
                  <SettingItemBox key={`${cat.id}_cat`} x={cat} />,
                )}
                <div className={sass['card-d__btn']}>
                  <CreateServiceCategory />
                </div>
              </div>
            </div>
            <div className={sass.item_4}>
              <div className={sass['card-d']}>
                <h2 className={sass['card-d__title']}>نوع سرویس</h2>
                {data.serviceTypes.map(t =>
                  <SettingItemBox key={`${t.id}_type`} x={t} />,
                )}
                <div className={sass['card-d__btn']}>
                  <CreateServiceType />
                </div>
              </div>
            </div>
            <div className={sass.item_4}>
              <div className={sass['card-d']}>
                <h2 className={sass['card-d__title']}>اپراتورها</h2>
                {data.operators.map(op =>
                  <SettingItemBox key={`${op.id}_op`} x={op} />,
                )}
                <div className={sass['card-d__btn']}>
                  <CreateOperator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
