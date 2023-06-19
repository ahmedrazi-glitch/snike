import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import { logout, login } from "../../store/session";
import './Navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

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
    // sessionLinks = (
    //   <ProfileButton user={sessionUser} />
    // );
    // sessionUser={sessionUser}
    return (
      <>
        <div className="navbar" style={{ backgroundColor: 'lightgray' }}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#" className="navbar-button">Home</a>
            </li>
            {/* <li className="navbar-item">
              <a href="#" className="navbar-button">About</a>
            </li> */}
            {sessionActions.login ? (
              <>
                <li className="navbar-item navbar-item-right">
                  <span className="navbar-greeting">Hi, {sessionUser.username}</span>
                </li>
                <li className="navbar-item navbar-item-right">
                  <button className="navbar-button" onClick={handleLogout}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="navbar-item navbar-item-right">
                  <button className="navbar-button" onClick={handleLogin}>Log In</button>
                </li>
                <li className="navbar-item navbar-item-right">
                  <button className="navbar-button">Join Us</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </>
    );
    
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}
export default Navigation;




