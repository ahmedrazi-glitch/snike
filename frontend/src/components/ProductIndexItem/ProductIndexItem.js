import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct } from "../../store/products";
// import { Link } from 'react-router-dom';
// import ProductShowPage from "../ProductShowPage/ProductShowPage";
import './productIndexItem.css';


function ProductsIndexItem({product}) {

  return (
    <>
      {/* <Link className="product-box"> */}
        {/* <ProductShowPage />  */}
        {/* // image title price  */}
      {/* </Link> */}
      <img className="photo" src={product.photoUrl} />
    </>
  );
}

export default ProductsIndexItem;