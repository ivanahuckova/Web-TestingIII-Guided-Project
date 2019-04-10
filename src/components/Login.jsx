import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  state = { flashMessage: '', username: '', password: '' };

  onChange = (field, value) => {
    if (/^[a-z0-9]+$/i.test(value)) {
      this.setState({ [field]: value });
    }
  };

  onLogin = () => {
    axios
      .post('login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.setState({ flashMessage: `Welcome, ${res.data.username}` });
      })
      .catch(res => {
        this.setState({ flashMessage: res.message });
      });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Login Screen {this.props.lady}</h1>
          <label htmlFor="usernameInput">username</label>
          <input
            id="usernameInput"
            value={this.state.username}
            className="pretty-input"
            onChange={e => this.onChange('username', e.target.value)}
            placeholder="username"
            type="text"
          />
          <br />
          <label htmlFor="passwordInput">password</label>
          <input
            id="passwordInput"
            value={this.state.password}
            className="pretty-input"
            onChange={e => this.onChange('password', e.target.value)}
            placeholder="password"
            type="text"
          />
        </div>
        {this.state.username && this.state.password && (
          <button onClick={this.onLogin} data-testid="loginButton">
            Login Now!
          </button>
        )}
        <div>{this.state.flashMessage}</div>
      </div>
    );
  }
}
