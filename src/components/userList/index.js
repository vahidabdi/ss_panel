import React from 'react';
import { graphql } from 'react-apollo';
import sass from 'src/styles/index.scss';
import query from 'src/graphql/queries/socialUser.gql';
import User from 'src/components/userItem';

/* eslint no-unused-vars: ["error", { "args": "none" }] */

// @graphql(query, { options: props => ({ variables: {
//   typeId: props.typeId, operatorId: props.operatorId, page: props.page } }) })

@graphql(query)
class UserList extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div className="loader-box"><div className="loader" /></div>;
    }
    return (
      <div className={`${sass.section} ${sass.services} ${sass.nooverflow} ${sass['section--sm']}`}>
        <div className={sass.section__wrap}>
          <div className={sass.section__main}>
            <div className={`${sass.flex}  ${sass.flex_baseline}`}>
              <div className={`${sass.pageLanding} ${sass.item_4}`}>
        page
              </div>

            </div>
            <div className={sass.table__box}>
              <table className={sass.table}>
                <thead>
                  <tr className={sass.table__head}>
                    <th>شناسه کاربر</th>
                    <th>نام کاربر </th>
                    <th>شماره تماس </th>
                  </tr>
                </thead>
                <tbody>
                  {data.socialUsers.map(st =>
                    <User key={st.id} socialUsers={st} />,
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={sass.pageLanding__bottom}>
          page
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
