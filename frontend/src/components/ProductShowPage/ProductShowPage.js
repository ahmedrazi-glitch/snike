import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import './productShowPage.css';


// import ReviewsIndex from "../ReviewsIndex";
// import { createReview, fetchReview, updateReview } from "../../store/reviews"; 
// Import of the reviews comp


function ProductShowPage() {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [size, setSize] = useState("");
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  // const reviews = useSelector(state => Object.values(state.reviews))

  const buttons = [];

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  // console.log(product.payload);

  const handleSizeClick = (newSize) => {
    // setSize(newSize);
    // setSelectedSize(newSize);
  };

  const toggleShowReviewIndex = () => {
    // setShowReviewIndex(!showReviewIndex)
  } 
  // return 1 ? hello : world ;
  return product ? (
    <>
    <div className="product-detail">
      <div className="product-image">
        <img src={product.photoUrl} alt="Product" />
      </div>
      <div className="product-info">
        <div className="product-title">
          Nike Air Zoom Pegasus 38
          <div className="sub-title">
            
            Men's Shoe 
            <br/>
            $155.59
          </div>  
        </div>

        <div className="select-product-sizes">
          <p>Select size</p>
            <div className="product-sizes">
              
              {/* <button className="size-button">7</button>
              <button className="size-button">8</button>
              <button className="size-button">9</button>
              <button className="size-button">10</button> */}
              {Array.from({ length: 17 }, (_, i) => i * 0.5 + 6).map((size) => (
                <button
                    key={size}
                    style={
                        selectedSize === size
                            ? { border: "1px solid #111" }
                            : { border: "#dcd8d8 solid 1px" }
                    }
                    onClick={() => handleSizeClick(size)}
                >
                    {size}
                </button>
              ))}
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="add-to-cart">
          <button className="cart-button">Add to Cart</button>
        </div>
        <div className="product-description">
          The Nike Air Zoom Pegasus 38 delivers responsive cushioning and a secure fit. The mesh upper helps provide durability and breathability, while the Nike Zoom unit helps cushion your stride. 
        </div>
        <div id="breakline"></div>
        <div className="free-shipping-and-returns-header" >
          <h1> Free Shipping &amp; Returns</h1>
        </div>
        <div id="breakline"></div>
        <div className="product-reviews">
          {/* <select className="review-dropdown">
            <option value="">Select a review</option>
            <option value="review1">Review 1</option>
            <option value="review2">Review 2</option>
            <option value="review3">Review 3</option>
          </select> */}
          {/* <button id="review-button" onClick={''}>
            <h5>Reviews&nbsp;({}) <span id="v">╲╱</span> </h5>
          </button> */}
          {/* <div className="reviews-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              <h5>Reviews ({reviews.length}) <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span></h5>
            </button>
            {isOpen && (
              <div className="dropdown-content">
                {reviews.map((review, index) => (
                  <p key={index}>{review}</p>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
    </>
  ) : null;
}

export default ProductShowPage;