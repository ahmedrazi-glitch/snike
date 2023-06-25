import React from "react";
import './productIndexItem.css';


function ProductsIndexItem({product}) {

  return (
    <>
      <div className="product-index-item-wrapper" >
        <img className="photo" src={product.photoUrl} />
        <p>{product.name}</p>
      </div>
    </>
  );
}

export default ProductsIndexItem;