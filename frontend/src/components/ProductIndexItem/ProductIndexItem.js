import React from "react";
import productIndexItem from './productIndexItem.css';


function ProductIndexItem() {


  // return (
  //   <>
  //     console.log('hello');
  //   </>
  // );
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src="product-image.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <div className="product-title">
          Nike Air Zoom Pegasus 38
        </div>
        <div className="product-sizes">
          <button className="size-button">7</button>
          <button className="size-button">8</button>
          <button className="size-button">9</button>
          <button className="size-button">10</button>
        </div>
        <div className="add-to-cart">
          <button className="cart-button">Add to Cart</button>
        </div>
        <div className="product-description">
          The Nike Air Zoom Pegasus 38 delivers responsive cushioning and a secure fit. The mesh upper helps provide durability and breathability, while the Nike Zoom unit helps cushion your stride.
        </div>
        <div className="product-reviews">
          <select className="review-dropdown">
            <option value="">Select a review</option>
            <option value="review1">Review 1</option>
            <option value="review2">Review 2</option>
            <option value="review3">Review 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductIndexItem;