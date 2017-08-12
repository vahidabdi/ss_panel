import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import currentUser from 'src/graphql/queries/current_user.gql';

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
      return <WrappedComponent {...this.props} />;
    }
  }
  return RequireAuth;
};
