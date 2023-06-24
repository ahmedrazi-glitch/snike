import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductsIndexPage from '../ProductsIndexPage/ProductsIndexPage';
import "./SecondNavBar.css";


function SecondNavBar() {

  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  return (
    <>
      <div className="second-nav-bar" style={{ backgroundColor: 'white' }}>

        <div className="logo" >
          <Link to="/" >
            <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
          </Link>
        </div>

        {/* <div className="middle-nav-bar">  */}
        <div className="nav-links-container">
          <div className="category-buttons">

            <Link to={`/products/all`} className="all-category-button"> New&nbsp;&&nbsp;Featured </Link>
          
            <Link to={`/products/mens`} className="men-category-button"> Men </Link> 

            <Link to={`/products/womens`} className="women-category-button"> Women </Link>

            <Link to={`/products/kids`} className="kids-category-button"> Kids </Link>
        
            <Link to="/search?q=Accessories" className="access-category-button" > Accessories </Link>  

            <Link to={`/products/sale`} className="sale-category-button"> Sale </Link>
          </div>
        </div>

        <div className="bag-container" >
          <i  id="bag" class="fas fa-shopping-bag"></i>
        </div>

      </div>
      {/* {activeCategory === 'men' && <ProductsIndexPage />} */}
    </>
  );
}

export default SecondNavBar;