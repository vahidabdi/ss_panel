import React from 'react';

import { graphql } from 'react-apollo';
import login from 'src/graphql/mutations/login.gql';
import query from 'src/graphql/queries/current_user.gql';
import sass from 'src/styles/index.scss';

/* eslint no-unused-vars: ["error", { "args": "none" }] */

@graphql(query)
@graphql(login)
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '', error: '' };
    this.submitForm = this.submitForm.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (!data.loading && data.currentUser) {
      return this.props.history.push('/dashboard');
    }
    return null;
  }

  submitForm(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.login.token);
        this.props.history.push('/dashboard');
      }).catch(error => {
        this.setState({ error: 'خطا در ورود' });
      });
  }

  renderError() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return null;
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }
    return (
      <div className={`${sass['page-wrap']} ${sass['login-page']}`}>
        <div className={sass.login}>
          <form onSubmit={this.submitForm}>
            <input
              name="username"
              value={this.state.username}
              type="text"
              placeholder="نام کاربری"
              onChange={event => this.setState({ username: event.target.value })} />
            <input
              name="password"
              value={this.state.password}
              type="password"
              placeholder="پسورد"
              onChange={event => this.setState({ password: event.target.value })} />
            <label className="remember" htmlFor="remember">
              <input
                id="remember"
                name="remember"
                value={this.state.password}
                type="checkbox"
                onChange={event => this.setState({ remember: event.target.value })} />
مرا به خاطر بسپار
            </label>
            <input type="submit" value="ورود" />
            <p className="error">{this.renderError()}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
