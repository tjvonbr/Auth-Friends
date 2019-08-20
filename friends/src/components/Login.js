import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  

  const handleChange = event => {
    setCredentials({
      ...credentials, [event.target.name]: event.target.value
    })
  }

  const login = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        setCredentials({ username: '', password: '' });
        props.history.push('/api/friends')
      })
      .catch(error => console.log(error.response))
  }

  return (
    <div className="login-container">
      <form className="form">
        <h3 className="login-header">Please enter your login information!</h3>
        <input 
          className="input-field"
          type='text'
          placeholder="Please enter your username."
          name='username'
          value={ credentials.username }
          onChange={ handleChange }
        />
        <input 
          className="input-field"
          type='password'
          placeholder="Please enter your password."
          name='password'
          value={ credentials.password }
          onChange={ handleChange }
        />
        <button className="btn login-btn" onClick={ login }>Log in</button>
      </form>
    </div>
  );
};

export default Login;