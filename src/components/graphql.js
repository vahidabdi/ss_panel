// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql } from 'react-apollo';

/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
// import allMessages from 'src/graphql/queries/all_messages.gql';
import serviceType from 'src/graphql/queries/service_type.gql';

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
@graphql(serviceType)
export default class GraphQLMessage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      serviceType: PropTypes.shape({
        name: PropTypes.string,
        engName: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
    data: {
      serviceType: {
        name: null,
        engName: null,
      },
    },
  }

  render() {
    const { data } = this.props;

    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // key on our returned object
    const serviceTypeName = data.serviceType && data.serviceType.name;

    // Apollo will tell us whether we're still loading.  We can also use this
    // check to ensure we have a fully returned response
    if (data.loading) {
      return null;
    }
    return (
      <div>
        <h2>Message from GraphQL server: <em>{serviceTypeName}</em></h2>
      </div>
    );
  }
}
