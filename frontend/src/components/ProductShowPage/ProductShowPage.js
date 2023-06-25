import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import { FaStar } from 'react-icons/fa';
import './productShowPage.css';


// import ReviewsIndex from "../ReviewsIndex";
// import { createReview, fetchReview, updateReview } from "../../store/reviews"; 
// Import of the reviews comp


function ProductShowPage() {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [size, setSize] = useState("");
  const [showReviews, setShowReviews] = useState(false);
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const reviews = useSelector(state => Object.values(state.reviews));

  // console.log(reviews);
  // review is an array of objects. Each object is a review and has a body, title, rating that we will use. 



  const sizeButtons = [];
  for (let i = 0; i < 17; i++) {
    const size = i * 0.5 + 6;
    sizeButtons.push(size);
  }

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  // console.log(product.payload);

  const handleSizeClick = (size) => {
    // setSize(newSize);
    setSelectedSize(size);
  };

  const toggleShowReviewIndex = () => {
    setShowReviews(!showReviews);
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
          {/* Nike Air Zoom Pegasus 38 */}
          {product.name}
          <div className="sub-title">
            {product.category}
            {/* Men's Shoe  */}
            <br/>
            {/* $155.59 */}
            ${product.price}
          </div>  
        </div>

        <div className="select-product-sizes">
          <p>Select size</p>
            <div className="product-sizes">
              {sizeButtons.map((size) => (
                <button
                  key={size}
                  className="size-button" // Add a class for styling
                  style={selectedSize === size ? { border: "1px solid #111" } : { border: "#dcd8d8 solid 1px" }}
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
          {/* The Nike Air Zoom Pegasus 38 delivers responsive cushioning and a secure fit. The mesh upper helps provide durability and breathability, while the Nike Zoom unit helps cushion your stride.  */}
          {product.description}
        </div>
        <div id="breakline"></div>
        <div className="free-shipping-and-returns-header" >
          <h1> Free Shipping &amp; Returns</h1>
        </div>
        <div id="breakline"></div>
        <div className="product-reviews">
          <button id="review-button" onClick={() => setShowReviews(!showReviews)}>     
            <p>
              Reviews ({reviews.length}) <span id="v">╲╱</span>
            </p>
          </button>
        {/* </div> */}


          {/* Conditional rendering for the review dropdown */}
          {showReviews && (
            <div className="review-dropdown">
              {reviews.map((review, index) => (
                <div className="review" key={index}>
                  <h4>{review.title}</h4>
                  {/* Render the star ratings based on review.rating */}
                  <div className="star-ratings">
                    {/* {Array.from({ length: review.rating }, (_, i) => ( */}
                      {/* <FaStar className="star filled" />
                      <FaStar className="star filled" />
                      <FaStar className="star filled" />
                      <FaStar className="star filled" />
                      <FaStar className="star filled" /> */}
                    {/* ))}
                    {/* {Array.from({ length: 5 - review.rating }, (_, i) => ( */}
                      {/* <FaStar  className="star" />
                      <FaStar  className="star" />
                      <FaStar  className="star" />
                      <FaStar  className="star" />
                      <FaStar  className="star" /> */}
                    {/* ))} */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`star ${i < review.rating ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                  <p>{review.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>



        <div id="breakline"></div>
        <div className="review-form" >
            
        </div>
      </div>
    </div>
    </>
  ) : null;
}

export default ProductShowPage;