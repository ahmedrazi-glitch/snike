import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductsIndexPage from '../ProductsIndexPage/ProductsIndexPage';
import { fetchSearchResults, fetchCategoryProducts, fetchProducts } from "../../store/products";
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import "./SecondNavBar.css";


function SecondNavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.session.user);

  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearchResults(searchQuery));
    history.push(`/search/${searchQuery}`);
    // Clear search query
    setSearchQuery('');
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleNewAndFeatured = (e) => {
    e.preventDefault();
    dispatch(fetchProducts());
  }




  return (
    <>
      <div className="second-nav-bar" style={{ backgroundColor: 'white' }}>

        <div className="logo-container" >
          <Link to="/" >
            <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
          </Link>
        </div>

        {/* <div className="middle-nav-bar">  */}
        <div className="nav-links-container">
          <div className="category-buttons">

            <Link to={`/products/all`} className="all-category-button"> New&nbsp;&&nbsp;Featured </Link>
            {/* <button className="all-category-button" onClick={() => handleNewAndFeatured('mens')} >New&nbsp;&&nbsp;Featured</button> */}
          
            <Link to={`/products/mens`} className="men-category-button"> Men </Link> 

            <Link to={`/products/womens`} className="women-category-button"> Women </Link>

            <Link to={`/products/kids`} className="kids-category-button"> Kids </Link>
        
            <Link to="/search?q=Accessories" className="access-category-button" > Accessories </Link>  

            <Link to={`/products/sale`} className="sale-category-button"> Sale </Link>
          </div>
        </div>

        <div className="bag-container" >
          <div className="search-bar">
            <form className="search-bar" onSubmit={handleSearch} >
              <button id="search-button" ><FiSearch /></button>
              <input
                id="search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <div className="bag-icon" >
            {currentUser ? 
              <Link to={`/cart`}>
                <i  id="bag" class="fas fa-shopping-bag"></i>
              </Link>
              :
              <Link to={`/login`}>
                <i  id="bag" class="fas fa-shopping-bag"></i>
              </Link>
            }
          </div>
        </div>

      </div>
      {/* {activeCategory === 'men' && <ProductsIndexPage />} */}
    </>
  );
}

export default SecondNavBar;