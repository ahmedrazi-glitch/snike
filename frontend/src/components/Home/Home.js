import React from "react";
import { Link } from "react-router-dom";
import ProductsIndexCom from "../ProductsIndexComponent/productsIndexCom";
import sb from '../../assets/summer-banner2.png';
import lb from '../../assets/life_style_nike.webp';
import feat_left from '../../assets/featured-left-image.jpg';
import feat_right from '../../assets/featured-right-image.webp';
import ClassicIndexComp from "../ClassicIndexComp/ClassicIndexComp";
import './home.css';

function Home() {


  return (
    <>
    <div className="home-wrapper">
      <div className="summer-banner">
        
        <img src={sb} alt="" />
          <p className="banner-text">20% OFF SELECT STYLES</p>
          <p className="second-banner-text">Members: Sign in and use code SUMMER to save. Ends 6.36. Exclusions apply.</p>
          <Link className="shop-button" to='/products/mens' >Shop</Link>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="lifestyle-banner">
        <p className="lifestyle-banner-text" >Connect With Mother Nature</p>
        <img src={lb} alt="" />
      </div>
      <br/>
      <br/>
      <br/>
        <ProductsIndexCom/>  
      <br/>
      <br/>
      <br/> 
      <div className="featured-banners" >
        <p>Featured</p>
        <div className="featured-photos" >
          <img src={feat_left} />
          <img src={feat_right} />
          <Link className="another-shop-button" to='/products/mens' >Shop</Link>
          <Link className="another-another-shop-button" to='/products/mens' >Shop</Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/> 
      <div className="iconic-comp" >
        <p>Always Iconic</p>
        <ClassicIndexComp/>
      </div>
    </div>
    </>
  )
}

export default Home;