import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    //  console.log(this.props);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // console.log('clicked on login')
    // console.log(this.state.credentials)
    axios.post('http://localhost:5001/api/login',  this.state.credentials).then(res => {
     localStorage.setItem('token', res.data.token)
     this.props.history.push('/protected');
    }).catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;