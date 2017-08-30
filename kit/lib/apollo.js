// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
import { ApolloClient } from 'react-apollo';
import { HTTPFetchNetworkInterface, printAST } from 'apollo-client';
import { extractFiles } from 'extract-files';

/* ReactQL */
import config from 'kit/config';

class UploadHTTPFetchNetworkInterface extends HTTPFetchNetworkInterface {
  fetchFromRemoteEndpoint({ request, options }) {
    // Continue if uploads are possible
    if (typeof FormData !== 'undefined') {
      // Extract any files from the request variables
      const files = extractFiles(request.variables, 'variables');

      // Continue if there are files to upload
      if (files.length) {
        // Convert query AST to string for transport
        // request.query = printAST(request.query)

        // Construct a multipart form
        const formData = new FormData();

        formData.append('operationName', request.operationName || '');
        formData.append('query', printAST(request.query));
        console.log("sadasdsadasdsadasd################################3");
        console.log(request.variables);
        request.variables.picture = 'picture';
        console.log(request.variables);
        formData.append('variables', JSON.stringify(request.variables || {}));
        files.forEach(({ file }) => {
          formData.append('picture', file);
        });

        // Send request
        return fetch(this._uri, {
          method: 'POST',
          body: formData,
          ...options
        });
      }
    }

    // Standard fetch method fallback
    return super.fetchFromRemoteEndpoint({ request, options });
  }
}

function createNetworkInterface({ uri, opts = {} }) {
  return new UploadHTTPFetchNetworkInterface(uri, opts);
}

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
    // dataIdFromObject: r => r.id,
  });
}
