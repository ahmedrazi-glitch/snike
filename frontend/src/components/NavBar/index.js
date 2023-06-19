import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../store/session";
import { useState } from "react";
import './NavBar.css';


function NavBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);

  const handleLogout = (e) => {
    e.preventDefault()
    // dispatch(clearCartItems());
    dispatch(logout())
  }


  if (currentUser) {
    return (
      <>
        <div className="navbar" style={{ backgroundColor: 'lightgray' }}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#" className="navbar-button">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-button">About</a>
            </li>
            {loggedIn ? (
              <>
                <li className="navbar-item navbar-item-right">
                  <span className="navbar-greeting">Hi, {username}</span>
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
    )
  }
}

export default NavBar;