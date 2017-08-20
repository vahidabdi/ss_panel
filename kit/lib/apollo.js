// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
import { ApolloClient } from 'react-apollo';
import { createNetworkInterface } from 'apollo-upload-client';

/* ReactQL */
import config from 'kit/config';

// ----------------------

const networkInterface = createNetworkInterface({
  uri: config.graphQLEndpoint,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  },
}]);

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
export function createClient(opt = {}) {
  return new ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
  }, opt));
}

// Creates a new browser client
export function browserClient() {
  return createClient({
    networkInterface,
  });
}
