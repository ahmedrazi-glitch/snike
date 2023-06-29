import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createCartItem } from "../../store/cartItems";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import ReviewsIndex from "../ReviewsIndex/ReviewsIndex";
import './productShowPage.css';

function ProductShowPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const [selectedSize, setSelectedSize] = useState(null);
  // const [size, setSize] = useState("");
  const [showReviews, setShowReviews] = useState(false);
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const reviews = useSelector(state => Object.values(state.reviews));
  // const [cartButtonClicked, setCartButtonClicked] = useState(false);
  const [errors, setErrors] = useState([]);

  // console.log(product.sizes);


  const sizeButtons = [];
  for (let i = 0; i < 17; i++) {
    const sizeForButtons = i * 0.5 + 6;
    sizeButtons.push(sizeForButtons);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchProduct(productId));
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleCartClick = (e) => {
    // setCartButtonClicked(true);
    e.preventDefault();

    const cartItem = {
      user_id: currentUser.id,
      product_id: productId,
      options: selectedSize,
      quantity: 1
    };

    if (setSelectedSize === null) {
      // const setSelectedSize = '6';
      // dispatch(createCartItem(() => {
      //   const cartItem = {
      //     user_id: currentUser.id,
      //     product_id: productId,
      //     options: selectedSize,
      //     quantity: 1
      //   };
      // }));
      setErrors(['Please select a size.']);
    } else {
      dispatch(createCartItem(cartItem));
    }
  }

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
          {product.name}
          <div className="sub-title">
            {product.category}
            <br/>
            ${product.price}
          </div>  
        </div>

        <div className="select-product-sizes">
          <p>Select size</p>
            <div className="product-sizes">
              {sizeButtons.map((size) => (
                <button
                  key={size}
                  className="size-button"
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
          {currentUser  
          ?
          <Link className="cart-button-link">
            <button className="cart-button" onClick={handleCartClick}>
              Add to Cart
            </button>
          </Link> 
            :
          <Link to='/login' >
            <button className="cart-button" >
              Add to Cart
            </button>
          </Link>}
          {errors.map(error => <li key={error}>{error}</li>)}
        </div>
        <div className="product-description">
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

          {showReviews && ( <ReviewsIndex />)}

        </div>
        <div id="breakline"></div>
      </div>
    </div>
    </>
  ) : null;
}

export default ProductShowPage;