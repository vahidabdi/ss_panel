import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import currentUser from 'src/graphql/queries/current_user.gql';
import sass from 'src/styles/index.scss';
import Header from 'src/components/header';

export default WrappedComponent => {
  @graphql(currentUser)
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.currentUser) {
        nextProps.history.push('/');
      }
    }
    render() {
      if (this.props.data.loading) {
        return null;
      }
      return (
        <div className={sass['page-wrap']}>
          <header className={`${sass.section} ${sass.header}`}>
            <div className={sass.section__wrap}>
              <Header />
            </div>
          </header>
          <div className={sass['page-wrap']}>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }
  return RequireAuth;
};
