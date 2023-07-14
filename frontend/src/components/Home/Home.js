import React from "react";
import { Link } from "react-router-dom";
import ProductsIndexCom from "../ProductsIndexComponent/productsIndexCom";
import sb from '../../assets/summer-banner2.png';
import lb from '../../assets/life_style_nike.webp';
import feat_left from '../../assets/featured-left-image.jpg';
import feat_right from '../../assets/featured-right-image.webp';
import member_banner from '../../assets/become-a-nike-member.webp';
import ClassicIndexComp from "../ClassicIndexComp/ClassicIndexComp";
import './home.css';

function Home() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <div className="home-wrapper">
      <div className="summer-banner">
        
        <img src={sb} alt="" />
          <p className="banner-text">20% OFF SELECT STYLES</p>
          <p className="second-banner-text">Members: Sign in and use code SUMMER to save. Ends 6.36. Exclusions apply.</p>
          <Link className="shop-button" to='/products' onClick={scrollToTop}>Shop</Link>
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
          <Link className="another-shop-button" to='/products' onClick={scrollToTop}>Shop</Link>
          <Link className="another-another-shop-button" to='/products' onClick={scrollToTop}>Shop</Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/> 
      <div className="iconic-comp" >
        <p>Always Iconic</p>
        <ClassicIndexComp/>
      </div>
      <br/>
      <br/>
      <br/> 
      <div className="member-banner">
        <p>Nike Membership</p>
        <img src={member_banner} />
        <h2 className="member-banner-text" >BECOME A MEMBER</h2>
        <h3 className="subheading-member-banner" >Sign up for free. Join the community.</h3>
        <Link className="join-us-homepage-link" to='/signup' >Join Us</Link>
      </div>
    </div>
    </>
  )
}

export default Home;