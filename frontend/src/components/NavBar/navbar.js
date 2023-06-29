import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
// import { logout, login } from "../../store/session";
import './Navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const firstName = sessionUser ? sessionUser.firstName : '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = (e) => {
    e.preventDefault()
    // dispatch(clearCartItems());
    dispatch(sessionActions.logout())
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // dispatch(clearCartItems());
    dispatch(sessionActions.login({ email, password }))
  }

  let sessionLinks;
  if (sessionUser) {
    return (
      <>
        <div className="navbar">
          <ul className="navbar-menu">
            {sessionActions.login ? (
              <>
              <div className='bigDiv' >
                <div className="navbar-links">
                    <span className="navbar-link" id='justName'>Hi, {firstName}</span>
                  </div>
                  <div className="navbar-links">
                    <button className="navbar-link" onClick={handleLogout}>Sign Out</button>
                  </div>
              </div>
              </>
            ) : (
              <>
                {/* <li className="navbar-item navbar-item-right">
                  <button className="navbar-button" onClick={handleLogin}>Log In</button>
                </li>
                <li className="navbar-item navbar-item-right">
                  <button className="navbar-button">Join Us</button>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="navbar" style={{ backgroundColor: 'ultralight gray' }}>
          {/* <NavLink exact to="/">
            <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" className="kutta" style={{ width: '70px', height: 'auto' }} />  
          </NavLink>  */}
          <div className="navbar-links">
            <NavLink className="navbar-link" to="/signup">Join Us</NavLink>
            <NavLink className="navbar-link" to="/login">Sign In</NavLink>
            {sessionLinks}
          </div>
        </div>
      </>
    );
  }
}
export default Navigation;




