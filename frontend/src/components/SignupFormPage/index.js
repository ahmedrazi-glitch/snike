import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
// import '../../../assets/logo/nikeLogo.png';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="signup-form-container" >
      <div className="signup-form-header-container">
        <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" className="signup-form-logo"/>
        <h1 className='header' >Now let's make you a Nike member.</h1>  
      </div>
      <form onSubmit={handleSubmit} className="centered-form">
        
        <ul className="error-list">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <div className="form-group">
          <label htmlFor="email">
            
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </label>
        </div>

        <div className="form-group inline">
          <label htmlFor="firstName" >
            
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
            />
          </label>
          <label htmlFor="lastName" >
            
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="password">
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
          </label>
        </div>

        <div className="checkbox-group">
          {/* <input type="checkbox" id="terms" />
          <label htmlFor="notification">
            Sign up for emails to get updates from Snike on products, <br/> offers and your Member benefits.
          </label> */}
        </div>

        {/* <div className="checkbox-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I Agree to Snike's <a className="PP" >Privacy Policy</a> and <a className="TOU">Terms of Use.</a>
          </label>
        </div> */}
        <div className="button-container">
          <button type="submit" className="submit-button">
            Create Account
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignupFormPage;


