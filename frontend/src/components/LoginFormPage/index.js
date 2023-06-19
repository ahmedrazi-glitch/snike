import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <>
      <div className="signIn-header-container">
        <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" className="logo"/>
        <h1 className='header' >Enter Email and password to sign in.</h1>  
      </div>
      <form onSubmit={handleSubmit} className="signIn-centered-form">
        
        <ul className="signIn-error-list">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <div className="signIn-form-group">
          <label>
            
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </label>
        </div>

        <div className="signIn-form-group">
          <label>
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
        </div>

        <div className="login-terms">

          <label htmlFor="agreement">By continuing, I Agree to Snike's <a className="PP">Privacy Policy</a> and <a className="TOU">Terms of Use.</a>
          </label>
        </div>
        

        <div className="signIn-button-container">
          <button type="submit" className="signIn-button">
            Sign In
          </button>
        </div>
      </form>

      
      <div className="demo-button-container">
          <button type='submit' className='demologin' onClick={() => dispatch(sessionActions.login({ email: 'demo@user.io', password: 'password' }))}>Demo Login</button>
        </div>
    </>
  );
}

export default LoginFormPage;


