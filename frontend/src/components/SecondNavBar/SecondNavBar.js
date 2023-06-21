import React from "react";
import { Link } from "react-router-dom";
import "./SecondNavBar.css";


function SecondNavBar() {


  return (
    <>
      <div className="second-nav-bar" style={{ backgroundColor: 'white' }}>
        <Link to="/" >
          <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
        </Link>

        <div className="middle-nav-bar"> 
          <div className="category-buttons">

            <button onClick={''} className="category-button"> New&nbsp;&&nbsp;Featured </button>
          
            <button onClick={''} className="category-button"> Men </button> 

            <button onClick={''} className="category-button"> Women </button>

            <button  onClick={''}className="category-button"> Kids </button>
        
            <Link to="/search?q=Accessories"> <button className="category-button"> Accessories </button></Link>  

            <button onClick={''}className="category-button"> Sale </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default SecondNavBar;