import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
  state = { flashMessage: '', username: '', password: '' }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  onLogin = () => {
    axios.post('login', {
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
  }

  render() {
    return (
      <div>
        <div>
          username <input
            className='input'
            onChange={e => this.onChange('username', e.target.value)}
            placeholder='username'
            type="text"
          /> <br />
          password <input
            className='input'
            onChange={e => this.onChange('password', e.target.value)}
            placeholder='password'
            type="text"
          />
        </div>
        <button onClick={this.onLogin}>
          Login
        </button>
        <div>{this.state.flashMessage}</div>
      </div>
    );
  }
}
