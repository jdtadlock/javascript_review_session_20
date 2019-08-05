import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
  state = {
    email: '',
    password: '',
    isLogin: false
  }

  onSubmit = (event) => {
    event.preventDefault();

    let url = this.state.isLogin ? '/auth/login' : '/auth/register';

    axios.post(url, {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.setState({
        email: '',
        password: ''
      });

      localStorage.setItem('token', res.data.token);

      // Redirect to root url route
      this.props.history.push('/');
    }).catch(err => {
      console.log(err.response);
    });
  }

  handleChange = (event) => {
    // console.log(event.target.value); // what is being typed in the box
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleSwitch = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="auth-form column">
        <h3>{this.state.isLogin ? 'Login' : 'Register'}</h3>

        <input name="email" onChange={this.handleChange} type="text" placeholder="Email" value={this.state.email} />

        <input name="password" onChange={this.handleChange} type="password" placeholder="Password" value={this.state.password} />

        <button>Submit</button>

        <div className="toggle-btn row justify-center">
          <span>Register</span>
          <div className="toggle-switch" onClick={this.toggleSwitch}>
            <span className={this.state.isLogin ? 'toggle' : ''}></span>
          </div>
          <span>Login</span>
        </div>
      </form>
    )
  }
}

export default withRouter(Form);