import React from "react";
import './classicIndexItem.css';

function ClassicIndexItem({product}) {

  return (
    <>
      <div className="classic-product-index-item-wrapper" >
        <img className="classic-product-photo" src={product.photoUrl} />
      </div>
    </>
  );
}

export default ClassicIndexItem;