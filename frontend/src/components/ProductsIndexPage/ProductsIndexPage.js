import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts, fetchSearchResults, fetchCategoryProducts } from '../../store/products';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import CategoryComponent from '../CategoryComponent/CategoryComponent.js';
import './productsIndexPage.css';

function ProductIndexPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const params = useParams();

  useEffect(() => {
    const arr = window.location.pathname.split('/');
    if (!arr.includes('search')) {
      dispatch(fetchProducts());
    } else if (arr.includes('Kids')) {
      dispatch(fetchCategoryProducts('Kids'));
    } else if (arr.includes('Mens')) {
      dispatch(fetchCategoryProducts('Mens'));
    } else if (arr.includes('Accessories')) {
      dispatch(fetchCategoryProducts('Accessories'));
    } else if (arr.includes('Womens')) {
      dispatch(fetchCategoryProducts('Womens'));
    } 
  }, [window.location.pathname]);


  return products.length > 0 ? (
    <div className='page-wrapper' >
      <div className="product-index-page">
        {/* <CategoryComponent/> */}
        <div className="products-container">
          {products.map((product, index) => (
            <Link className='actual-link' to={`/products/${product.id}`}>
            <div className="product" key={index}>
              <img className='product-image' src={product.photoUrl} alt={product.name} />
              <h3 className='product-name' >{product.name}</h3>
              <h2 className='product-category' >{product.category}</h2>
              <p className='product-price' >${product.price}</p>
            </div>
            </Link>
          ))}
        </div> 
      </div>
    </div>
  ) : (
    <div className='page-wrapper'>
      <div className="no-results-div">
        <h1>No Results Found</h1>
        <h1>Please try another search term.</h1>
      </div>
    </div>
  );
};

export default ProductIndexPage;

