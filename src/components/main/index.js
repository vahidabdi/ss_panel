// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/components/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';

// Routing via React Router
import {
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

/* ReactQL */

// import { WhenNotFound } from 'src/components/routes';
import RequireAuth from 'src/components/requireAuth';
import Login from 'src/components/login';
import Dashboard from 'src/components/dashboard';
import Setting from 'src/components/setting';
import Service from 'src/components/service';
import Services from 'src/components/services';
import Banner from 'src/components/banner';


// ----------------------

export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route exact path="/dashboard/setting" component={RequireAuth(Setting)} />
      <Route exact path="/dashboard/services" component={RequireAuth(Services)} />
      <Route exact path="/dashboard/service" component={RequireAuth(Service)} />
      <Route exact path="/dashboard/service/:service_id" component={RequireAuth(Service)} />
      <Route exact path="/dashboard/banner" component={RequireAuth(Banner)} />
    </Switch>
  </div>
);
